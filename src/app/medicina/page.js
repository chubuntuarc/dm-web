import styles from "./medicine.module.css";
import Title_Banner from "../../components/Title_Banner";
import ContentCard from "../../components/ContentCard";

export default function Medicina() {
  return (
    <>
      <Title_Banner title="Medicina Estética" />

      <div className={styles.medicineContainer}>
        <p className={styles.expertiseText}>
          Procedimientos avalados por Médicos con más de 15 años de experiencia,
          que dignifican la práctica de la Medicina Estética alineando el Ser al
          Parecer.
        </p>

        <div className={styles.treatmentsGrid}>
          <ContentCard
            imageSrc="/harmony-ca.jpg"
            imageAlt="Harmony Ca"
            title="Harmony Ca"
            description="El mejor estimulante de colágeno del momento con las dos sustancias que tu piel más necesita: ácido hialurónico y su estimulante de colágeno."
            linkText="Ver más"
            linkUrl="/servicios/harmony-ca"
          />

          <ContentCard
            imageSrc="/hilos_tensores.jpg"
            imageAlt="Hilos Tensores"
            title="Hilos Tensores"
            description="Efecto tensor y lifting inmediato en tu rostro, mejorando la definición y textura de la piel."
            linkText="Ver más"
            linkUrl="/servicios/hilos-tensores"
          />

          <ContentCard
            imageSrc="/peeling.jpg"
            imageAlt="Peeling Cosmelan"
            title="Peeling Cosmelan"
            description="El tratamiento más integral para desvanecimiento de manchas en la piel."
            linkText="Ver más"
            linkUrl="/servicios/peeling-cosmelan"
          />

          <ContentCard
            imageSrc="/toxina.jpg"
            imageAlt="Toxina Botulínica"
            title="Toxina Botulínica"
            description="El tratamiento de excelencia para prevención y tratamiento de arrugas y líneas de expresión."
            linkText="Ver más"
            linkUrl="/servicios/toxina-botulinica"
          />

          <ContentCard
            imageSrc="/mesoterapia.jpg"
            imageAlt="Mesoterapia Con Enzimas"
            title="Mesoterapia Con Enzimas"
            description="El tratamiento más efectivo para disminución de grasa localizada facial o corporal."
            linkText="Ver más"
            linkUrl="/servicios/mesoterapia-con-enzimas"
          />

          <ContentCard
            imageSrc="/reset_facial.jpg"
            imageAlt="Reset Facial"
            title="Reset Facial"
            description="Técnica de vanguardia para rejuvenecimiento facial sin cirugía."
            linkText="Ver más"
            linkUrl="/servicios/reset-facial"
          />

          <ContentCard
            imageSrc="/top_model_look.jpg"
            imageAlt="Top Model Look"
            title="Top Model Look"
            description="Técnica de embellecimiento facial para realzar tus rasgos físicos con la aplicación de ácido hialurónico."
            linkText="Ver más"
            linkUrl="/servicios/top-model-look"
          />

          <ContentCard
            imageSrc="/marcacion.jpg"
            imageAlt="Marcación Mandibular"
            title="Marcación Mandibular"
            description="Técnica utilizada para la definición de la parte inferior de tu rostro mediante la aplicación de ácido hialurónico."
            linkText="Ver más"
            linkUrl="/servicios/marcacion-mandibular"
          />
        </div>
      </div>
    </>
  );
}
