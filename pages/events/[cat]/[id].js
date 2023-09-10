import React from 'react'
import SingleEventComponent from '@/src/components/events/single-event-component';

export default function SingleEvent({data}) {
  return (
    <div>
      <SingleEventComponent data={data} />
    </div>
  )
};

export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json');
  const allPaths = allEvents.map(path => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
};

export async function getStaticProps(context) {

  const { allEvents } = await import('/data/data.json');
  const id = context.params.id;
  const eventData = allEvents.find((ev) => id === ev.id);

  return {
    props: {data: eventData},
  }
}

