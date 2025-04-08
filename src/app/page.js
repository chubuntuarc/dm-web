import Image from "next/image";
import styles from "./page.module.css";
import Diamond from "../components/diamond";

import Head from "next/head";
import VideoSection from "../components/VideoSection";
import MainSection from "../components/MainSection";
import QuoteLeft from '../components/quote_left';
import QuoteRight from '../components/quote_right';
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </Head>
      <main className={styles.main}>
        <div className={styles.mobileHeader}>
          <MainSection size="mobile" />
        </div>
        <div className={styles.desktopHeader}>
          <MainSection size="desktop" />
        </div>
        <div className={styles.quoteSection + " " + styles.hideDesktop}>
          <div className={styles.quoteContainer}>
            <div className={styles.diamondIcon}>
              <Diamond />
            </div>
            <div className={styles.quoteLeft}>
              <QuoteLeft />
            </div>
            <p className={styles.quoteText}>
              <span className={styles.quoteItalic}>
                La relación más importante de tu vida,
              </span>
              <span className={styles.quoteItalic}>
                es la relación que tienes contigo
              </span>
              <span className={styles.quoteItalic}>
                misma, es por eso por lo que debes
              </span>
              <span className={styles.quoteBold}>
                cuidarla, alimentarla y fortalecerla.
              </span>
            </p>
            <div className={styles.quoteRight}>
              <QuoteRight />
            </div>
            <p className={styles.quoteAuthor}>DRA. MILEIDY FERNÁNDEZ RIBOT</p>
          </div>
        </div>
        <VideoSection
          title="Semblanza de la Dra. Mileidy Fernández Ribot"
          videoId="fgsJh2w7x2A"
          videoTitle="Semblanza de la Dra. Mileidy Fernández Ribot"
          backgroundColor="var(--cream)"
          titleColor="#333"
        />

        <div className={styles.services}>
          <h2>Nuestros Servicios</h2>
          <p className={styles.servicesIntro}>
            Descubre los tratamientos premium de rejuvenecimiento que tenemos
            para ti.
          </p>

          <div className={styles.servicesList}>
            <div className={styles.servicesContent}>
              <div className={styles.serviceItem}>
                <h3>
                  <span>
                    <Diamond />
                  </span>
                  Medicina Estética
                </h3>
                <p>
                  Procedimientos avalados por Médicos con más de 15 años de
                  experiencia, que dignifican la práctica de la Medicina
                  Estética alineando el Ser al Parecer.
                </p>
                <Link href="/medicina" className={styles.serviceButton}>
                  Conocer más
                </Link>
              </div>

              <div className={styles.serviceItem}>
                <h3>
                  <span>
                    <Diamond />
                  </span>
                  Dermatológica Campestre
                </h3>
                <p>
                  Soluciones integrales de productos top en el mercado para el
                  manejo, cuidado y protección de la piel.
                </p>
                <Link href="/dermatologia" className={styles.serviceButton}>
                  Conocer más
                </Link>
              </div>
            </div>
            <div className={styles.serviceImage}>
              <Image
                src="/services.jpg"
                alt="Servicios de medicina estética"
                width={300}
                height={380}
              />
            </div>
          </div>
        </div>

        <div className={styles.carrer}>
          <h2>Trayectoria</h2>
          <p className={styles.carrerSubtitle}>
            CRECIMIENTO DE UNA MUJER EXTRAORDINARIA
          </p>
          <p className={styles.carrerDescription}>
            Conoce más de la Dra. Mileidy Fernández Ribot. Descubre su historia,
            su filosofía de vida y el crecimiento de una mujer visionaria.
          </p>
          <Link href="/trayectoria" className={styles.carrerButton}>
            Ver más
          </Link>
          <div className={styles.carrerImage}>
            <Image
              src="/inicio-trayectoria.jpg"
              alt="Dra. Mileidy Fernández Ribot"
              width={300}
              height={450}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
