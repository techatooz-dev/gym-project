"use client";
import React from "react";
import Link from "next/link";

export default function ProductCard({ imageSrc, title, price, alt, slug }) {
  return (
    <div className="w-full">
      {/* Image wrapper with hover overlay */}
      <div className="relative group bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden flex items-center justify-center">
        <img
          src={imageSrc}
          alt={alt || title}
          className="w-full h-75 object-cover"
        />
        {slug && (
          <Link
            href={`/products/${slug}`}
            className="absolute inset-0 flex items-center justify-center bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label={`View details for ${title}`}
          >
            <span className="text-red-600 text-4xl font-bold leading-none">+</span>
          </Link>
        )}
      </div>
      {/* Title and Price */}
      <div className="mt-3 text-center">
        <h3 className="text-green-700 font-semibold leading-snug">{title}</h3>
        <p className="text-blue-600 font-semibold">{price}</p>
      </div>
    </div>
  );
}
