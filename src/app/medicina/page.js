import styles from "./medicine.module.css";
import Title_Banner from "../../components/Title_Banner";
import ContentCard from "../../components/ContentCard";
import Link from "next/link";

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
        <Link
          href="https://api.whatsapp.com/send/?phone=5216642866427&text=%C2%A1Hola%2C+buen+d%C3%ADa%21&type=phone_number&app_absent=0"
          target="_blank"
          className={styles.whatsappButton}
        >
          Agenda tu cita
          <svg fill="#fff" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 9 4 L 9 5 L 5 5 L 5 27 L 27 27 L 27 5 L 23 5 L 23 4 L 21 4 L 21 5 L 11 5 L 11 4 Z M 7 7 L 9 7 L 9 8 L 11 8 L 11 7 L 21 7 L 21 8 L 23 8 L 23 7 L 25 7 L 25 9 L 7 9 Z M 7 11 L 25 11 L 25 25 L 7 25 Z M 13 13 L 13 15 L 15 15 L 15 13 Z M 17 13 L 17 15 L 19 15 L 19 13 Z M 21 13 L 21 15 L 23 15 L 23 13 Z M 9 17 L 9 19 L 11 19 L 11 17 Z M 13 17 L 13 19 L 15 19 L 15 17 Z M 17 17 L 17 19 L 19 19 L 19 17 Z M 21 17 L 21 19 L 23 19 L 23 17 Z M 9 21 L 9 23 L 11 23 L 11 21 Z M 13 21 L 13 23 L 15 23 L 15 21 Z M 17 21 L 17 23 L 19 23 L 19 21 Z"/></svg>
        </Link>
      </div>
    </>
  );
}
