import React from 'react'
import EventsCategoryComponent from '@/src/components/events/events-category-page';

export default function EventsCategories({ data }) {
  return (
    <div className='eventsCategoryPageContainer'>
        <EventsCategoryComponent data={data} />
    </div>
  )
}

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map(ev => {
      return {
          params: {
              cat: ev.id.toString()
          }
      }
  })

  return {
      paths: allPaths,
      fallback: false,
  }
};

export async function getStaticProps(context) {
  const id = context.params.cat;
  const { allEvents } = await import('/data/data.json');
  const data = allEvents.filter(ev => ev.city === id);

  return {
      props: { data }
  }
}
