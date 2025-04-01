import React from "react";
import styles from "./slug.module.css";
import Image from "next/image";
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
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: replaceSmallImages(page.content.rendered),
          }}
        />
        <p className="mt-4">
          Estás viendo la pagina con slug:{" "}
          <span className="font-bold">{slug}</span>
        </p>
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
