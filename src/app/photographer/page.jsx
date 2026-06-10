import styles from "../page.module.css";
import Header from "@/components/Header/Header";
import Galerie from "@/components/Galerie/Galerie";
import PhotographerHeader from "@/components/PhotographerHeader/PhotographerHeader";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <PhotographerHeader />
        <Galerie></Galerie>
      </main>
    </div>
  );
}
