"use client";
import React, { useState, useRef, useEffect } from "react";

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
  const [index, setIndex] = useState(0); // mobile slider index
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0); // exact slide width
  const touchStartX = useRef(0);
  const touchDelta = useRef(0);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const total = articles.length;
  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((i) => (i + 1) % total);
  };
  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((i) => (i - 1 + total) % total);
  };

  useEffect(() => {
    if (!isAnimating) return;
    const t = setTimeout(() => setIsAnimating(false), 350);
    return () => clearTimeout(t);
  }, [isAnimating, index]);

  // Measure viewport (slider container) width for translating slides with gaps
  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) {
        // account for viewport horizontal padding so each slide width matches visible card
        const el = viewportRef.current;
        const styles = window.getComputedStyle(el);
        const paddingLeft = parseFloat(styles.paddingLeft) || 0;
        const paddingRight = parseFloat(styles.paddingRight) || 0;
        const width = el.clientWidth - paddingLeft - paddingRight;
        setSlideWidth(width);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const ArticleCard = ({ a }) => (
    <article
      key={a.slug}
      className="group bg-gray-50 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full min-h-[460px] md:min-h-[480px] rounded-md overflow-hidden"
      style={{ width: '100%' }}
    >
      <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
        <img
          src={a.image}
          alt={a.title}
          className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 md:p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 leading-snug mb-3 text-lg line-clamp-2">
          {a.title}
        </h3>
        <p className="text-xs font-medium flex items-center gap-1 text-gray-700 mb-4">
          <span role="img" aria-hidden="true">👤</span> {a.author}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
          {a.excerpt}
        </p>
        <div className="mt-auto pt-4">
          <button className="text-blue-700 text-sm font-semibold hover:underline" type="button">
            Read More
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-blue-700 font-bold border-b-2 border-blue-700 text-2xl tracking-wide mb-8 md:mb-12 mx-auto text-center w-fit">
          OUR LATEST ARTICLES
        </h2>

        {/* Mobile slider */}
        <div className="md:hidden">
          <div className="flex justify-end items-center gap-2 -mt-6 mb-3 pr-1">
            <button
              type="button"
              aria-label="Previous article"
              onClick={prev}
              className="w-8 h-8 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-sm"
            >
              &lt;
            </button>
            <button
              type="button"
              aria-label="Next article"
              onClick={next}
              className="w-8 h-8 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-sm"
            >
              &gt;
            </button>
          </div>
          <div
            ref={viewportRef}
            className="overflow-hidden px-1"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
              touchDelta.current = 0;
            }}
            onTouchMove={(e) => {
              touchDelta.current = e.touches[0].clientX - touchStartX.current;
              if (trackRef.current) {
                trackRef.current.style.transition = 'none';
                trackRef.current.style.transform = `translateX(${ -index * slideWidth + touchDelta.current }px)`;
              }
            }}
            onTouchEnd={() => {
              if (Math.abs(touchDelta.current) > 60) {
                if (touchDelta.current < 0) {
                  next();
                } else {
                  prev();
                }
              } else {
                // snap back
                if (trackRef.current) {
                  trackRef.current.style.transition = 'transform 0.35s ease';
                  trackRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
                }
              }
            }}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${index * slideWidth}px)` }}
              onTransitionEnd={() => {
                if (trackRef.current) trackRef.current.style.transition = '';
              }}
            >
              {articles.map((a) => (
                <div
                  key={a.slug}
                  className="article-slide shrink-0"
                  style={{ width: slideWidth ? `${slideWidth}px` : '100%' }}
                >
                  <div className="px-2">
                    <ArticleCard a={a} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4" aria-hidden="true">
            {articles.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-blue-700" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard a={a} key={a.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
