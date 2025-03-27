import styles from "./medicine.module.css";
import Image from "next/image";
import Title_Banner from "../../components/Title_Banner";
import Diamond from "../../components/diamond";

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

        <div className={styles.quoteContainer}>
          <h2 className={styles.quote}>
            <span className={styles.quoteLight}>Una </span>
            <span className={styles.quoteBold}>imagen cuidada</span>
            <span className={styles.quoteLight}>
              , es una inversión que te acercará al{" "}
            </span>
            <span className={styles.quoteBold}>éxito.</span>
          </h2>
          <p className={styles.doctorName}>DRA. MILEIDY FERNÁNDEZ RIBOT</p>
        </div>

        <div className={styles.treatmentsGrid}>
          <div className={styles.treatmentCard}>
            <Image
              src="/harmony-ca.jpg"
              alt="Harmony Ca"
              width={200}
              height={150}
              className={styles.treatmentImage}
            />
            <div className={styles.treatmentInfo}>
              <div className={styles.treatmentHeader}>
                <Diamond />
                <h3>Harmony Ca</h3>
              </div>
              <p>
                El mejor estimulante de colágeno del momento con las dos
                sustancias que tu piel más necesita: ácido hialurónico y su
                estimulante de colágeno.
              </p>
              <a href="#" className={styles.treatmentLink}>
                Ver más
              </a>
            </div>
          </div>

          <div className={styles.treatmentCard}>
            <Image
              src="/hilos_tensores.jpg"
              alt="Hilos Tensores"
              width={200}
              height={150}
              className={styles.treatmentImage}
            />
            <div className={styles.treatmentInfo}>
              <div className={styles.treatmentHeader}>
                <Diamond />
                <h3>Hilos Tensores</h3>
              </div>
              <p>
                Efecto tensor y lifting inmediato en tu rostro, mejorando la
                definición y textura de la piel.
              </p>
              <a href="#" className={styles.treatmentLink}>
                Ver más
              </a>
            </div>
          </div>

          <div className={styles.treatmentCard}>
            <Image
              src="/peeling.jpg"
              alt="Peeling Cosmelan"
              width={200}
              height={150}
              className={styles.treatmentImage}
            />
            <div className={styles.treatmentInfo}>
              <div className={styles.treatmentHeader}>
                <Diamond />
                <h3>Peeling Cosmelan</h3>
              </div>
              <p>
                El tratamiento más integral para desvanecimiento de manchas en
                la piel.
              </p>
              <a href="#" className={styles.treatmentLink}>
                Ver más
              </a>
            </div>
          </div>

          <div className={styles.treatmentCard}>
            <Image
              src="/toxina.jpg"
              alt="Toxina Botulínica"
              width={200}
              height={150}
              className={styles.treatmentImage}
            />
            <div className={styles.treatmentInfo}>
              <div className={styles.treatmentHeader}>
                <Diamond />
                <h3>Toxina Botulínica</h3>
              </div>
              <p>
                El tratamiento de excelencia para prevención y tratamiento de
                arrugas y líneas de expresión.
              </p>
              <a href="#" className={styles.treatmentLink}>
                Ver más
              </a>
            </div>
          </div>

          <div className={styles.treatmentCard}>
            <Image
              src="/mesoterapia.jpg"
              alt="Toxina Botulínica"
              width={200}
              height={150}
              className={styles.treatmentImage}
            />
            <div className={styles.treatmentInfo}>
              <div className={styles.treatmentHeader}>
                <Diamond />
                <h3>Mesoterapia Con Enzimas</h3>
              </div>
              <p>
                El tratamiento más efectivo para disminución de grasa localizada
                facial o corporal.
              </p>
              <a href="#" className={styles.treatmentLink}>
                Ver más
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
