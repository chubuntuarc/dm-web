import styles from "./contact.module.css";
import Title_Banner from "../../components/Title_Banner";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contacto() {
  return (
    <div>
      <Title_Banner title="Contacto" />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2>¡Estamos aquí para ayudarte!</h2>
            <button className={styles.ctaButton}>AGENDAR CITA</button>
            <p className={styles.heroText}>
              Queremos brindarte una atención personalizada en todo momento, te invitamos a 
              ponerte en contacto con nosotros. Nuestro equipo está encantado de atenderte y 
              resolver cualquier duda o inquietud que puedas tener. No dudes en comunicarte.
            </p>
          </div>
          
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <div>
                <h3>Email</h3>
                <p>info@nombre-clinica.com</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <FaPhone className={styles.icon} />
              <div>
                <h3>Teléfono</h3>
                <p>+52 (555) 555 1000</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <div>
                <h3>Dirección</h3>
                <p>Blvd. Agua Caliente 11520-227, Plaza Campestre, Colonia Aviación, Tijuana, B.C.N, México 22014</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <FaClock className={styles.icon} />
              <div>
                <h3>Horario</h3>
                <p>Lunes a Viernes - 9:00am a 7:00pm</p>
                <p>Sábados - 9:00am a 4:00pm</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.formSection}>
          <div className={styles.formContent}>
            <h2>Queremos escucharte</h2>
            <p>Tu opinión es lo más valioso. Déjanos saber tus inquietudes y en seguida nuestro equipo se pondrá en contacto directo contigo.</p>
            
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre*</label>
                <input type="text" id="nombre" name="nombre" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="correo">Correo*</label>
                <input type="email" id="correo" name="correo" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="telefono">Teléfono*</label>
                <input type="tel" id="telefono" name="telefono" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="mensaje">Mensaje*</label>
                <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>Enviar</button>
            </form>
          </div>
          
          <div className={styles.formImage}>
            {/* Image will be added via CSS background in the module */}
          </div>
        </div>
      </div>
    </div>
  );
} 