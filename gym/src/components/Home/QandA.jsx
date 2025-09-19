"use client";
import React from "react";

const faqs = [
  {
    q: "How does EMS training work?",
    a: "Electrical Muscle Stimulation (EMS) sends controlled impulses to your muscles, causing deep contractions that recruit more fibers than conventional training—helping you build strength and burn calories faster with low joint impact.",
  },
  {
    q: "Is it safe for beginners or people with pain?",
    a: "Yes. Sessions are led or programmed by physiotherapy-aware professionals. Intensity is gradually scaled, making it suitable for those with limited mobility, prior injuries, or looking for low‑impact shaping.",
  },
  {
    q: "How many sessions per week are recommended?",
    a: "Most members start with 2 sessions per week. Because EMS triggers deep recruitment, recovery matters. Some transition to 3 once adaptation improves and goals accelerate.",
  },
  {
    q: "What results can I expect?",
    a: "Improved muscle tone, posture, fat reduction efficiency, and core stability—often noticeable within the first 4–6 weeks when combined with adequate sleep, hydration and nutrition.",
  },
  {
    q: "Do I still need traditional workouts?",
    a: "EMS can complement or partially replace longer gym routines. Many use it as a time‑efficient foundation paired with walking, mobility, or sport-specific practice.",
  },
];

export default function QandA() {
  return (
    <section className="relative py-10 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* 2x2 FAQ cards, matching screenshot styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {faqs.slice(0, 4).map((item, i) => {
            const color = i % 2 === 0 ? "bg-[#23A7D8]" : "bg-[#7CC245]";
            const qNumber = i + 1;
            return (
              <div key={item.q} className="rounded-md">
                {/* Ribbon header */}
                <div className={`${color} text-white rounded-md px-5 py-3 font-semibold text-base md:text-lg`}>{`Q${qNumber}: ${item.q}`}</div>
                {/* Answer body */}
                <div className="px-5 py-4 text-sm md:text-base leading-relaxed">
                  <p>
                    <span className="font-semibold text-gray-900">A: </span>
                    <span className="text-gray-700">{item.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
