import styles from "./contact.module.css";
import Title_Banner from "../../components/Title_Banner";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContentCard from "../../components/ContentCard";
import Mail from "../../components/mail";
import Phone from "../../components/phone";
import Address from "../../components/address";
import Alarm from "../../components/alarm";
export default function Contacto() {
  return (
    <div>
      <Title_Banner title="Contacto" />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent + " " + styles.heroDesktop}>
            <div className={styles.heroLayout}>
              <div className={styles.imageContainer}>
                <img
                  src="/schedule_desktop.png"
                  alt="Mujer sonriente"
                  className={styles.heroImage}
                />
              </div>

              <div className={styles.heroInfo}>
                <h2 className={styles.heroTitle}>
                  ¡Estamos aquí para ayudarte!
                </h2>
                <p className={styles.heroDescription}>
                  Queremos brindarte una atención personalizada en todo momento,
                  te invitamos a ponerte en contacto con nosotros. Nuestro
                  equipo estará encantado de apoyarte y resolver cualquier duda
                  o inquietud que puedas tener. No dudes en comunicarte.
                </p>

                <a
                  href="https://api.whatsapp.com/send/?phone=5216642866427&text=%C2%A1Hola%2C+buen+d%C3%ADa%21&type=phone_number&app_absent=0"
                  className={styles.scheduleButton}
                >
                  AGENDAR CITA
                </a>

                <div className={styles.contactGrid}>
                  <div className={styles.contactItem}>
                    <Mail />
                    <div className={styles.contactText}>
                      <h3>Email</h3>
                      <p>info@dramileidydzribot.com</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <Phone />
                    <div className={styles.contactText}>
                      <h3>Teléfono</h3>
                      <p>+52 (664) 290 1000</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <Address />
                    <div className={styles.contactText}>
                      <h3>Dirección</h3>
                      <p>
                        Blvd. Agua Caliente 11300-227, Plaza Campestre Colonia
                        Aviación, Tijuana, B.C.N, Mexico 22014
                      </p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <Alarm />
                    <div className={styles.contactText}>
                      <h3>Horario</h3>
                      <p>Lunes a viernes - 9:00am a 7:00pm</p>
                      <p>Sábados - 9:00am a 4:00pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroContent + " " + styles.heroMobile}>
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
                  <Alarm />
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
        </div>

        <div className={styles.formContainer}>
          <div className={styles.contentWrapper}>
            <div className={styles.formSection}>
              <div className={styles.formHeader}>
                <h2>Déjanos un mensaje</h2>
                <p>
                  Tu opinión es lo más valioso. Déjanos saber tus inquietudes y
                  en seguida nuestro equipo se pondrá en contacto directo
                  contigo.
                </p>
              </div>
              <div className={styles.formContent}>
                <form className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="nombre">
                      Nombre <span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" id="nombre" name="nombre" required />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="correo">
                      Correo <span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="email" id="correo" name="correo" required />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="telefono">
                      Teléfono <span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="tel" id="telefono" name="telefono" required />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="mensaje">
                      Mensaje <span style={{ color: "red" }}>*</span>
                    </label>
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

            <div className={styles.imageSection}>
              <img
                src="/contacts.webp"
                alt="Contact us"
                className={styles.contactImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 