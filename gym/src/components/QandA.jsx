"use client";
import React, { useState } from "react";

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
  const [open, setOpen] = useState(0); // index of open item
  const toggle = (i) => setOpen((prev) => (prev === i ? -1 : i));

  return (
    <section className="relative py-20 bg-gray-900">

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-green-600">QUESTIONS & ANSWERS</h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed">
            Everything you want to know about our EMS‑powered training experience—transparent, concise and expert‑backed.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className={`group border border-gray-700 rounded-xl bg-gray-800 transition-colors overflow-hidden ${
                    isOpen ? "border-green-600 bg-gray-800" : "hover:border-green-600"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-base md:text-lg tracking-wide text-gray-100">
                      {item.q}
                    </span>
                    <span
                      className={`flex items-center justify-center h-9 w-9 rounded-full border text-sm font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-green-600 text-white border-green-600 rotate-180"
                          : "border-green-600 text-green-600 bg-gray-900 group-hover:bg-gray-800"
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`px-6 pb-6 text-gray-300 text-sm md:text-base leading-relaxed grid transition-[grid-template-rows] duration-400 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden pr-2">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Highlight / Callout Panel */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24 space-y-6">
              <div className="relative rounded-2xl p-8 bg-gray-800 border border-gray-700">
                <h3 className="text-xl font-bold tracking-wide text-green-600 mb-3">Why This Matters</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Informed training choices accelerate adaptation. Understanding how EMS interacts with recovery, nutrition and movement helps you stay consistent and safe while maximizing outcomes.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-gray-300 list-disc list-inside">
                  <li>Evidence-aligned programming</li>
                  <li>Lower joint load, higher activation</li>
                  <li>Time-efficient progression</li>
                </ul>
              </div>
              <div className="rounded-2xl p-6 bg-gray-800 border border-gray-700 flex flex-col gap-4">
                <h4 className="text-lg font-semibold text-gray-100">Still have a question?</h4>
                <p className="text-gray-300 text-sm">Reach out and our team will guide you through the best starting plan for your goals.</p>
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors"
                >
                  Contact Us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
