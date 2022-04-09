export function stripPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\-|\(|\)/, '')
}