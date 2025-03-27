import styles from "./asociation.module.css";
import Title_Banner from "../../components/Title_Banner";
import Image from "next/image";

export default function Asociaciones() {
  return (
    <div>
      <Title_Banner title="Asociaciones" />
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Asociaciones</h2>
          <p className={styles.intro}>
            Dra. Mileidy se siente parte y colabora con la visión de asociaciones como:
          </p>
          
          <div className={styles.associationsGrid}>
            <div className={styles.associationCard}>
              <div className={styles.imageContainer}>
                <Image 
                  src="/images/asociaciones/la-roca-cc.jpg" 
                  alt="La Roca CC" 
                  width={300} 
                  height={200}
                  className={styles.associationImage}
                />
              </div>
              <h3>La Roca CC</h3>
              <p>Comunidad cristiana que agrupa a ciertas personas y tiene la visión de acercar familias a Dios y su propósito, buscando restaurar moral y espiritualmente a la sociedad.</p>
            </div>
            
            <div className={styles.associationCard}>
              <div className={styles.imageContainer}>
                <Image 
                  src="/images/asociaciones/ammje.jpg" 
                  alt="Asociación Mexicana de Mujeres Jefas de Empresa" 
                  width={300} 
                  height={200}
                  className={styles.associationImage}
                />
              </div>
              <h3>Asociación Mexicana de Mujeres Jefas de Empresa (AMMJE)</h3>
              <p>Asociación que tiene la misión de impulsar el talento empresarial de las mujeres empresarias de México.</p>
            </div>
            
            <div className={styles.associationCard}>
              <h3>Mujer Fascinante</h3>
              <p>Asociación que apoya el desarrollo personal, espiritual y la inteligencia emocional de las mujeres como herramientas fundamentales para vivir una vida plena.</p>
            </div>
            
            <div className={styles.associationCard}>
              <h3>Fundación Clínica GEN: "Piel Libre de Acné"</h3>
              <p>Promoviendo la aceptación y el respeto hacia la belleza natural, acompañando al adolescente en su proceso de abrazar el autoconcepto, la autoestima y el amor propio.</p>
            </div>
            
            <div className={styles.associationCard}>
              <h3>"Semillas Para Un Nuevo Comienzo"</h3>
              <p>Programa diseñado por AMMJE Tijuana, en colaboración con CESIPE y la Secretaría de Economía, para brindar capacitación a las mujeres recién salidas y próximas a salir de su privación de libertad, con el objetivo de brindarles las herramientas necesarias para que asuman la responsabilidad de generar una vida productiva y equilibrada.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
