export enum EventName {
  PageViewEvent = 'page_view',
  ClickEvent = 'button_click',
  ViewEvent = 'view_event',
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
