import React from 'react';
import styles from './biografia.module.css';
import Title_Banner from '../../components/Title_Banner';
import Diamond from '../../components/diamond';
import VideoSection from '../../components/VideoSection';

export default function Biografia() {
  return (
    <div>
      <Title_Banner title="Biografía" />
      <div className={styles.bio}>
        <div className={styles.bioContent}>
          <h1 className={styles.bioTitle}>Dra. Mileidy Fernández Ribot</h1>
          <p className={styles.bioSubtitle}>
            MÉDICO ESTÉTICO | EMPRESARIA | ESCRITORA | PRESIDENTA FUNDADORA
            AMMJE TIJUANA
          </p>

          <div className={styles.bioIntro}>
            <p>
              Más de 25 años dedicados a la medicina, de ellos, más de 15 años a
              la <strong>Medicina Estética</strong>, en México. Lo que respalda
              su profesionalismo y la ha llevado a ser referente del ramo a
              nivel nacional e internacional.
            </p>
          </div>

          <div className={styles.bioCards}>
            <div className={styles.bioCard}>
              <div className={styles.bioCardImage}>
                <img src="/dra_med.jpg" alt="Dra. Mileidy como médico" />
              </div>
              <h2 className={styles.bioCardTitle}>Médico</h2>
            </div>

            <div className={styles.bioCard}>
              <div className={styles.bioCardImage}>
                <img
                  src="/dra_empresaria.jpg"
                  alt="Dra. Mileidy como empresaria"
                />
              </div>
              <h2 className={styles.bioCardTitle}>Empresaria</h2>
            </div>

            <div className={styles.bioCard}>
              <div className={styles.bioCardImage}>
                <img
                  src="/dra_escritora.jpg"
                  alt="Dra. Mileidy como escritora"
                />
              </div>
              <h2 className={styles.bioCardTitle}>Escritora</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <h2 className={styles.sectionTitle}>Acerca de mí</h2>
        <div className={styles.aboutContent}>
          <p>
            La doctora Mileidy Fernández Ribot, es médico de profesión. Egresada
            de la Licenciatura en Medicina, especialista en Anestesiología y
            Medicina Familiar por el Instituto Superior de Ciencias Médicas de
            Villa Clara, Cuba. Nació en Cuba, un país donde no existía la
            Medicina Estética. Pero por azares de la vida se interesó en la
            belleza, donde encontró su visión personal y propósito de vida,
            completando su formación profesional en la Universidad Nacional
            Autónoma de México.
          </p>

          <h3 className={styles.subTitle}>
            Miembro Fundador y Directora General
          </h3>
          <p>
            De la empresa clínica GEN S. de R.L. de C.V. conformada por la
            Clínica Imagen Art y Farmacia Dermatológica Campestre. Ha sido
            acreedora de dos diplomados en el Tecnológico de Monterrey,
            Dirección Gerencial y Liderazgo. Cuenta con una Certificación
            Internacional en Liderazgo por John Maxwell. También certificada en
            El Arte de Hablar en Público por el doctor César Lozano.
          </p>

          <div className={styles.vision}>
            <div className={styles.diamondIcon}>
              <Diamond />
            </div>
            <div className={styles.visionText}>
              <b className={styles.visionTitle}>Su visión personal:</b>
              <p>
                Dignificar la práctica de la Medicina Estética en tanto apoyo en
                la inclusión exitosa de la mujer en el mundo empresarial.
              </p>
            </div>
          </div>

          <h3 className={styles.subTitle}>Cursos y/o Certificaciones</h3>
          <p>
            Finalizó un programa de capacitación en Monterrey titulado
            Empresarios de alto Rendimiento, es actualmente miembro activo de
            Board Media una comunidad colaborativa de CEO'S de habla hispana.
          </p>

          <h3 className={styles.subTitle}>Premios / Colaboraciones</h3>
          <p>
            Agradecida con México, país que lleva en su corazón, eligió aceptar
            el reto de ser la presidenta fundadora de una de las asociaciones
            más influyentes del estado en cuanto a representación de mujeres
            empresarias, la Asociación Mexicana de Mujeres Jefas de Empresa
            Representación Tijuana, por sus siglas AMMJE. Con la intención de
            continuar fortaleciendo AMMJE Representación Tijuana y a la vez,
            apoyando en aportar representaciones en Baja California, aceptó el
            reto de nuevamente ser elegida presidenta de representación. Su
            intención es sembrar cimientos porque reconoce que todas podemos ser
            mentoras de alguien más.
          </p>
          <p>
            Actualmente continúa trabajando junto al equipo de empresarias que
            conforman AMMJE Tijuana por ser un precedente de modelo a seguir,
            logrando mediante su liderazgo generar un ecosistema seguro que
            inspire sus asociadas a perseguir sus metas, demostrándoles, además,
            con esfuerzo, dedicación y trabajo en equipo, las mujeres pueden
            lograr grandes cosas en el mundo de los negocios.
          </p>
        </div>
      </div>
      <div className={styles.path}>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>Revista AMMJE</h3>
              <p className={styles.timelineDate}>Actualidad</p>
              <p>
                En varias ocasiones ha formado parte de la portada de la revista
                Mujer Actual, en donde se le reconoce su labor como empresaria,
                escritora y mujer Influencia de la región. Ha sido entrevistada
                por diferentes medios de comunicación, exposiciones y
                conferencias.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>Distinción Mujer Líder en Baja California</h3>
              <p className={styles.timelineDate}>2023</p>
              <p>
                Acreedora de la Distinción Mujer Líder en Baja California,
                entregada el 31 de marzo del 2023 de parte de la Fundación
                Forjadores de México.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>El Arte de Pulir un Diamante®</h3>
              <p className={styles.timelineDate}>2021</p>
              <p>
                En noviembre del 2021 presentó su libro El arte de pulir un
                diamante en la sala de exposiciones El Cubo, en el Centro
                Cultural Tijuana, en el que ofrece valiosas herramientas para
                una superación personal, basados en dos pilares principales: la
                autoestima saludable y el amor propio.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>La Historia de 100 Mujeres Empresarias</h3>
              <p className={styles.timelineDate}>2023</p>
              <p>
                Coautora del libro la historia de 100 mujeres empresarias en el
                año 2023, disfruta apoyar y participar activamente en las
                asociaciones civiles: Mujer Fascinante y LA ROCA CC.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>Ser Mujer es Fascinante</h3>
              <p className={styles.timelineDate}>2022</p>
              <p>Coautora del libro Ser Mujer es Fascinante.</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>Cumbre BIT Leaders</h3>
              <p className={styles.timelineDate}>2023</p>
              <p>
                A un año y medio de haber tomado protesta como presidenta
                fundadora, marca un hito en la historia de esta asociación
                recibiendo la distinción Mención Honorífica a mejor
                representación. Dicho reconocimiento fue entregado a manos de la
                Presidenta Nacional durante el marco de la Cumbre BIT Leaders el
                2 de noviembre de 2023.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>Coordinadora Nacional de Delegadas</h3>
              <p className={styles.timelineDate}>2024</p>
              <p>
                Nombrada el 19 de enero 2024 Coordinadora Nacional de Delegadas.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.diamondLarge}>
          <Diamond />
        </div>
      </div>
      <VideoSection
        title="Semblanza"
        videoId="fgsJh2w7x2A"
        videoTitle="Semblanza de la Dra. Mileidy Fernández Ribot"
        backgroundColor="#FFF"
        titleColor="#333"
        marginTop="0"
      />
    </div>
  );
}
