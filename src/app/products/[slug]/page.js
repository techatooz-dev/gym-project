import { getProductBySlug } from "@/data/products";
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

  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <div className="mb-6">
       
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="border border-gray-200 overflow-hidden">
          <img
            src={product.imageSrc}
            alt={product.title}
            className="w-full h-80 object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-blue-600 font-semibold text-lg mb-6">{product.price}</p>
          <p className="leading-relaxed mb-8">{product.description}</p>
          <button
            type="button"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  // Optional pre-rendering if using static generation.
  const { products } = require("@/data/products");
  return products.map(p => ({ slug: p.slug }));
}