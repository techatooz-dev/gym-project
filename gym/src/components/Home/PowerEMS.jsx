"use client";
import React from "react";
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

function PowerEMS() {
  return (
    <section className="relative isolate">
  {/* Cyan base stripe fills from mid to bottom (nudged lower for spacing) */}
  <div className="absolute left-0 right-0 top-[58%] bottom-0 z-0 bg-[#23A7D8]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-12">
          {/* Left image card */}
          <div className="md:col-span-6">
            <div className="relative mx-auto w-full max-w-[520px]">
              <Image
                src="/2nd (4).png"
                alt="EMS training — two athletes performing guided squats"
                width={520}
                height={620}
                priority
                className="h-auto w-full rounded-[36px]"
              />
            </div>
          </div>

          {/* Right copy */}
          <div className="md:col-span-6 mt-22">
            <h2 className={`${anton.className} text-[56px] font-black uppercase leading-[0.95] tracking-tight text-gray-900 md:text-[96px]`}>
              <span className="block">Power of</span>
              <span className="block">EMS Training</span>
            </h2>
            <p className="mt-16 max-w-md text-sm text-white md:text-base">
              EMS (Electro Muscle Stimulation) unlocks the full potential of your body by activating up to 95% of muscle fibers — more than
              traditional workouts. In just 20-minute sessions, twice a week, you can achieve visible improvements in strength, endurance,
              and overall fitness. This advanced technology accelerates fat loss, tones muscles, and shapes the body while saving valuable
              time, making it ideal for both busy professionals and fitness enthusiasts.
            </p>

            {/* Arrow CTA */}
            {/* <div className="mt-6 inline-flex h-12 w-24 items-center justify-center rounded-full border-2 border-gray-300">
              <span className="text-2xl">➜</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PowerEMS;
