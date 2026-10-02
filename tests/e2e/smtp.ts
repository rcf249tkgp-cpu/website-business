import { createServer } from 'node:http'
import { simpleParser, type ParsedMail } from 'mailparser'
import { SMTPServer } from 'smtp-server'

/** Minimal SMTP server that records every message it receives. */
export function startMailCatcher(port: number) {
  const messages: ParsedMail[] = []
  const server = new SMTPServer({
    authOptional: true,
    disabledCommands: ['AUTH', 'STARTTLS'],
    logger: false,
    onData(stream, _session, callback) {
      simpleParser(stream)
        .then((mail) => {
          messages.push(mail)
          callback()
        })
        .catch(callback)
    },
  })
  return new Promise<{ messages: ParsedMail[]; close: () => Promise<void> }>((resolve) => {
    server.listen(port, '127.0.0.1', () =>
      resolve({ messages, close: () => new Promise<void>((done) => server.close(() => done())) }),
    )
  })
}

/** Must match SMTP_PORT in playwright.config.ts. */
export const SMTP_PORT = 2526

/** Must match INQUIRY_WEBHOOK_URL in playwright.config.ts. */
export const WEBHOOK_PORT = 2527

/** Minimal HTTP endpoint that records JSON webhook deliveries. */
export function startWebhookCatcher(port: number) {
  const payloads: Record<string, unknown>[] = []
  const server = createServer((req, res) => {
    let body = ''
    req.on('data', (chunk) => (body += chunk))
    req.on('end', () => {
      payloads.push(JSON.parse(body))
      res.writeHead(200).end('ok')
    })
  })
  return new Promise<{ payloads: Record<string, unknown>[]; close: () => Promise<void> }>((resolve) => {
    server.listen(port, '127.0.0.1', () =>
      resolve({ payloads, close: () => new Promise<void>((done) => server.close(() => done())) }),
    )
  })
}
