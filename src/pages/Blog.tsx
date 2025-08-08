import { SEO } from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => (
  <>
    <SEO title="Blog | Peak Properties" description="Insights for Boulder rental property owners and investors." canonicalPath="/blog" type="Blog" />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 gap-5">
        {blogPosts.map((p) => (
          <article key={p.slug} id={p.slug} className="rounded-lg border bg-card p-6">
            <h2 className="font-medium text-xl mb-1">{p.title}</h2>
            <p className="text-sm text-muted-foreground">{p.abstract}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);
export default Blog;
