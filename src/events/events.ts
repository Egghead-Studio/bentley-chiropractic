'use server'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { AnalyticsEvent, EventName } from '@/events/types'
import { getSessionInfo } from '@/events/session'

// This is a server action which can be called by Client components.
// It sends an event to the analytics provider from the server, therefby
// bypassing any client-side blockers.
export const sendEventFromClient = async (event: AnalyticsEvent) => {
  const client = new AnalyticsClient()
  client.track(event)
}

export const sendEvent = async (name: EventName, properties: Record<string, string >) => {
  const client = new AnalyticsClient()
  const { ip, sessionID } = await getSessionInfo()
  client.track({
    name: name,
    properties: { distinct_id: sessionID, path: '/', ip, ...properties }
  })
}
