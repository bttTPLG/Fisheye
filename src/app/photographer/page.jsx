"use client";

import "@/styles/photographerPage.css";
import Header from "@/components/Header/Header";
import PhotographerHeader from "@/components/PhotographerHeader/PhotographerHeader";
import PhotoCard from "@/components/PhotoCard/PhotoCard";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import FormModal from "@/components/FormModal/FormModal";

export default function Home({ price = "300€/jour" }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const likephoto1 = 14;
  const likephoto2 = 17;
  const [likes, setLikes] = useState(likephoto1 + likephoto2);
  return (
    <div className="page">
      <Header />
      <main className="main">
        <PhotographerHeader contact={openModal} />
        <section className="photo-video-galerie">
          <div className="filter">
            <label htmlFor="filter">Trier par</label>
          </div>
          <div className="gallerie">
            <PhotoCard likecounter={likephoto1} updatLike={setLikes} />
            <PhotoCard likecounter={likephoto2} updatLike={setLikes} />
          </div>
        </section>

        <div className="cta">
          <div className="like">
            <p className="counter">{likes}</p>
            <FaHeart className="heart-icon" />
          </div>
          <p className="price">{price}</p>
        </div>

        {isOpen ? <FormModal close={closeModal} /> : null}
      </main>
    </div>
  );
}
