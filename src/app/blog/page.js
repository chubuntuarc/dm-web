"use client";

import { useState, useEffect } from "react";
import styles from "./blog.module.css";
import Title_Banner from "../../components/Title_Banner";
import Link from "next/link";
import Search from "../../components/search";
import Image from "next/image";

// Función para extraer texto plano del HTML
const stripHtml = (html) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};

// Función para transformar datos de WordPress
const formatBlogPosts = (posts) => {
  return posts.map(post => {
    // Get category name - simplifying for now by using category ID mapping
    let category = "Blog";
    if (post.categories.includes(64)) {
      category = "Dermatología";
    } else if (post.categories.includes(63)) {
      category = "Medicina Estética";
    }
    
    // Strip HTML from excerpt
    const plainTextExcerpt = stripHtml(post.excerpt.rendered);
    
    return {
      id: post.id,
      title: post.title.rendered,
      image: post.yoast_head_json.og_image[0].url,
      category: category,
      description: plainTextExcerpt,
      slug: post.slug,
      excerpt: plainTextExcerpt,
      author: post.yoast_head_json.author,
      date: new Date(post.date).toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
  });
};

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Available categories
  const categories = ["Blog", "Dermatología", "Medicina Estética"];

  // Cargar posts al iniciar
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  // Buscar posts sin término de búsqueda
  async function fetchBlogPosts() {
    try {
      setLoading(true);
      const response = await fetch('https://dramileidyfdzribot.com/wp-json/wp/v2/posts', { 
        cache: 'no-store'
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      
      const posts = await response.json();
      setBlogPosts(formatBlogPosts(posts));
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setBlogPosts([]);
    } finally {
      setLoading(false);
    }
  }

  // Función para buscar posts con término de búsqueda
  async function searchBlogPosts(e) {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      // Si la búsqueda está vacía, mostrar todos los posts
      return fetchBlogPosts();
    }
    
    try {
      setLoading(true);
      const response = await fetch(
        `https://dramileidyfdzribot.com/wp-json/wp/v2/posts?search=${encodeURIComponent(searchTerm)}`, 
        { cache: 'no-store' }
      );
      
      if (!response.ok) {
        throw new Error('Failed to search blog posts');
      }
      
      const posts = await response.json();
      setBlogPosts(formatBlogPosts(posts));
    } catch (error) {
      console.error('Error searching blog posts:', error);
      setBlogPosts([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Title_Banner title="Blog" />
      <div className={styles.container}>
        <div className={styles.blogHeader}>
          <form onSubmit={searchBlogPosts} className={styles.searchBar}>
            <input
              type="text"
              placeholder="Buscar..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className={styles.searchButton}>
              <Search />
            </button>
          </form>
        </div>

        {/* <div className={styles.categoriesSection}>
          <h2>Categorías</h2>
          <div className={styles.categoriesList}>
            {categories.map((category, index) => (
              <Link href={`/blog/category/${category.toLowerCase()}`} key={index}>
                <span className={styles.categoryTag}>{category}</span>
              </Link>
            ))}
          </div>
        </div> */}

        <div className={styles.latestPosts}>
          <h2>Últimas entradas</h2>
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <div className={styles.postsList}>
              {blogPosts.length > 0 ? (
                blogPosts.map((post) => (
                  <div key={post.id} className={styles.postItem}>
                    <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                      <div className={styles.postImageContainer}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={300}
                          height={200}
                          className={styles.postImage}
                        />
                      </div>
                      <div className={styles.postContent}>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <p className={styles.postDescription}>{post.description}</p>
                        <p className={styles.postAuthor}>Por la {post.author}</p>
                        <p className={styles.postDate}>{post.date}</p>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No se encontraron resultados para tu búsqueda.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}