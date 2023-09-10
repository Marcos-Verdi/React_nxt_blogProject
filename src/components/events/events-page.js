import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function EventsPageComponent({data}) {
  return (
    <>
        {data.map(ev =>
            <Link className='eventsPageImage' key={ev.id} href={`/events/${ev.id}`}>
                <div className='card'>
                    <Image src={ev.image} alt={ev.id} height={300} width={200} />
                    <h3>{ev.title}</h3>
                </div>
            </Link>
        )}
    </>
  )
}
