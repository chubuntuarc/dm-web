import React from "react";
import styles from "./slug.module.css";
import Link from "next/link";
import BackButton from "./BackButton";

export default async function Servicio({ params }) {
  const { slug } = params;

  try {
    // Obtener datos del paginaa específico por slug
    const response = await fetch(
      `https://dramileidyfdzribot.com/wp-json/wp/v2/pages?slug=${slug}`,
      {
        cache: "no-store", // Para obtener datos frescos
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching page");
    }

    const stripHtml = (html) => {
      return html.replace(/<\/?[^>]+(>|$)/g, "");
    };

    // Function to replace small images with better resolution ones
    const replaceSmallImages = (htmlContent) => {
      return htmlContent.replace(
        /<figure[^>]*>.*?<img[^>]*(?:src=["']([^"']*30x30[^"']*)['"](.*?)data-srcset=["']([^"']*)['"](.*?)|data-srcset=["']([^"']*)['"](.*?)src=["']([^"']*30x30[^"']*)['"](.*?))<\/figure>/g,
        (match, src1, attr1, srcset1, attr2, srcset2, attr3, src2, attr4) => {
          // Determine which pattern matched
          const srcset = srcset1 || srcset2;
          const src = src1 || src2;

          if (srcset) {
            // Parse srcset to find the URL with exactly 300w
            const srcsetItems = srcset.split(",").map((item) => item.trim());
            const image300w = srcsetItems.find((item) =>
              item.endsWith(" 300w")
            );

            if (image300w) {
              // Extract just the URL part (before the space)
              const url = image300w.split(" ")[0];
              return match.replace(src, url);
            }

            // Fallback to finding closest if exact 300w not found
            const parsedItems = srcsetItems.map((item) => {
              const [url, size] = item.split(" ");
              const width = size ? parseInt(size.replace("w", "")) : 0;
              return { url, width };
            });

            // Find the best match (closest to 300px width)
            const bestMatch = parsedItems.reduce((best, current) => {
              if (!best) return current;
              if (Math.abs(current.width - 300) < Math.abs(best.width - 300)) {
                return current;
              }
              return best;
            }, null);

            // If we found a good match, replace the original src
            if (bestMatch && bestMatch.url) {
              return match.replace(src, bestMatch.url);
            }
          }

          // Fallback to the original replacement if no srcset match found
          return match.replace("30x30", "301x300");
        }
      );
    };

    const pageData = await response.json();
    const page = pageData[0] || null;
    const plainTextExcerpt = stripHtml(page.excerpt.rendered);

    if (!page) {
      return (
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Pagina no encontrada</h1>
          <p>No se encontró ninguna pagina con el slug: {slug}</p>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <BackButton />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: replaceSmallImages(page.content.rendered),
          }}
        />
        <Link
          href="https://api.whatsapp.com/send/?phone=5216642866427&text=%C2%A1Hola%2C+buen+d%C3%ADa%21&type=phone_number&app_absent=0"
          target="_blank"
          className={styles.whatsappButton}
        >
          Agenda tu cita
          <svg fill="#fff" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 9 4 L 9 5 L 5 5 L 5 27 L 27 27 L 27 5 L 23 5 L 23 4 L 21 4 L 21 5 L 11 5 L 11 4 Z M 7 7 L 9 7 L 9 8 L 11 8 L 11 7 L 21 7 L 21 8 L 23 8 L 23 7 L 25 7 L 25 9 L 7 9 Z M 7 11 L 25 11 L 25 25 L 7 25 Z M 13 13 L 13 15 L 15 15 L 15 13 Z M 17 13 L 17 15 L 19 15 L 19 13 Z M 21 13 L 21 15 L 23 15 L 23 13 Z M 9 17 L 9 19 L 11 19 L 11 17 Z M 13 17 L 13 19 L 15 19 L 15 17 Z M 17 17 L 17 19 L 19 19 L 19 17 Z M 21 17 L 21 19 L 23 19 L 23 17 Z M 9 21 L 9 23 L 11 23 L 11 21 Z M 13 21 L 13 23 L 15 23 L 15 21 Z M 17 21 L 17 23 L 19 23 L 19 21 Z"/></svg>
        </Link>
      </div>
    );
  } catch (error) {
    console.error("Error:", error);
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Error al cargar la pagina</h1>
        <p>Hubo un problema al obtener la información de la pagina.</p>
      </div>
    );
  }
}
