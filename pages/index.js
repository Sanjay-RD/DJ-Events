import Layout from "@/components/Layout";
import { AIP_URL } from "../config/index";

export default function Home({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Upcomming Events</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/events`);
  const events = await res.json();
  return {
    props: { events },
    revalidate: 1,
  };
}
