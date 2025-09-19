import React from "react";
import Image from "next/image";

function PhysioLed() {
  return (
    <section id="physio-led" className="relative isolate">
      {/* Curved top divider for contrast from hero */}
      {/* <svg className="absolute -top-8 left-0 right-0 -z-10 h-16 w-full text-gray-50" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,64 C240,32 480,0 720,0 C960,0 1200,32 1440,64 L1440,80 L0,80 Z" />
      </svg> */}

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Header copy - compact and distinct */}
        <div className="text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700 ring-1 ring-emerald-200">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Physio‑Led EMS Training
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Certified Physiotherapists. Safer, Smarter, Personal.
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-gray-700 md:text-lg">
            Sessions <span className="font-semibold">certified physiotherapists</span> supervise karte hain — injury prevention,
            expert knowledge, aur joint‑friendly coaching ke saath. Aap safe progress karte hue
            real results dekhte ho.
          </p>
        </div>

        {/* Unique layout: Timeline + Supervisor Card */}
        <div className="mt-12 grid gap-8 md:grid-cols-12">
          {/* Timeline */}
          <div className="md:col-span-8 lg:col-span-8">
            <ol className="relative ml-4 border-l-2 border-emerald-100 pl-6">
              {[
                {
                  title: "Assessment & Posture Check",
                  desc: "Physio aapki mobility, joint health aur goals assess karta hai. Correctives if needed.",
                },
                {
                  title: "Calibration & Safety Brief",
                  desc: "Intensity personalized hoti hai — sensitive joints ko protect karte hue effective stimulus ensure.",
                },
                {
                  title: "Guided EMS Training (20 mins)",
                  desc: "Form cues + joint‑friendly movement selection. Fat burn without impact.",
                },
                {
                  title: "Recovery & Progress Tracking",
                  desc: "Cool‑down, breathing, recovery tips — next session ke liye plan & progression set.",
                },
              ].map((step, idx) => (
                <li key={step.title} className="mb-8 last:mb-0">
                  <div className="absolute -left-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white ring-4 ring-white">
                    <span className="text-xs font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-700">{step.desc}</p>

                  {/* Inline receipts of benefits */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {idx === 0 && (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200">Injury risk check</span>
                    )}
                    {idx === 1 && (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200">Safe intensity</span>
                    )}
                    {idx === 2 && (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200">Physio guidance</span>
                    )}
                    {idx === 3 && (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200">Personalized plan</span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Supervisor Card */}
          <aside className="md:col-span-4 lg:col-span-4">
            <div className="sticky top-24">
              <div className="relative overflow-hidden rounded-3xl bg-white p-5 shadow-lg ring-1 ring-gray-200">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-emerald-100">
                    <Image src="/mISHA_Amir-1-185x119.jpg" alt="Lead Physiotherapist" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-gray-900">Lead Physiotherapist</h4>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Available today
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">BPT • Certified EMS Specialist</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 divide-x divide-gray-200 rounded-xl bg-gray-50 p-3 text-center">
                  <div>
                    <div className="text-base font-semibold text-gray-900">500+</div>
                    <div className="text-[10px] uppercase tracking-wide text-gray-600">Clients</div>
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gray-900">4.9</div>
                    <div className="text-[10px] uppercase tracking-wide text-gray-600">Rating</div>
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gray-900">10+</div>
                    <div className="text-[10px] uppercase tracking-wide text-gray-600">Years</div>
                  </div>
                </div>

                {/* Credibility photo overlay */}
                <div className="relative mt-4 aspect-[5/3] overflow-hidden rounded-2xl ring-1 ring-gray-200">
                  <Image src="/EMS.jpg" alt="Physiotherapist with client" fill className="object-cover" />
                  <div className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-emerald-950 shadow">Supervised • Certified</div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Image src="/Physiotherapy.png" alt="Physiotherapy" width={18} height={18} />
                    <span>Evidence‑based protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/footer_logo-01.png" alt="Brand" width={18} height={18} />
                    <span>Trusted facility</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Comparison grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-emerald-600 p-6 text-emerald-950 shadow-md ring-1 ring-emerald-500/40">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-emerald-950 ring-1 ring-white/30">
              Recommended
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-white">Physio‑Led Session</h3>
            <ul className="mt-3 space-y-2 text-sm text-emerald-50">
              {[
                "Injury prevention focus",
                "Personalized intensity & progression",
                "Expert form cues & joint safety",
                "Real‑time adjustments for comfort",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-emerald-700">
                    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                      <path d="M16.25 5.75l-7.5 7.5L3.75 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-6 text-white shadow-md ring-1 ring-gray-800">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-100 ring-1 ring-white/20">
              Not advised
            </span>
            <h3 className="mt-3 text-2xl font-semibold">Without Guidance</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-100/90">
              {[
                "Higher injury risk",
                "Guesswork on intensity",
                "No expert form corrections",
                "Inconsistent progress",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white">
                    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhysioLed;
