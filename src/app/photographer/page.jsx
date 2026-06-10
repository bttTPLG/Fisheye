import "@/styles/photographerPage.css";
import Header from "@/components/Header/Header";
import PhotographerHeader from "@/components/PhotographerHeader/PhotographerHeader";
import PhotoCard from "@/components/PhotoCard/PhotoCard";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <PhotographerHeader />
        <section className="photo-video-galerie">
          <div className="filter">
            <label htmlFor="filter">Trier par</label>
          </div>
          <div className="gallerie">
            <PhotoCard />
            <PhotoCard />
          </div>
        </section>
      </main>
    </div>
  );
}
