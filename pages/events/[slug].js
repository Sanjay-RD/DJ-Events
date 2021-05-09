import { useRouter } from "next/router";
const EventPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>My Event page</h1>
      <h2>my events params : {router.query.slug}</h2>
      <button onClick={() => router.push("/")}>Home Page </button>
    </div>
  );
};

export default EventPage;
