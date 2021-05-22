import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import style from "@/styles/Event.module.css";
import Layout from "@/components/Layout";

const EventPage = ({ evt }) => {
  const deleteEvent = (e) => {
    console.log("delete");
  };
  return (
    <Layout>
      <div className={style.event}>
        <div className={style.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={style.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Events
          </a>
        </div>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={style.image}>
            <Image src={evt.image} width={960} height={600} />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href="/events">
          <a className={style.back}>Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));
  // console.log(paths);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`http://localhost:3000/api/events/${slug}`);
  const events = await res.json();
  return {
    props: { evt: events[0] },
    revalidate: 1,
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`http://localhost:3000/api/events/${slug}`);
//   const events = await res.json();
//   return {
//     props: { evt: events[0] },
//   };
// }
