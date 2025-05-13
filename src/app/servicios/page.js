import styles from './services.module.css';
import Image from 'next/image';
import Title_Banner from '../../components/Title_Banner';
import Diamond from "../../components/diamond";
import QuoteLeft from "../../components/quote_left";
import QuoteRight from "../../components/quote_right";
import ContentCard from '../../components/ContentCard';

export default function Servicios() {
  return (
    <>
      <Title_Banner title="Servicios" />
      <div className={styles.servicesContainer}>
        <h2 className={styles.servicesHeading}>
          Descubre los tratamientos <b>premium de rejuvenecimiento </b>
          que tenemos para ti.
        </h2>

        <div className={styles.servicesIntro}>
          <div className={styles.quoteContainer}>
            <div className={styles.quoteIconLeft}>
              <QuoteLeft />
            </div>
            <div className={styles.quoteText}>
              <p>
                <span className={styles.quoteBold}>Una imagen cuidada</span>
                <span className={styles.quoteItalic}>
                  , es una inversión que te acercará al{" "}
                </span>
                <span className={styles.quoteBold}>éxito.</span>
              </p>
              <p className={styles.quoteAuthor}>DRA. MILEIDY FERNÁNDEZ RIBOT</p>
              <div className={styles.quoteIconRight}>
                <QuoteRight />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          <ContentCard
            imageSrc="/imagenart.png"
            imageAlt="Medicina Estética"
            title="Medicina Estética"
            description="Nuestra misión dentro de la Medicina Estética es ser tu mejor opción de acompañamiento en tu proceso de rejuvenecimiento."
            linkUrl="/medicina"
            isButton={true}
          />

          <ContentCard
            imageSrc="/farmacia-campestre.png"
            imageAlt="Dermatológica Campestre"
            title="Dermatológica Campestre"
            description="Productos dermatológicos con más de 20 años de probada eficacia en el mercado brindando así a nuestros clientes kits personalizados de skin care."
            linkUrl="/dermatologia"
          />
        </div>
      </div>
    </>
  );
}
