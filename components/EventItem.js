import Link from "next/link";
import Image from "next/image";
import style from "@/styles/EventItem.module.css";

const EventItem = ({ evt }) => {
  return (
    <div className={style.event}>
      <div className={style.img}>
        <Image
          src={
            evt.image
              ? evt.image.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={170}
          height={100}
        />
      </div>
      <div className={style.info}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h3>{evt.description}</h3>
      </div>
      <div className={style.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
