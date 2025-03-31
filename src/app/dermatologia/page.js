"use client"
import styles from "./derma.module.css";
import Image from "next/image";
import Title_Banner from "../../components/Title_Banner";
import Diamond from "../../components/diamond";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Dermatologia() {
  const [isButtonHidden, setIsButtonHidden] = useState(false);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    const footer = document.querySelector('footer');
    const button = buttonRef.current;
    
    if (!footer || !button) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsButtonHidden(true);
        } else {
          setIsButtonHidden(false);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of footer is visible
    
    observer.observe(footer);
    
    // Cleanup
    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const slides = [
    {
      id: 1,
      image: "/kit-hidratacion.png",
      title: "KIT CUIDADO HIDRATACIÓN DE LA PIEL FACIAL",
    },
    {
      id: 2,
      image: "/kit-acne.png",
      title: "KIT PARA PIEL ACNEICA I",
    },
    {
      id: 3,
      image: "/kit-regenerador.png",
      title: "KIT REGENERADOR DE LA PIEL I",
    },
  ];
  return (
    <>
      <Title_Banner title="Dermatológica Campestre" />

      <div className={styles.introContainer}>
        <p className={styles.introText}>
          Soluciones integrales de productos top en el mercado para el manejo,
          cuidado y protección de la piel.
        </p>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/derma_galeria.png"
            alt="Mujer con piel saludable"
            width={400}
            height={500}
            className={styles.aboutImage}
          />
        </div>

        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>¿Quiénes somos?</h2>
          <p>
            Somos una empresa establecida en Tijuana, Baja California, que
            brinda acceso a las mejores marcas mundiales de productos
            dermatológicos para mejorar y mantener la salud y belleza de la
            piel.
          </p>
          <p>
            La excelencia va desde la garantía de saberte invirtiendo en lo
            mejor y más efectivo para el cuidado de tu piel, hasta la asesoría,
            apoyo y acompañamiento o asesoría durante el tiempo que se usa en
            los mismos.
          </p>
        </div>
      </div>

      <div className={styles.valuesContainer}>
        <h2 className={styles.sectionTitle}>Valores</h2>
        <div className={styles.valuesWrapper}>
          <div className={styles.valueItem}>
            <Diamond /> <span>Compromiso</span>
          </div>
          <div className={styles.valueItem}>
            <Diamond /> <span>Disciplina</span>
          </div>
          <div className={styles.valueItem}>
            <Diamond /> <span>Excelencia</span>
          </div>
          <div className={styles.valueItem}>
            <Diamond /> <span>Armonía</span>
          </div>
          <div className={styles.valueItem}>
            <Diamond /> <span>Ética</span>
          </div>
        </div>
      </div>

      <div className={styles.misionVisionContainer}>
        <div className={styles.misionContainer}>
          <h2>Misión</h2>
          <p>
            Espacio especializado en el comercio de productos individuales o en
            forma de kit de probada eficacia en el cuidado y mantenimiento de la
            salud y belleza de la piel.
          </p>
        </div>

        <div className={styles.visionContainer}>
          <h2>Visión</h2>
          <p>
            Posicionarnos como empresa líder que comercializa productos
            dermatológicos con más de 20 años de probada eficacia en el mercado
            brindando así a nuestros clientes kits personalizados de skin care.
          </p>
        </div>
      </div>

      <div className={styles.kitsContainer}>
        <div className={styles.kitsIntro}>
          <h2>
            Descubre la verdadera belleza con nuestros Kits Dermatológicos
            exclusivos.
          </h2>
          <Image
            src="/derma.png"
            alt="Kit de hidratación facial"
            width={350}
            height={350}
            className={styles.kitsIntroImage}
          />
          <p>
            Creados pensando en el amor que tu piel merece, cada kit es una
            experiencia de cuidado de la piel diseñada para nutrir, tonificar y
            resaltar tu belleza natural.
          </p>
          <p>
            Transforma tu rutina en un ritual de autoamor con nuestros productos
            de alta calidad, respaldados por la ciencia dermatológica más
            avanzada. Tu piel merece lo mejor, y nuestros kits dermatológicos
            están ahí para brindarte ese cuidado excepcional que te mereces.
            ¡Dale a tu piel el regalo que anhela y luce radiante en cada paso de
            tu camino!
          </p>
        </div>
      </div>
      
      <Link href="https://dermatologicacampestre.com/" target="_blank">
        <button 
          ref={buttonRef}
          className={`${styles.kitsButton} ${isButtonHidden ? styles.kitsButtonHidden : ''}`}
        >
          Visita la Tienda
        </button>
      </Link>
    </>
  );
}
