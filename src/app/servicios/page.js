import styles from './services.module.css';
import Image from 'next/image';
import Title_Banner from '../../components/Title_Banner';
import Diamond from "../../components/diamond";

export default function Servicios() {
  return (
    <>
      <Title_Banner title="Servicios" />
      <div className={styles.servicesContainer}>
        <h2 className={styles.servicesHeading}>
          Descubre los tratamientos <span className={styles.premium}>premium de rejuvenecimiento</span>
          <p className={styles.subHeading}>que tenemos para ti.</p>
        </h2>
        
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}><Diamond /></div>
            <h3 className={styles.serviceTitle}>Medicina Estética</h3>
            <p className={styles.serviceDescription}>
              Nuestra misión dentro de la Medicina Estética es ser tu mejor opción
              de acompañamiento en tu proceso de rejuvenecimiento.
            </p>
            <a href="#" className={styles.serviceLink}>Ver más →</a>
            <div className={styles.serviceImageContainer}>
              <Image 
                src="/harmony_medical.jpg" 
                alt="Medicina Estética" 
                width={400} 
                height={300}
                className={styles.serviceImage}
              />
            </div>
          </div>
          
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}><Diamond /></div>
            <h3 className={styles.serviceTitle}>Dermatológica Campestre</h3>
            <p className={styles.serviceDescription}>
              Productos dermatológicos con más de 20 años de probada
              eficacia en el mercado brindando así a nuestros clientes
              kits personalizados de skin care.
            </p>
            <a href="#" className={styles.serviceLink}>Ver más →</a>
            <div className={styles.serviceImageContainer}>
              <Image 
                src="/derma.png" 
                alt="Dermatológica Campestre" 
                width={400} 
                height={300}
                className={styles.serviceImage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
