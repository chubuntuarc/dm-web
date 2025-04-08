import QuoteLeft from "../components/quote_left";
import QuoteRight from "../components/quote_right";
import Link from "next/link";
import styles from "./main_section.module.css";
import Diamond from "./diamond";
import Image from "next/image";

export default function MainSection({ size }) {
  return (
    <>
      {size === "mobile" ? (
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
      ) : (
        <div className={styles.headerDesktop}>
          <div className={styles.leftColumn}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Dra. Mileidy</h1>
              <h1 className={styles.titleBold}>
                Fernández Ribot
              </h1>
              <h2 className={styles.subtitle}>MÉDICO ESTÉTICO | EMPRESARIA | ESCRITORA</h2>
            </div>
            <Diamond />
            <div className={styles.quoteContainer}>
              <div className={styles.quoteLeft}>
                <QuoteLeft />
              </div>
              <p className={styles.quoteText}>
                La relación más importante de tu vida, es la relación que tienes contigo misma, es por eso por lo que debes <span className={styles.bold}>cuidarla</span>, <span className={styles.bold}>alimentarla</span> y <span className={styles.bold}>fortalecerla</span>.
              </p>
              <div className={styles.quoteRight}>
                <QuoteRight />
              </div>
            </div>
            <p className={styles.quoteAuthor}>DRA. MILEIDY FERNÁNDEZ RIBOT</p>
            <div className={styles.buttons}>
              <Link href="/servicios">
                <button className={styles.button}>SERVICIOS</button>
              </Link>
              <Link href="/contacto">
                <button className={styles.button}>CONTACTO</button>
              </Link>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.profileImageDesktop}
                src="/dra_escritora.jpg"
                alt="Dra. Mileidy Fernández Ribot"
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes, adjust as needed
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}