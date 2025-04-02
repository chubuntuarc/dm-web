"use client"
import React from "react";
import styles from "./path.module.css";
import Title_Banner from "../../components/Title_Banner";
import { useState } from "react";
import Diamond from "../../components/diamond";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextImage from "../../components/TextImage";
import Chapters from "../../components/Chapters";
import Arrow from "../../components/arrow";
import QuoteLeft from "../../components/quote_left";
import QuoteRight from "../../components/quote_right";

export default function Trayectoria() {
  const [activeTab, setActiveTab] = useState("Trayectoria");
  const [activeTitle, setActiveTitle] = useState("Trayectoria");
  const [activeImage, setActiveImage] = useState("/dra_path.jpg");

  const slides = [
    {
      id: 1,
      image: "/slide_one.jpg",
      title: "Empleada",
      description:
        "Me gradué de médico especialista y trabajé como empleada en el hospital principal del estado de Cienfuegos, Cuba como empleada por 13 años.",
    },
    {
      id: 2,
      image: "/slide_two.jpg",
      title: "Autoempleada",
      description:
        "Luego de llegar a México en el año 2008 Comienzo apoyando a otros anestesiólogos mientras validaba mis títulos profesionales, entonces comenzaba mi caminar en la medicina privada, estaba feliz porque estaba aprendiendo una forma diferente de ejercer profesionalmente.",
    },
    {
      id: 3,
      image: "/slide_three.jpg",
      title: "Emprendedora",
      description:
        "Mientras esperaba la validación de mi título de Anestesiología para tener mi cédula profesional, me fui a México a la UNAM, a estudiar un Diplomado en Medicina Estética, me gustó tanto lo que estaba aprendiendo que dije: quiero hacer eso, terminando en noviembre del año 2009 pongo un consultorio médico.",
    },
  ];

  const tabsData = [
    {
      id: "Trayectoria",
      title: "Trayectoria",
      heading: "El crecimiento de una mujer visionaria.",
      description: `Hace poco más de 7 años me encuentro información sobre un libro de un pastor cristiano llamado Rick Warren "Una Vida con Propósito" después de la Biblia este libro ha sido el más traducido, pudiéndose encontrar en más de 85 idiomas.

Lo interesante es que este libro me ayudó a descubrir muchas cosas, una de las más relevantes en el capítulo 4 cuando el autor escribe; vivimos 9 meses en el vientre de nuestra mamá y esto es una preparación para nuestra vida en la tierra, también, nuestra vida en la tierra es una preparación para la vida en la eternidad.

Entonces entendí que, en nuestro ADN, es decir, en nuestra naturaleza, está crecer, evolucionar, avanzar. Y esta evolución también debe tener lugar en nuestra vida laboral.`,
      image: "/dra_path.jpg",
    },
    {
      id: "MedicoEstetico",
      title: "Médico Estético",
      heading: "El crecimiento de una mujer visionaria.",
      description: `La doctora Mileidy Fernández Ribot, médico de profesión. Egresada de la Licenciatura en Medicina, especialista en Anestesiología y Medicina Familiar por el Instituto Superior de Ciencias Médicas de Villa Clara, Cuba.

      Nació en Cuba, un país donde no existía la medicina estética. Pero por azares de la vida se interesó en la belleza, donde encontró su visión personal y propósito de vida, completando su formación profesional en la Universidad Nacional Autónoma de México.

      Más de 25 años dedicados a la medicina, de ellos, más de 15 años dedicados a la medicina estética en México.
Todo esto respalda su profesionalismo y la han llevado a ser referente del ramo a nivel nacional e internacional. 
`,
      image: "/medical.png",
    },
    {
      id: "Empresaria",
      title: "Empresaria",
      heading: "El crecimiento de una mujer visionaria.",
      description: `La Dra. Mileidy Fernández Ribot ha formado parte de la portada de la revista Mujer Actual, en donde se le reconoce su labor como empresaria, escritora y mujer Influencia de la región.
Ha sido entrevistada por diferentes medios de comunicación, exposiciones y conferencias.

Acreedora de la Distinción Mujer líder en Baja California, entregada el 31 de marzo del 2023 de parte de la Fundación Forjadores de México.

En noviembre del 2021 presentó su libro El arte de pulir un diamante en la sala de exposiciones El Cubo, en el Centro Cultural Tijuana, en el que ofrece valiosas herramientas para una superación personal, basados en dos pilares principalmente la autoestima saludable y el amor propio.

Coautora de los libros Ser mujer es fascinante, año 2022 y la historia de 100 mujeres empresarias en el año 2023.`,
      image: "/dra_path_emp.png",
    },
    {
      id: "Escritora",
      title: "Escritora",
      heading: `El arte de pulir un diamante`,
      description: `Somos seres perfectos desde nuestra creación, físicamente y también nos fueron dados los dones y talentos necesarios para vivir nuestro propósito.

        Sin embargo, a lo largo de la vida vamos construyendo un personaje, mismo que puede verse influenciado por los padres, familiares, maestros, amigos, medios de comunicación, influencers de moda etc.`,
      image: "/dra_path_esc.jpg",
    },
  ];

  return (
    <div>
      <Title_Banner title={activeTitle} />
      <div className={styles.tabsContainer}>
        <div className={styles.heroSection}>
          <div className={styles.heroImage}>
            <img src={activeImage} alt="Dra. Mileidy" />
          </div>
          <div className={styles.heroContent}>
            <div className={styles.tabsContainer}>
              <div className={styles.tabsHeader}>
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    className={`${styles.tabButton} ${
                      activeTab === tab.id ? styles.activeTab : ""
                    }`}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setActiveTitle(tab.title);
                      setActiveImage(tab.image);
                    }}
                  >
                    <div className={styles.tabItemContent}>
                      <div className={styles.arrowCircle}>
                        <Arrow />
                      </div>
                      <span className={styles.tabTitle}>{tab.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tabContent}>
          {tabsData.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className={styles.contentWrapper}>
                  <div className={styles.textContainer}>
                    <h1 className={styles.mainTitle}>
                      {tab.heading}
                    </h1>
                    <p className={styles.contentDescription}>
                      {tab.description}
                    </p>
                  </div>
                </div>
              )
          )}

          {/* Additional content specific to each tab */}
          {activeTab === "Trayectoria" && (
            <div className={styles.pathAdditionalContent}>
              <img src="/trayectoria.jpg" alt="Experiencia Profesional" />

              <div className={styles.careerSteps}>
                <div className={styles.careerStep}>
                  <div className={styles.diamondIcon}>
                    <Diamond />
                  </div>
                  <div className={styles.stepText}>
                    <p>
                      Ser empleado debía ser una preparación, para luego ser
                      autoempleada o emprendedora.
                    </p>
                  </div>
                </div>
                <div className={styles.careerStep}>
                  <div className={styles.diamondIcon}>
                    <Diamond />
                  </div>
                  <div className={styles.stepText}>
                    <p>
                      Ser auto empleada o emprendedora debería ser una
                      preparación para volverte empresaria.
                    </p>
                  </div>
                </div>
                <div className={styles.careerStep}>
                  <div className={styles.diamondIcon}>
                    <Diamond />
                  </div>
                  <div className={styles.stepText}>
                    <p>Y ser empresaria debe llevarte a ser inversionista.</p>
                  </div>
                </div>
                <div className={styles.careerStep}>
                  <div className={styles.diamondIcon}>
                    <Diamond />
                  </div>
                  <div className={styles.stepText}>
                    <p>
                      Ser inversionista debe llevarte a la libertad financiera.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.sliderContainer}>
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={5000}
                  arrows={true}
                  className={styles.customSlider}
                >
                  {slides.map((slide) => (
                    <div key={slide.id} className={styles.slide}>
                      <div className={styles.slideInner}>
                        <img src={slide.image} alt={slide.title} />
                        <div className={styles.slideContent}>
                          <h3>{slide.title}</h3>
                          <p>{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}

          {activeTab === "MedicoEstetico" && (
            <>
              <div className={styles.medicalAdditionalPicture}>
                <img src="/dra_path_med.png" alt="Dra. Mileidy" />
              </div>
              <div className={styles.medicalAdditionalContent}>
                <TextImage
                  textContent={[
                    "Es miembro fundador y directora general de la empresa clínica GEN conformada por la Clínica Imagen Art y Farmacia Dermatológica Campestre.",
                    "Ha sido acreedora de dos diplomados en el Tecnológico de Monterrey, Dirección Gerencial y Liderazgo.",
                    "Cuenta además con una certificación internacional en liderazgo por Johnson Maxwell, también certificada en el arte de hablar en público por el doctor César Lozano.",
                    "Finalizó un programa de capacitación en Monterrey titulado Empresarios de alto rendimiento.",
                    "Actualmente miembro activo de Board Media una comunidad colaborativa de CEO'S de habla hispana.",
                  ]}
                  imageSrc="/medico_2.jpg"
                  imageAlt="Doctora trabajando"
                />
              </div>
            </>
          )}

          {activeTab === "Empresaria" && (
            <div className={styles.businessAdditionalContent}>
              <TextImage
                textContent={[
                  "Disfruta apoyar y participar activamente en las asociaciones civiles: Mujer fascinante y LA ROCA CC, agradecida con México que dice tener tatuado en su corazón.",
                  "Elige aceptar el reto de ser la presidenta fundadora de una de las asociaciones más influyentes de México en cuanto a representación de mujeres empresarias, la Asociación Mexicana de Mujeres Jefas de Empresa Representación Tijuana, por sus siglas AMMJE.",
                  "A un año y medio de haber tomado protesta como presidenta fundadora, marca un hito en la historia de esta asociación recibiendo la distinción Mención Honorífica a mejor representación. Dicho reconocimiento fue entregado a manos de la presidenta nacional durante el marco de la Cumbre BIT Leaders el 2 de noviembre de 2023.",
                  "Su desempeño y compromiso dentro de la asociación en muy poco tiempo la llevaron a ser nombrada, el 19 de enero de 2024, Delegada de la Región Norte.",
                  "Con la intención de continuar fortaleciendo AMMJE Representación Tijuana y a su vez apoyando en aperturar representaciones en Baja California acepta el reto de nuevamente ser elegida presidenta de representación.",
                  "Su intención es aprender y aprender enseñando porque reconoce que todas podemos ser mentoras de alguien más.",
                  "Su visión personal: Dignificar la práctica de la medicina estética en tanto apoya en la inclusión exitosa de la mujer en el mundo empresarial.",
                ]}
                imageSrc="/empresaria.jpg"
                imageAlt="Dra. Mileidy como empresaria"
                imagePosition="right"
                imageWidth="50%"
                imageHeight="50%"
              />
            </div>
          )}

          {activeTab === "Escritora" && (
            <div className={styles.writterAdditionalContent}>
              <div className={styles.writterAdditionalPicture}>
                <TextImage
                  textContent={[" "]}
                  imageSrc="/escritora.jpg"
                  imageAlt="Dra. Mileidy como escritora"
                />
              </div>
              <div className={styles.writterTextImage}>
                <TextImage
                  textContent={[
                    "Puede suceder que ese 'personaje' que vamos construyendo no está alineado a lo que pensamos, sentimos, decimos o hacemos, y no nos apoya para lograr el propósito de vida.",
                    "Tiene mucho que ver con nuestro autoconcepto, autoestima y amor propio.",
                    "Todas atravesamos desiertos, vicisitudes, sin embargo, a pesar de todos nuestros desaciertos, 'hoy es una nueva oportunidad de hacerlo diferente'.",
                    "Y no se trata de, ¿que pase para llegar aquí?, sino de agradecer que estoy aquí. El libro es un viaje o una invitación para construirte.",
                    "Y este viaje lo harás por medio de sus 5 capítulos:",
                  ]}
                  imageSrc=""
                  imageAlt=""
                />
              </div>

              <Chapters />

              <div className={styles.bookConclusion}>
                <p>
                  Finalmente, si no estás cómoda con algo de tu cuerpo, tu alma
                  o tu espíritu, te quiero decir:
                </p>
                <blockquote className={styles.quote}>
                  No te detengas en los valles, porque ese no es el destino que
                  Dios tiene preparado para tu vida.
                </blockquote>
              </div>

              <div className={styles.bookHighlight}>
                <div className={styles.bookContent}>
                  <div className={styles.bookImageContainer}>
                    <img src="/book.png" alt="Dra. Mileidy como escritora" />
                  </div>
                  <div className={styles.bookMessage}>
                    <h3>El Arte de Pulir un Diamante® nos recuerda:</h3>
                    <div className={styles.diamondIcon}>
                      <Diamond />
                    </div>
                    <div className={styles.bookQuoteContainer}>
                      <div className={styles.quoteLeft}>
                        <QuoteLeft />
                      </div>
                      <p className={styles.bookQuote}>
                        Nuestra piel es el traje a la medida que nos acompañará
                        a lo largo de toda la vida, poner especial énfasis en
                        ella nos permitirá enviar un mensaje anónimo al mundo y
                        será una acción que nos apoyará a brillar como el
                        diamante que siempre hemos sido.
                      </p>
                      <p className={styles.bookQuote}>
                        La obsesión consigo mismo es un callejón sin salida. La
                        atención en los demás nos orienta a una vida libre y
                        espaciosa.
                      </p>
                      <div className={styles.quoteRight}>
                        <QuoteRight />
                      </div>
                      <p className={styles.thankYou}>Muchas gracias.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
