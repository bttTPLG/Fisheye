import Image from "next/image";
import "@/styles/photoCard.css";
import { FaHeart } from "react-icons/fa";

export default function PhotoCard({ title = "Titre", counter = "142" }) {
  return (
    <article>
      <Image
        src="/PhotoTest.jpg"
        width={350}
        height={300}
        alt={`Photo ${title}`}
        className="picture"
      />
      <div className="title-and-like">
        <p>{title}</p>
        <div className="like">
          <p className="counter">{counter}</p>
          <FaHeart className="heart-icon" />
        </div>
      </div>
    </article>
  );
}
