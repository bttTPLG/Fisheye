"use client";

import Image from "next/image";
import "@/styles/photoCard.css";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function PhotoCard({ title = "Titre", counter = 14 }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(counter);

  const addLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

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
          <p className="counter">{likes}</p>
          <FaHeart className="heart-icon" onClick={addLike} />
        </div>
      </div>
    </article>
  );
}
