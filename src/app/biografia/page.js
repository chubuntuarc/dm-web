import React from 'react';
import Link from 'next/link';
import styles from './biografia.module.css';
import Title_Banner from '../../components/Title_Banner';
import Diamond from '../../components/diamond';

export default function Biografia() {
  return (
    <div>
        <Title_Banner title="Biografía" />
        <div className={styles.bio}>
          <div className={styles.bioContent}>
            <h1 className={styles.bioTitle}>Dra. Mileidy Fernández Ribot</h1>
            <p className={styles.bioSubtitle}>MÉDICO ESTÉTICO | EMPRESARIA | ESCRITORA | PRESIDENTA FUNDADORA AMMJE TIJUANA</p>
            
            <div className={styles.bioIntro}>
              <p>
                Más de 25 años dedicados a la medicina, de ellos, más de 15 años a la <strong>Medicina Estética</strong>, en México. Lo que 
                respalda su profesionalismo y la ha llevado a ser referente del ramo a nivel nacional e internacional.
              </p>
            </div>
            
            <div className={styles.bioCards}>
              <div className={styles.bioCard}>
                <div className={styles.bioCardImage}>
                  <img src="/dra_med.jpg" alt="Dra. Mileidy como médico" />
                </div>
                <h2>Médico</h2>
              </div>
              
              <div className={styles.bioCard}>
                <div className={styles.bioCardImage}>
                  <img src="/dra_empresaria.jpg" alt="Dra. Mileidy como empresaria" />
                </div>
                <h2>Empresaria</h2>
              </div>
              
              <div className={styles.bioCard}>
                <div className={styles.bioCardImage}>
                  <img src="/dra_escritora.jpg" alt="Dra. Mileidy como escritora" />
                </div>
                <h2>Escritora</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <h2 className={styles.sectionTitle}>Acerca de mí</h2>
          <div className={styles.aboutContent}>
            <p>
              La doctora Mileidy Fernández Ribot, es médico de profesión. Egresada de la Licenciatura en Medicina, 
              especialista en Anestesiología y Medicina Familiar por el Instituto Superior de Ciencias Médicas de Villa Clara, 
              Cuba. Nació en Cuba, un país donde no existía la Medicina Estética. Pero por azares de la vida se interesó en 
              la belleza, donde encontró su visión personal y propósito de vida, completando su formación profesional en 
              la Universidad Nacional Autónoma de México.
            </p>
            
            <h3 className={styles.subTitle}>Miembro Fundador y Directora General</h3>
            <p>
              De la empresa clínica GEN S. de R.L. de C.V. conformada por la Clínica Imagen Art y Farmacia Dermatológica 
              Campestre. Ha sido acreedora de dos diplomados en el Tecnológico de Monterrey, Dirección Gerencial y 
              Liderazgo. Cuenta con una Certificación Internacional en Liderazgo por John Maxwell. También certificada 
              en El Arte de Hablar en Público por el doctor César Lozano.
            </p>
            
            <div className={styles.vision}>
              <div className={styles.diamondIcon}>
                <Diamond />
              </div>
              <div className={styles.visionText}>
                <b className={styles.visionTitle}>Su visión personal:</b>
                <p>
                  Dignificar la práctica de la Medicina Estética en tanto apoyo en la inclusión exitosa de la mujer en el mundo 
                  empresarial.
                </p>
              </div>
            </div>
            
            <h3 className={styles.subTitle}>Cursos y/o Certificaciones</h3>
            <p>
              Finalizó un programa de capacitación en Monterrey titulado Empresarios de alto Rendimiento, es actualmente miembro activo de 
              Board Media una comunidad colaborativa de CEO'S de habla hispana.
            </p>
            
            <h3 className={styles.subTitle}>Premios / Colaboraciones</h3>
            <p>
              Agradecida con México, país que lleva en su corazón, eligió aceptar el reto de ser la presidenta fundadora de una de las asociaciones más 
              influyentes del estado en cuanto a representación de mujeres empresarias, la Asociación Mexicana de Mujeres Jefas de Empresa 
              Representación Tijuana, por sus siglas AMMJE. Con la intención de continuar fortaleciendo AMMJE Representación Tijuana y a la vez, 
              apoyando en aportar representaciones en Baja California, aceptó el reto de nuevamente ser elegida presidenta de representación. Su 
              intención es sembrar cimientos porque reconoce que todas podemos ser mentoras de alguien más.
            </p>
            <p>
              Actualmente continúa trabajando junto al equipo de empresarias que conforman AMMJE Tijuana por ser un precedente de modelo 
              a seguir, logrando mediante su liderazgo generar un ecosistema seguro que inspire sus asociadas a perseguir sus metas, 
              demostrándoles, además, con esfuerzo, dedicación y trabajo en equipo, las mujeres pueden lograr grandes cosas en el mundo de los 
              negocios.
            </p>
          </div>
        </div>
    </div>
  );
}
