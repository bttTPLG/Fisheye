import "@/styles/photographerHeader.css";
import Image from "next/image";
import Button from "../Button/Button";

export default function PhotographerHeader({
  name = "Paul",
  localisation = "Paris, France",
  citation = "Le beau dans l'instant figé !",
}) {
  return (
    <section className="photographer-header">
      <div className="photographer-presentation">
        <h1>{name}</h1>
        <p className="localisation">{localisation}</p>
        <p className="citation">{citation}</p>
      </div>
      <Button name="Cantacter moi !"></Button>
      <Image
        src="/profil2.png"
        width={200}
        height={200}
        alt={`Photo de profil de ${name}`}
        className="profile-img"
      />
    </section>
  );
}
