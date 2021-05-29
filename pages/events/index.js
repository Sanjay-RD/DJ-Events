import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Upcomming Events</h1>
      {events.length === 0 && <h1>No Events To Show</h1>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/events`);
  const events = await res.json();
  return {
    props: { events },
    revalidate: 1,
  };
}
