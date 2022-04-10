export function stripPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')
}