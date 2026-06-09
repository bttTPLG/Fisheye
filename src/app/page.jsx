import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Card from "@/components/Card/Card";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header title="Nos Photographe" />
      <main className={styles.main}>
        <div className={styles.photographerContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
