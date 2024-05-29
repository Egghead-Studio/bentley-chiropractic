'use server'
import { AnalyticsClient } from '@/events/AnalyticsClient'
import { AnalyticsEvent } from '@/events/types'

// This is a server action which can be called by Client components.
// It sends an event to the analytics provider from the server, therefby
// bypassing any client-side blockers.
export const sendEventFromClient = async (event: AnalyticsEvent) => {
  const client = new AnalyticsClient()
  client.track(event)
}
