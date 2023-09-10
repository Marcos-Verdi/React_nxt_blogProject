import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage({ data }) {
  return (
    <main>
        {data.map(ev =>
            <Link key={ev.title} href={`/events/${ev.id}`} passHref className='homeLinkContainer'>
              <div>
                <Image width={400} height={250} src={ev.image} alt={ev.title}/>
              </div>
              <div className='homeLinkDescription'>
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </div>
            </Link>
         
        )}
      </main>
  )
}
