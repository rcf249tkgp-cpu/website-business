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
