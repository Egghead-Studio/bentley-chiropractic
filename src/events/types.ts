/* eslint no-unused-vars: 0 */
export enum EventName {
  PageViewEvent = 'page_view',
  ClickEvent = 'button_click',
  ViewEvent = 'view_event',
  BookAppointment = 'book_appointment',
  NewPatientsPageView = 'new_patients_page_view',
  FAQExpanded = 'faq_expanded',
}

export interface EventProperties {
  distinct_id: string
  path: string
  ip?: string
  [key: string]: any
}

export interface AnalyticsEvent {
  name: EventName
  properties: EventProperties
}
