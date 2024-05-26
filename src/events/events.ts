import { UUID } from 'crypto'

export enum EventName {
  PageViewEvent = 'page_view',
  ClickEvent = 'button_click',
  ViewEvent = 'view_event',
}

export interface EventProperties {
  distinct_id: string
  path: string
  ip?: string
}

export interface AnalyticsEvent {
  name: EventName
  properties: EventProperties
}
