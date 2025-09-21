import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function Spraind() {
  return (
    <section className="relative py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Small sky bar at top-left */}
        <div className="mb-4">
          <div className="w-20 h-6 bg-sky-500 rounded-sm" />
        </div>

        {/* Main grid: left text, right image */}
        <div className="grid gap-6 md:grid-cols-12 items-start">
          {/* Left: Title + paragraphs + arrow button */}
          <div className="md:col-span-6">
            <div className="max-w-xl">
              <h1 className={`${anton.className} text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none text-slate-900 tracking-tight mb-4`}>
                SPRAINED
                
                ANKLE
              </h1>
              <p className="text-slate-700 leading-relaxed mb-5">
                For those suffering from a <span className="font-semibold">sprained ankle</span>, EMS sessions accelerate the healing
                process by working on multiple levels. The gentle electrical stimulation reduces swelling, increases blood
                circulation, and activates the surrounding muscles that often become weak after injury. By targeting both the
                injured area and its supporting muscles, EMS promotes faster tissue repair and prevents stiffness, making the
                ankle stronger during the early stages of recovery.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                In addition, EMS helps restore balance, stability, and joint function without adding heavy load or pressure on the
                injured ankle. This safe and controlled approach allows patients to regain mobility and confidence step by step.
                Over time, the sessions improve flexibility, strength, and coordination, ensuring not only quicker recovery but also
                reducing the chances of future injuries.
              </p>

              {/* <Link
                href="/sprained-ankle-recovery"
                className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
                aria-label="Learn more"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path fillRule="evenodd" d="M4 12a1 1 0 0 1 1-1h11.586l-3.293-3.293a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L16.586 13H5a1 1 0 0 1-1-1z" clipRule="evenodd" />
                </svg>
              </Link> */}
            </div>
          </div>

          {/* Right: Image card */}
          <div className="md:col-span-6">
            <div className="bg-white p-2 h-full">
              <div className="relative w-full h-[320px] md:h-[420px] lg:h-[460px] overflow-hidden rounded-xl">
                <Image src="/spenal.jpg" alt="Sprained ankle" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

