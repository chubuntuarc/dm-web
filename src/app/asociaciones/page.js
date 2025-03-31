import styles from "./asociation.module.css";
import Title_Banner from "../../components/Title_Banner";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";

export default function Asociaciones() {
  return (
    <div>
      <Title_Banner title="Asociaciones" />
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.intro}>
            Dra. Mileidy se siente parte y colabora con la visión de asociaciones como:
          </p>
          
          <div className={styles.associationsGrid}>
            <ContentCard 
              title="La Roca CC"
              description="Comunidad cristiana que agrupa a ciertas personas y tiene la visión de acercar familias a Dios y su propósito, buscando restaurar moral y espiritualmente a la sociedad."
              imageSrc="/la_roca.jpg"
              imageAlt="La Roca CC"
              showIcon={false}
              showButton={false}
            />
            
            <ContentCard 
              title="Asociación Mexicana de Mujeres Jefas de Empresa (AMMJE)"
              description="Asociación que tiene la misión de impulsar el talento empresarial de las mujeres empresarias de México."
              imageSrc="/ammje.jpg"
              imageAlt="Asociación Mexicana de Mujeres Jefas de Empresa"
              showIcon={false}
              showButton={false}
            />
            
            <ContentCard 
              title="Mujer Fascinante"
              description="Asociación que apoya el desarrollo personal, espiritual y la inteligencia emocional de las mujeres como herramientas fundamentales para vivir una vida plena."
              showIcon={false}
              showButton={false}
              showImage={false}
            />
            
            <ContentCard 
              title="Fundación Clínica GEN: Piel Libre de Acné"
              description="Promoviendo la aceptación y el respeto hacia la belleza natural, acompañando al adolescente en su proceso de abrazar el autoconcepto, la autoestima y el amor propio."
              showIcon={false}
              showButton={false}
              showImage={false}
            />
            
            <ContentCard 
              title="Semillas Para Un Nuevo Comienzo"
              description="Programa diseñado por AMMJE Tijuana, en colaboración con CESIPE y la Secretaría de Economía, para brindar capacitación a las mujeres recién salidas y próximas a salir de su privación de libertad, con el objetivo de brindarles las herramientas necesarias para que asuman la responsabilidad de generar una vida productiva y equilibrada."
              showIcon={false}
              showButton={false}
              showImage={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
