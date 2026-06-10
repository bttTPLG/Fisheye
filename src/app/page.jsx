import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Card from "@/components/Card/Card";
import Galerie from "@/components/Galerie/Galerie";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header title="Nos Photographe" />
      <main className={styles.main}>
        <Galerie>
          <Card />
          <Card />
          <Card />
          <Card />
        </Galerie>
      </main>
    </div>
  );
}
