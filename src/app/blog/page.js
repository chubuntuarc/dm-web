import styles from "./blog.module.css";
import Title_Banner from "../../components/Title_Banner";
import Link from "next/link";

export default function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Labios Hidratados: La Clave para una Sonrisa Saludable",
      category: "Dermatología",
      slug: "labios-hidratados"
    },
    {
      id: 2,
      title: "Relleno de Labios: El inicio de una sonrisa irresistible",
      category: "Medicina Estética",
      slug: "relleno-labios"
    },
    {
      id: 3,
      title: "La Importancia de apoyar la Reparación Celular de la Piel",
      category: "Dermatología",
      slug: "reparacion-celular-piel"
    },
    {
      id: 4,
      title: "Descubre el Poder de una piel saludable; Peelings: Tipos, Beneficios de practicarlos",
      category: "Medicina Estética",
      slug: "peelings-beneficios"
    },
    {
      id: 5,
      title: "La piel es el traje a la medida que nos acompañará toda la vida",
      category: "Blog",
      slug: "piel-traje-medida"
    }
  ];

  // Available categories
  const categories = ["Blog", "Dermatología", "Medicina Estética"];

  return (
    <div>
      <Title_Banner title="Blog" />
      <div className={styles.container}>
        <div className={styles.blogHeader}>
          <h1>Blog</h1>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Buscar..." className={styles.searchInput} />
            <button className={styles.searchButton}>
              <span role="img" aria-label="search">🔍</span>
            </button>
          </div>
        </div>

        <div className={styles.categoriesSection}>
          <h2>Categorías</h2>
          <div className={styles.categoriesList}>
            {categories.map((category, index) => (
              <Link href={`/blog/category/${category.toLowerCase()}`} key={index}>
                <span className={styles.categoryTag}>{category}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.latestPosts}>
          <h2>Últimas entradas</h2>
          <div className={styles.postsList}>
            {blogPosts.map(post => (
              <div key={post.id} className={styles.postItem}>
                <span className={styles.diamond}>💎</span>
                <Link href={`/blog/${post.slug}`}>
                  <span className={styles.postTitle}>{post.title}</span>
                </Link>
                <span className={styles.postCategory}>{post.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}