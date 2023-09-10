import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EventsCategoryComponent({data}) {
  return (
    <div className='eventsCategoryContainer'>
        {data.map(ev => (
          <Link key={ev.title} href={`/events/${ev.city}/${ev.id}`} className='eventsCategoryCard'>
            <Image height={200} width={200} src={ev.image} alt={ev.title}/>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
    </div>
  )
}
