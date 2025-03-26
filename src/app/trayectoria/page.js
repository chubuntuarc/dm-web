"use client"
import React from "react";
import styles from "./path.module.css";
import Title_Banner from "../../components/Title_Banner";
import { useState } from "react";
import Diamond from "../../components/diamond";
import Slider from "../../components/slider";

export default function Trayectoria() {
  const [activeTab, setActiveTab] = useState("Trayectoria");
  const [activeTitle, setActiveTitle] = useState("Trayectoria");
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
      image: "/dra_path_med.png",
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

      Sin embargo, a lo largo de la vida vamos construyendo un personaje, mismo que puede verse influenciado por los padres, familiares, maestros, amigos, medios de comunicación, influencers de moda etc.

      Puede suceder que ese "personaje" que vamos construyendo no está alineado a lo que pensamos, sentimos, decimos o hacemos, y no nos apoya para lograr el propósito de vida.

Tiene mucho que ver con nuestro autoconcepto, autoestima y amor propio.`,
      image: "/dra_path_esc.jpg",
    },
  ];

  return (
    <div>
      <Title_Banner title={activeTitle} />
      <div className={styles.tabsContainer}>
        <div className={styles.tabsHeader}>
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ""}`}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveTitle(tab.title);
              }}
            >
              {tab.title} <span className={styles.arrow}>→</span>
            </button>
          ))}
        </div>
        
        <div className={styles.tabContent}>
          {tabsData.map((tab) => (
            activeTab === tab.id && (
              <div key={tab.id} className={styles.contentWrapper}>
                <div className={styles.imageContainer}>
                  <img src={tab.image} alt={tab.title} className={styles.tabImage} />
                </div>
                <div className={styles.textContainer}>
                  <h2 className={styles.contentHeading}>{tab.heading}</h2>
                  <p className={styles.contentDescription}>{tab.description}</p>
                </div>
              </div>
            )
          ))}
          
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
                    <p>Ser empleado debía ser una preparación, para luego ser autoempleada o emprendedora.</p>
                  </div>
                </div>
                <div className={styles.careerStep}>
                  <div className={styles.diamondIcon}>
                    <Diamond />
                  </div>
                  <div className={styles.stepText}>
                    <p>Ser auto empleada o emprendedora debería ser una preparación para volverte empresaria.</p>
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
                    <p>Ser inversionista debe llevarte a la libertad financiera.</p>
                  </div>
                </div>
              </div>
              <Slider slides={slides} />
            </div>
          )}
          
          {activeTab === "MedicoEstetico" && (
            <div className={styles.additionalContent}>
              <h3>Especialidades</h3>
              <img src="/dra_path_med.png" alt="Especialidades" />
              <p>Tratamientos faciales, corporales y procedimientos no invasivos.</p>
            </div>
          )}
          
          {activeTab === "Empresaria" && (
            <div className={styles.additionalContent}>
              <h3>Logros Empresariales</h3>
              <p>Fundadora de múltiples clínicas y centros de estética en México.</p>
            </div>
          )}
          
          {activeTab === "Escritora" && (
            <div className={styles.additionalContent}>
              <h3>Publicaciones</h3>
              <p>Autora de "El arte de pulir un diamante" y coautora de otros libros de desarrollo personal.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
