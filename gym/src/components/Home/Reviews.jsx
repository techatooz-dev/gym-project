"use client";
import { useEffect, useRef, useState } from "react";
export default function Reviews({ reviews }) {
  const SAMPLE = [
    {
      id: 1,
      name: "Ayesha Khan",
      rating: 5,
      date: "Aug 2025",
      verified: true,
      featuredImage: "/gym2.jpg",
      text: "Remarkable experience. The therapist explained everything clearly and my shoulder pain reduced in just two sessions.",
    },
    {
      id: 2,
      name: "Bilal Hassan",
      rating: 4,
      date: "Jul 2025",
      verified: true,
      media: { thumb: "/EMS.jpg", title: "EMS session" },
      text: "Professional staff and clean studio. The exercises were tailored to me and I could feel steady progress each week.",
    },
    {
      id: 3,
      name: "Fatima Iqbal",
      rating: 5,
      date: "Jun 2025",
      verified: true,
      text: "I loved the structured plan. They focused on posture and mobility. I'm back to running without knee pain!",
    },
    {
      id: 4,
      name: "Omar Malik",
      rating: 5,
      date: "Jun 2025",
      verified: true,
      media: { thumb: "/Fitness-training.jpg", title: "Strength circuit" },
      text: "Hands-on treatment plus a simple home routine worked wonders. Friendly team and clear guidance throughout.",
    },
    {
      id: 5,
      name: "Sara Ahmed",
      rating: 4,
      date: "May 2025",
      verified: true,
      text: "Great communication and measurable results.",
    },
    {
      id: 6,
      name: "Zain Ul Abidin",
      rating: 5,
      date: "Apr 2025",
      verified: true,
      media: { thumb: "/gym1.webp", title: "Mobility work" },
      text: "Came in with chronic back stiffness. Their approach addressed the root cause. I feel stronger and more mobile now.",
    },
    {
      id: 7,
      name: "Hina Tariq",
      rating: 5,
      date: "Mar 2025",
      verified: true,
      text: "Super friendly trainers and very systematic progress tracking. I regained core strength faster than expected.",
    },
    {
      id: 8,
      name: "Usman Farooq",
      rating: 4,
      date: "Feb 2025",
      verified: true,
      text: "Solid program structure and clean facility. A fifth star once weekend slots expand, otherwise excellent experience.",
    },
  ];

  // Source data (fallback to SAMPLE) then constrain to 8 for display
  const dataAll = reviews && Array.isArray(reviews) && reviews.length ? reviews : SAMPLE;
  const data = dataAll.slice(0, 8);
  const total = data.length;
  const avg = data.reduce((s, r) => s + (r.rating || 0), 0) / total;
  const dist = [1, 2, 3, 4, 5].map((n) => data.filter((r) => r.rating === n).length);

  const Star = ({ filled, colorFilled = "text-yellow-400", colorEmpty = "text-stone-400" }) => (
    <svg viewBox="0 0 24 24" aria-hidden className={`w-5 h-5 ${filled ? colorFilled : colorEmpty}`}>
      {filled ? (
        <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      ) : (
        <path fill="none" stroke="currentColor" strokeWidth="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      )}
    </svg>
  );

  const Stars = ({ rating, colorFilled, colorEmpty }) => (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < Math.round(rating)} colorFilled={colorFilled} colorEmpty={colorEmpty} />
      ))}
    </div>
  );

  const Avatar = ({ name }) => {
    const initials = name
      .split(" ")
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
    return (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-semibold">
        {initials}
      </span>
    );
  };

  // carousel state
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);

  // determine visible cards by viewport width (match Tailwind breakpoints)
  useEffect(() => {
    const computeVisible = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 0;
      if (w >= 1280) return 4; // xl
      if (w >= 1024) return 3; // lg
      if (w >= 640) return 2;  // sm
      return 1;
    };
    const onResize = () => {
      const v = computeVisible();
      setVisible(v);
      // clamp index so last page aligns nicely
      setIndex((i) => Math.min(i, Math.max(0, total - v)));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [total]);

  const scrollToIndex = (i) => {
    const node = containerRef.current;
    if (!node) return;
    const child = node.children?.[i];
    if (child) {
      node.scrollTo({ left: child.offsetLeft - 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToIndex(index);
  }, [index]);

  const canPrev = index > 0;
  const canNext = index < Math.max(0, total - visible);

  const prev = () => canPrev && setIndex((i) => i - 1);
  const next = () => canNext && setIndex((i) => i + 1);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight text-green-600">What our clients say</h2>
          <p className="text-gray-600">Real experiences from people we’ve helped move better.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-600">{avg.toFixed(1)}</span>
            <Stars rating={avg} colorFilled="text-yellow-400" colorEmpty="text-gray-600" />
          </div>
          <span className="text-gray-600 text-sm">{total} reviews</span>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-5 gap-4">
        {Array.from({ length: 5 }, (_, i) => 5 - i).map((stars, idx) => {
          const count = dist[stars - 1];
          const pct = total ? Math.round((count / total) * 100) : 0;
          return (
            <div key={stars} className="col-span-1 flex items-center gap-2">
              <div className="w-12 flex items-center  gap-1">
                <span className="text-sm text-gray-900">{stars}</span>
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-400" aria-hidden>
                  <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <div className="flex-1 h-2 rounded bg-gray-700 overflow-hidden">
                <div className="h-full bg-yellow-400" style={{ width: pct + "%" }} />
              </div>
              <div className="w-10 text-right text-sm text-gray-900">{pct}%</div>
            </div>
          );
        })}
      </div>

      {/* Carousel: show 4 on desktop, slide by 1 on arrows */}
      <div className="mt-15 relative">
        <div
          ref={containerRef}
          className="clients-carousel flex -mx-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
        >
          {data.map((r) => (
            <article
              key={r.id}
              className="snap-start flex-none px-3 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="bg-gray-50 py-6 px-4 h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
              <div className="flex items-center gap-3">
                <Avatar name={r.name} />
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 flex items-center gap-2">
                    {r.name}
                    {r.verified && (
                      <span className="inline-flex items-center text-blue-600 text-xs font-semibold">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1 text-blue-600"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-1.2-6.2 5-5-1.4-1.4-3.6 3.6-1.6-1.6-1.4 1.4 3 3z"/></svg>
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">{r.date}</div>
                </div>
              </div>
              <div className="mt-2"><Stars rating={r.rating} /></div>
              <p className="mt-3 text-gray-900 leading-relaxed text-sm">
                {r.text}
              </p>
              </div>
            </article>
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          disabled={!canPrev}
          aria-label="Previous review"
          className="flex absolute -left-2 md:-left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-gray-200 shadow disabled:opacity-40"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
            <path d="M15.53 4.47a.75.75 0 0 1 0 1.06L10.06 11l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!canNext}
          aria-label="Next review"
          className="flex absolute -right-2 md:-right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-gray-200 shadow disabled:opacity-40"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
            <path d="M8.47 19.53a.75.75 0 0 1 0-1.06L13.94 13 8.47 7.53a.75.75 0 1 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0Z" />
          </svg>
        </button>
      </div>

      <div className="mt-8 mb-6 md:mb-0 flex justify-center">
        <a
          href="/contact-us"
          aria-label="Write a Review"
          className="inline-flex items-center px-7 py-3 bg-[#76C043] text-white font-semibold shadow-sm hover:bg-[#5ea932] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#76C043] focus-visible:ring-offset-white transition"
        >
          Write a Review
        </a>
      </div>
      </div>
    </section>
  );
}
