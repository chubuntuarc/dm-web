import styles from "./blog.module.css";
import Title_Banner from "../../components/Title_Banner";
import Link from "next/link";
import Search from "../../components/search";
import Image from "next/image";

async function getBlogPosts() {
  try {
    const response = await fetch('https://dramileidyfdzribot.com/wp-json/wp/v2/posts', { 
      cache: 'no-store' // Ensures fresh data on each request
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    const posts = await response.json();
    
    // Function to strip HTML tags
    const stripHtml = (html) => {
      return html.replace(/<\/?[^>]+(>|$)/g, "");
    };
    
    // Map WordPress posts to our blog post format
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
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return []; // Return empty array in case of error
  }
}

export default async function Blog() {
  const blogPosts = await getBlogPosts();

  // Available categories
  const categories = ["Blog", "Dermatología", "Medicina Estética"];

  return (
    <div>
      <Title_Banner title="Blog" />
      <div className={styles.container}>
        <div className={styles.blogHeader}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Buscar..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <Search />
            </button>
          </div>
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
          <div className={styles.postsList}>
            {blogPosts.map((post) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}