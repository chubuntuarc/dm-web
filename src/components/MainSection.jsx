import QuoteLeft from "../components/quote_left";
import QuoteRight from "../components/quote_right";
import Link from "next/link";
import styles from "./main_section.module.css";
import Diamond from "./diamond";
import Image from "next/image";

export default function MainSection() {
  return (
    <div className={styles.header}>
      <div className={styles.headerBackground}>
        <Image
          className={styles.profileImage}
          src="/dra_escritora.jpg"
          alt="Dra. Mileidy Fernández Ribot"
          priority
          fill
          sizes="100vw"
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.headerContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Dra. Mileidy</h1>
          <h1 className={styles.titleBold}>
            Fernández Ribot
          </h1>
          <h2 className={styles.subtitle}>MÉDICO ESTÉTICO | EMPRESARIA | ESCRITORA</h2>
        </div>
        
        <div className={styles.buttons}>
          <Link href="/servicios">
            <button className={styles.button}>SERVICIOS</button>
          </Link>
          <Link href="/contacto">
            <button className={styles.button}>CONTACTO</button>
          </Link>
        </div>
      </div>
    </div>
  );
}