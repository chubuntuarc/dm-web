import { getBlogPosts } from "@/app/blog/page";

export default async function BlogPost({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === params.slug);
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post?.title || 'Blog Post'}</h1>
      <p>You are viewing the blog post with slug: <span className="font-bold">{params.slug}</span></p>
      {/* Display more post data here */}
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
