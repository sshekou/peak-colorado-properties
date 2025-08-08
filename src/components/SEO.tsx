import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  type?: string; // e.g., website, article
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export const SEO = ({ title, description, canonicalPath, image, type = "website", jsonLd }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      return el;
    };

    ensureMeta("description").setAttribute("content", description);
    ensureMeta("og:title", "property").setAttribute("content", title);
    ensureMeta("og:description", "property").setAttribute("content", description);
    ensureMeta("og:type", "property").setAttribute("content", type);
    if (image) ensureMeta("og:image", "property").setAttribute("content", image);

    const baseUrl = window.location.origin;
    const canonicalHref = canonicalPath ? `${baseUrl}${canonicalPath}` : `${baseUrl}${location.pathname}`;
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalHref);

    // JSON-LD structured data
    // Remove existing generated tags from this component first
    Array.from(document.querySelectorAll("script[data-seo-jsonld='true']")).forEach((n) => n.remove());
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, image, type, jsonLd, location.pathname]);

  return null;
};
