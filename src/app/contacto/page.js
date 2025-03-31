import styles from "./contact.module.css";
import Title_Banner from "../../components/Title_Banner";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContentCard from "../../components/ContentCard";
import Mail from "../../components/mail";
import Phone from "../../components/phone";
import Address from "../../components/address";

export default function Contacto() {
  return (
    <div>
      <Title_Banner title="Contacto" />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <ContentCard
              title="¡Estamos aquí para ayudarte!"
              description="Queremos brindarte una atención personalizada en todo momento, te invitamos a 
                ponerte en contacto con nosotros. Nuestro equipo está encantado de atenderte y 
                resolver cualquier duda o inquietud que puedas tener. No dudes en comunicarte."
              linkUrl="https://api.whatsapp.com/send/?phone=5216642866427&text=%C2%A1Hola%2C+buen+d%C3%ADa%21&type=phone_number&app_absent=0"
              imageSrc="/schedule.webp"
              imageAlt="Schedule"
              showButton={true}
              showIcon={false}
              buttonText="AGENDAR CITA"
            />
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <Mail />
              </div>
              <div>
                <h3>Email</h3>
                <p>info@dramileidydzribot.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <Phone />
              </div>
              <div>
                <h3>Teléfono</h3>
                <p>+52 (664) 290 1000</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <Address />
              </div>
              <div>
                <h3>Dirección</h3>
                <p>
                  Blvd. Agua Caliente 11300-227, Plaza Campestre Colonia
                  Aviación, Tijuana, B.C.N, Mexico 22014
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <Address />
              </div>
              <div>
                <h3>Horario</h3>
                <p>Lunes a viernes</p>
                <p>9:00am a 7:00pm</p>
                <p>Sábados</p>
                <p>9:00am a 4:00pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroContent}>
          <ContentCard
            title="Dejanos un mensaje"
            description="Tu opinión es lo más valioso. Déjanos saber tus inquietudes y en
              seguida nuestro equipo se pondrá en contacto directo contigo."
            linkUrl="https://api.whatsapp.com/send/?phone=5216642866427&text=%C2%A1Hola%2C+buen+d%C3%ADa%21&type=phone_number&app_absent=0"
            imageSrc="/contacts.webp"
            imageAlt="Schedule"
            showButton={false}
            showIcon={false}
            buttonText="AGENDAR CITA"
          />
        </div>

        <div className={styles.formSection}>
          <div className={styles.formContent}>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre <span style={{ color: 'red' }}>*</span></label>
                <input type="text" id="nombre" name="nombre" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="correo">Correo <span style={{ color: 'red' }}>*</span></label>
                <input type="email" id="correo" name="correo" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="telefono">Teléfono <span style={{ color: 'red' }}>*</span></label>
                <input type="tel" id="telefono" name="telefono" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mensaje">Mensaje <span style={{ color: 'red' }}>*</span></label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 