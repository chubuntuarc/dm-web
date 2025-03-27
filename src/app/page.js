import Image from "next/image";
import styles from "./page.module.css";
import Diamond from "../components/diamond";

import Head from "next/head";
import VideoSection from "../components/VideoSection";
import MainSection from "../components/MainSection";

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
        <MainSection />
        <VideoSection 
          title="Semblanza de la Dra. Mileidy Fernández Ribot"
          videoId="fgsJh2w7x2A"
          videoTitle="Semblanza de la Dra. Mileidy Fernández Ribot"
          backgroundColor="#FFF9F0"
          titleColor="#333"
        />
        
        <div className={styles.services}>
          <h2>Nuestros Servicios</h2>
          <p className={styles.servicesIntro}>
            Descubre los tratamientos premium de rejuvenecimiento que tenemos
            para ti.
          </p>

          <div className={styles.servicesList}>
            <div className={styles.serviceImage}>
              <Image
                src="/services.jpg"
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
