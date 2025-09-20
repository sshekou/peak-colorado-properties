import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => (
  <>
    <SEO 
      title="Blog | Peak Properties" 
      description="Expert insights for Boulder rental property owners and investors. Tips on property management, market trends, and maximizing rental income." 
      canonicalPath="/blog" 
      type="Blog"
      keywords="Boulder rental property tips, Colorado property management blog, rental investment advice, Boulder real estate market"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Peak Properties Blog',
        description: 'Expert insights for Boulder rental property owners and investors',
        url: `${window.location.origin}/blog`,
        publisher: {
          '@type': 'Organization',
          name: 'Peak Properties'
        }
      }}
    />
    
    <div className="container">
      <Breadcrumbs />
    </div>
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
