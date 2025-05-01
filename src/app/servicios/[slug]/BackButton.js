"use client"; // This component needs to be a client component

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./slug.module.css"; // Reuse the same styles

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={styles.backButton}>
      &larr; Regresar
    </button>
  );
} 