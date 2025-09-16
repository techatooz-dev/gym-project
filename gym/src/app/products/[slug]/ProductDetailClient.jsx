"use client";
import { useState } from "react";
import Link from "next/link";

export default function ProductDetailClient({ product, related }) {
  const [qty, setQty] = useState(1);
  const increment = () => setQty(q => Math.min(99, q + 1));
  const decrement = () => setQty(q => Math.max(1, q - 1));

  return (
    <main className="max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-6">
      <div className="grid gap-12 md:grid-cols-2 items-start">
        <div className="border border-gray-200 overflow-hidden bg-white">
          <img
            src={product.imageSrc}
            alt={product.title}
            className="w-full h-96 object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-blue-700 font-semibold text-xl mb-6">{product.price}</p>
            <p className="leading-relaxed mb-8 text-gray-700">{product.description}</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-stretch border border-gray-300 rounded-md overflow-hidden">
                <button type="button" onClick={decrement} className="w-10 h-10 flex items-center justify-center text-lg font-semibold hover:bg-gray-100">-</button>
                <input
                  type="text"
                  value={qty}
                  onChange={(e) => {
                    const v = parseInt(e.target.value.replace(/[^0-9]/g, ''), 10);
                    if (!isNaN(v) && v >= 1 && v <= 99) setQty(v);
                  }}
                  className="w-14 h-10 text-center focus:outline-none"
                />
                <button type="button" onClick={increment} className="w-10 h-10 flex items-center justify-center text-lg font-semibold hover:bg-gray-100">+</button>
              </div>
              <button
                type="button"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-colors"
              >
                Add to Cart
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-2"><span className="font-semibold">Category:</span> Uncategorized</p>
        </div>
      </div>

      <section className="mt-16" id="reviews">
        <div className="border border-gray-200">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 text-sm font-semibold">Reviews (0)</div>
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <p className="text-gray-600 mb-2">There are no reviews yet.</p>
              <p className="text-gray-600 mb-6">Be the first to review “{product.title}”</p>
            </div>
            <form className="space-y-6 max-w-3xl">
              <div>
                <p className="text-sm font-medium mb-2">Your rating</p>
                <StarRatingInteractive />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="review">Your review *</label>
                <textarea id="review" rows={5} className="w-full border border-gray-300 rounded-md p-3 resize-y focus:outline-none focus:ring-2 focus:ring-blue-600/40" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name *</label>
                  <input id="name" type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600/40" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email *</label>
                  <input id="email" type="email" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600/40" />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input id="save" type="checkbox" className="mt-1" />
                <label htmlFor="save" className="text-sm text-gray-600 leading-relaxed">Save my name and email in this browser for the next time I comment.</label>
              </div>
              <button type="button" className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-md font-semibold transition-colors">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h3 className="text-2xl font-semibold mb-8">Related products</h3>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {related.map(r => (
            <Link key={r.slug} href={`/products/${r.slug}`} className="group block">
              <div className="border border-gray-200 mb-4 overflow-hidden bg-white">
                <img src={r.imageSrc} alt={r.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{r.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{r.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function StarRatingInteractive() {
  const [value, setValue] = useState(0);
  const stars = [1,2,3,4,5];
  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Rating">
      {stars.map(s => (
        <button
          key={s}
          type="button"
          onClick={() => setValue(s)}
          aria-pressed={value === s}
          className={`w-6 h-6 text-lg leading-none ${value >= s ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-500 transition-colors`}
        >
          ★
        </button>
      ))}
    </div>
  );
}
