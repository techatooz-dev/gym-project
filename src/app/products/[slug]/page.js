import { getProductBySlug, products } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";
import Link from "next/link";

export default function ProductDetail({ params }) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="max-w-4xl mx-auto py-16 px-4">
        <p className="text-center text-red-600 font-semibold mb-6">Product not found.</p>
        <div className="text-center">
          <Link href="/" className="text-blue-600 underline">Back to products</Link>
        </div>
      </main>
    );
  }

  // Related products
  const related = product ? products.filter(p => p.slug !== product.slug).slice(0, 3) : [];

  if (!product) return null; // fallback already handled above if desired

  return <ProductDetailClient product={product} related={related} />;
}

export function generateStaticParams() {
  // Optional pre-rendering if using static generation.
  const { products } = require("@/data/products");
  return products.map(p => ({ slug: p.slug }));
}

// Star rating moved to client component