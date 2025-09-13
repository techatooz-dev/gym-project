"use client";
import React from "react";

const articles = [
  {
    slug: "keep-upholstery-stain-free",
    title: "How To Keep Upholstery Stain And Odour-Free",
    author: "Admin",
    image: "/Slider-01-2.jpg",
    excerpt:
      "After a long day, you just want to kick back and rest. The worst thing ever is when you get to that point of the day, and there’s an unpleasant...",
  },
  {
    slug: "benefits-of-antiviral-sanitisation",
    title: "Benefits Of Professional Antiviral Sanitisation",
    author: "Admin",
    image: "/Slider-02-3.jpg",
    excerpt:
      "With the current pandemic waging a germ war on us, you can’t be too clean! Now more than ever, antiviral sanitisation is a must when so many of us need to carry...",
  },
  {
    slug: "tools-to-save-time",
    title: "9 Cool Tools To Get Things Done & Save You Loads Of Time!",
    author: "Admin",
    image: "/Slider-03.jpg",
    excerpt:
      "It’s truly an awesome time to be in business, especially if you market your business on the internet or use the internet for productivity within your business...",
  },
];

export default function LatestArticles() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
  <h2 className="text-blue-700 font-bold border-b-2 border-blue-700 text-2xl tracking-wide mb-12 mx-auto text-center w-fit">
          OUR LATEST ARTICLES
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.slug}
              className="bg-gray-50 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-gray-900 leading-snug mb-3 text-lg">
                  {a.title}
                </h3>
                <p className="text-xs font-medium flex items-center gap-1 text-gray-700 mb-4">
                  <span role="img" aria-hidden="true">👤</span> {a.author}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {a.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
