export function isHoneypotFilled(body: unknown): boolean {
  return (
    body !== null &&
    typeof body === 'object' &&
    'honeypot' in body &&
    typeof (body as { honeypot: unknown }).honeypot === 'string' &&
    (body as { honeypot: string }).honeypot.length > 0
  )
}
