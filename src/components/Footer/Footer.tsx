'use client'
import React from 'react'
import { Button, ButtonVariant } from '@/components/Button/Button'
import { sendEvent } from '@/events/events'
import { EventName } from '@/events/types'
import { Facebook, Instagram } from 'react-feather'
import { ExternalURL, URLMap } from '@/urls'


export const Footer: React.FC = () => {
  const scheduleAppointment = () => {
    void sendEvent(
      EventName.ClickEvent,
      {
        element: 'schedule-appointment-footer',
      }
    )
    window.open(URLMap[ExternalURL.Booking], '_blank')
  }

  const openSocial = (platform: ExternalURL) => {
    void sendEvent(
      EventName.ClickEvent,
      {
        element: `open-social-${platform}`,
      }
    )

    window.open(URLMap[platform], '_blank')
  }

  return (
    <div className={'bg-secondary py-8 lg:py-12'}>
      <div className={'flex flex-col lg:flex-row gap-8 w-page'}>
        {/* Left Side */}
        <div className={'flex flex-col gap-8 justify-start flex-shrink-0 lg:w-6/12'}>
          <div className={'flex flex-col gap-4'}>
            <div className={'text-xl text-primary-dark font-heading font-bold'}>Bentley Chiropractic</div>
            <Button onClick={() => scheduleAppointment()}>Schedule an appointment</Button>
          </div>

          <div className={'flex flex-col md:flex-col-reverse gap-8'}>
            <div className={'flex flex-col'}>
              <div className={'text-xl text-primary font-heading font-semibold mb-4'}>Contact</div>
              <div><b>Phone:</b> <a className={'text-primary'} type={'tel'} href={'tel:314-866-0123'}>(314)-866-0123</a></div>
              <div><b>Email:</b> <a className={'text-primary'} type={'email'} href={'mailto:matthewbentleydc@gmail.com'}>matthewbentleydc@gmail.com</a></div>
              <div className={'flex gap-2 mt-2'}>
                <Button variant={ButtonVariant.Icon} onClick={() => openSocial(ExternalURL.Instagram)}>
                  <Instagram className={'text-white'} />
                </Button>
                <Button variant={ButtonVariant.Icon} onClick={() => openSocial(ExternalURL.Facebook)}>
                  <Facebook className={'text-white'} />
                </Button>
              </div>
            </div>

            <div className={'flex flex-col gap-8 md:flex-row md:gap-24 lg:gap-12'}>
              <div className={'flex flex-col'}>
                <div className={'text-xl text-primary font-heading font-semibold mb-4'}>Location</div>
                <div className={'font-bold'}>Cranwell Chiropractic Center</div>
                <div>11705 Gravois Rd.</div>
                <div>Sunset Hills, MO 63127</div>
                <div className={'flex gap-2'}>
                  <a href={'https://maps.app.goo.gl/iKxuYJpq1yQLiKXn7'} target={'_blank'} className={'text-primary underline'}>Google Maps</a>
              |
                  <a href={'https://maps.apple.com/?address=11705%20Gravois%20Rd,%20Saint%20Louis,%20MO%20%2063127,%20United%20States&auid=4694201589142238798&ll=38.532812,-90.385496&lsp=9902&q=Bentley%20Chiropractic'} target={'_blank'} className={'text-primary underline'}>Apple Maps</a>
                </div>
              </div>

              <div className={'flex flex-col pb-8'}>
                <div className={'text-xl text-primary font-heading font-semibold mb-4'}>Hours</div>
                <div><b>M-F</b> 9:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>



        {/* Right Side */}
        <div className={'flex flex-col w-full lg:w-6/12'}>
          <iframe className={'aspect-video lg:aspect-square lg:w-full b-0 rounded-lg'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.04010419101!2d-90.38548039999999!3d38.5328437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8337dc416a9cc897%3A0xe55c9ed3eae1d40b!2sBentley%20Chiropractic!5e0!3m2!1sen!2sus!4v1716988964757!5m2!1sen!2sus" width="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  )
}
