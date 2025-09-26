
import React, { useState } from "react";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

const cards = [
  { color: "bg-[#23A7D8]", text: "MISSING PICS" },
  { color: "bg-[#7CC245]", text: "MISSING PICS" },
  { color: "bg-[#23A7D8]", text: "MISSING PICS" },
  { color: "bg-[#7CC245]", text: "MISSING PICS" },
  { color: "bg-[#23A7D8]", text: "MISSING PICS" },
];

export default function ClientsCarousel() {
  const [index, setIndex] = useState(0);
  const total = cards.length;

  // Show 3 cards at a time, center active
  const getVisible = () => {
    // Always 3 cards, center is index
    return [
      cards[(index + total - 1) % total],
      cards[index % total],
      cards[(index + 1) % total],
    ];
  };

  const advance = (dir) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  return (
  <section className="relative bg-white">
      {/* Green header band */}
  <div className="bg-[#7CC245] pt-10 pb-42">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="flex flex-col items-center gap-1 md:gap-2">
              <span className="h-1.5 w-16 md:w-24 bg-white rounded-full" />
              <h2 className={`${anton.className} text-[44px] md:text-[80px] font-black uppercase leading-[0.95] tracking-tight text-gray-900`}>
                OUR HAPPY CLIENTS
              </h2>
            </div>
          <p className="text-white text-sm md:text-base font-medium max-w-2xl mx-auto">
            At Pro EMS Fit, our clients’ happiness is our greatest achievement. From fitness enthusiasts to recovery patients, each success story reflects the impact of our EMS programs. Their positive feedback and lasting results inspire us to keep delivering safe, effective, and personalized solutions that truly make a difference.
          </p>
        </div>
      </div>

      {/* Cards row straddling the boundary */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="-mt-20 md:-mt-32 flex justify-center items-end gap-8 md:gap-10 min-h-[300px]">
          {getVisible().map((card, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center rounded-[28px] shadow-[0_14px_28px_rgba(0,0,0,0.18)] ${card.color} w-[220px] h-[300px] md:w-[240px] md:h-[320px] text-center text-white text-2xl font-bold select-none`}
            >
              {card.text}
            </div>
          ))}
        </div>

        {/* Slider arrows on white area */}
        <div className="flex justify-center gap-4 mt-8 mb-8">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => advance(-1)}
            className="h-10 w-10 rounded-full border border-[#23A7D8] bg-white text-gray-700 flex items-center justify-center shadow hover:bg-blue-300"
          >
            <span className="text-2xl">&#60;</span>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => advance(1)}
            className="h-10 w-10 rounded-full border border-[#7CC245] bg-white text-gray-700 flex items-center justify-center shadow hover:bg-[#7CC245]"
          >
            <span className="text-2xl">&#62;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
