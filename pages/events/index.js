import React from 'react'
import EventsPageComponent from '@/src/components/events/events-page';

export default function EventsPage({ data }) {
    return (
        <div className='eventsPageMainContainer'>
            <EventsPageComponent data={data} />
        </div>
    )
}

export async function getServerSideProps() {
    const { events_categories } = await import('/data/data.json');
  
    return {
      props: {
        data: events_categories,
      },
    }
  }