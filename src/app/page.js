import Image from "next/image";
import styles from "./page.module.css";
import Diamond from "../components/diamond";
import QuoteLeft from "../components/quote_left";
import QuoteRight from "../components/quote_right";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>Dra. Mileidy</h1>
            <h1>
              <b>Fernández Ribot</b>
            </h1>
            <h2>MÉDICO ESTÉTICO | EMPRESARIA | ESCRITORA</h2>
            <div className={styles.diamond}>
              <Diamond />
            </div>
            <blockquote className={styles.quote}>
              <div className={styles.quoteLeft}>
                <QuoteLeft />
              </div>
              <p>
                "La relación más importante de tu vida, es la relación que
                tienes contigo misma, es por eso por lo que debes cuidarla,
                alimentarla y fortalecerla."
              </p>
              <footer>DRA. MILEIDY FERNÁNDEZ RIBOT</footer>
              <div className={styles.quoteRight}>
                <QuoteRight />
              </div>
              <div className={styles.buttons}>
                <Link href="/servicios">
                  <button className={styles.button}>SERVICIOS</button>
                </Link>
                <Link href="/contacto">
                  <button className={styles.button}>CONTACTO</button>
                </Link>
              </div>
            </blockquote>
          </div>
          <Image
            className={styles.profileImage}
            src="https://dramileidyfdzribot.com/wp-content/uploads/2024/11/dra_escritora-681x1024.jpg"
            alt="Dra. Mileidy Fernández Ribot"
            width={500}
            height={600}
            priority
          />
        </div>
        <div className={styles.videoContainer}>
          <h2 className={styles.videoTitle}>
            Semblanza de la Dra. <br /> Mileidy Fernández Ribot
          </h2>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/fgsJh2w7x2A"
              title="Semblanza de la Dra. Mileidy Fernández Ribot"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height="400px"
            ></iframe>
          </div>
        </div>
        <div className={styles.services}>
          <h2>Nuestros Servicios</h2>
          <p className={styles.servicesIntro}>
            Descubre los tratamientos premium de rejuvenecimiento que tenemos
            para ti.
          </p>

          <div className={styles.servicesList}>
            <div className={styles.serviceImage}>
              <Image
                src="https://dramileidyfdzribot.com/wp-content/uploads/2024/08/servicios-inicio-1.jpg"
                alt="Servicios de medicina estética"
                width={300}
                height={380}
              />
            </div>

            <div className={styles.servicesContent}>
              <div className={styles.serviceItem}>
                <div className={styles.serviceDiamond}>
                  <Diamond />
                </div>
                <h3>Medicina Estética</h3>
                <p>
                  Procedimientos avalados por Médicos con más de 15 años de
                  experiencia, que dignifican la práctica de la Medicina
                  Estética alineando el Ser al Parecer.
                </p>
                <button className={styles.serviceButton}>Conocer más</button>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.serviceDiamond}>
                  <Diamond />
                </div>
                <h3>Dermatológica Campestre</h3>
                <p>
                  Soluciones integrales de productos top en el mercado para el
                  manejo, cuidado y protección de la piel.
                </p>
                <button className={styles.serviceButton}>Conocer más</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
