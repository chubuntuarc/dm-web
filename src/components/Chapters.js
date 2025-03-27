import React from "react";
import styles from "./Chapters.module.css";

const Chapters = () => {
  const chaptersData = [
    {
      number: "01",
      title: "Autoimagen, su importancia.",
      content:
        "Cómo te ves influye en ti y en los demás, más de lo que te imaginas condicionando no solo tu éxito sino también tu bienestar. Todos los días recibo personas que no quieren verse cansadas, enojadas, tristes, flácidas, y enfrentan una \"disociación\" entre cómo se sienten y cómo se ven, esto genera un conflicto en su autoestima bloqueando la posibilidad de sentirse bien consigo mismas.",
    },
    {
      number: "02",
      title: "Cómo quieres ver tu meta.",
      content:
        "Si tú no decides cómo te quieres ver, lo decidirá alguien más, el concepto de belleza es muy abstracto, no es lo mismo belleza para mí, que para Mariana o Dave, o Isabel, y es por eso a veces algunos pacientes que eligen un médico estético con base a lo que cobran o pueden pagar termina su rostro siendo una caricatura de lo que era antes. Si tú no eliges y tienes claro cómo te quieres ver, lo decidirán los artistas, o la influencia de las modelos, o de la televisión.",
    },
    {
      number: "03",
      title: "Cómo establecer un plan.",
      content:
        "Si tú no decides como te quieres ver, lo decidirá alguien más, el concepto de belleza es muy abstracto, no es lo mismo belleza para mí, que para Mariana o Dave, o Isabel, y es por eso a veces algunos pacientes que eligen un médico estético con base a lo que cobran o pueden pagar termina su rostro siendo una caricatura de lo que era antes. Si tú no eliges y tienes claro cómo te quieres ver, lo decidirán los artistas, o la influencia de las modelos, o de la televisión.",
    },
    {
      number: "04",
      title: "Pasos para pulir un diamante.",
      content:
        "Pactarás un proceso y pagarás un precio. No es posible pulir un diamante sin desarrollar el hábito de hacerlo, y desarrollar hábitos requiere de tiempo, disciplina, y forjar un carácter.",
    },
    {
      number: "05",
      title: "Plan de acción",
      content:
        "Un diamante solo puede ser pulido por otro diamante, y ese diamante necesita ser pulido en cuerpo, alma y espíritu, e idealmente debes elegir un experto para que desde su congruencia te apoye en tu proceso. Tal vez estás pensando que no es fácil, que estás cansado, que no tienes dinero para invertir en ti.",
    },
  ];

  return (
    <div className={styles.chaptersContainer}>
      {chaptersData.map((chapter, index) => (
        <div key={index} className={styles.chapter}>
          <div className={styles.chapterNumber}>{chapter.number}</div>
          <div className={styles.chapterContent}>
            <h4>{chapter.title}</h4>
            <p>{chapter.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chapters; 