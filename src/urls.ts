/* eslint no-unused-vars: 0 */
export enum ExternalURL {
  Booking = 'booking',
  Facebook = 'facebook',
  Instagram = 'instagram',
}

export const URLMap = {
  [ExternalURL.Booking]: 'https://bentleychiropractic.janeapp.com/#/staff_member/1/treatment/1',
  [ExternalURL.Facebook]: 'https://www.facebook.com/bentleychiropracticstl',
  [ExternalURL.Instagram]: 'https://www.instagram.com/bentleychiropracticstl/',
}
