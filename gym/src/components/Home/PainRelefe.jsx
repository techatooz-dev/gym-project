import React from "react";
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function PainRelefe() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Row 1: Image (left), Title (center), Blue info (right) */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-12 items-stretch">
          {/* Image card */}
          <div className="md:col-span-4">
            <div className="bg-slate-300 rounded-[24px] p-2 h-full">
              <div className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-[20px]">
                <Image src="/pain.png" alt="Pain relief" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* White title card */}
          <div className="md:col-span-5">
            <div className="bg-white rounded-[24px] border border-slate-200 p-6 sm:p-8 lg:p-10 flex items-center">
              <h2 className={`${anton.className} text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none text-slate-900`}> 
                PAIN RELIEF
                <br />
                WITH EMS
              </h2>
            </div>
          </div>

          {/* Blue info card */}
          <div className="md:col-span-3">
            <div className="bg-sky-500 text-white rounded-[24px] p-6 md:p-7">
              <p className="text-sm sm:text-base leading-relaxed">
                EMS therapy provides safe and effective relief from conditions like tennis elbow, which often
                results from continuous strain and repetitive movements. It helps reduce pain, stiffness, and
                restricted mobility, allowing patients to find relief early on.
              </p>
            </div>
          </div>


          
        </div>

        {/* Row 2: sky bar (left) and green paragraph card (right) on the same row */}
        <div className="mt-3 md:mt-4 grid md:grid-cols-12 items-start">
          <div className="md:col-span-4">
            <div className="w-28 h-6 bg-sky-500 rounded-sm" />
          </div>
          <div className="mt-4 md:-mt-43 md:col-start-5 md:col-span-8">
            <div className="bg-lime-500 rounded-[24px] p-6 md:p-7 text-white">
              <p className="text-sm sm:text-base leading-relaxed">
                Through controlled electrical muscle stimulation, EMS not only reduces discomfort but also activates
                deep muscle fibers that are difficult to engage with conventional therapy. This targeted stimulation
                enhances blood circulation, helps flush out toxins, and decreases inflammation around the affected area.
                As the healing process accelerates, muscles regain their natural strength, flexibility, and endurance.
                Over time, patients notice significant improvements in joint mobility and overall function, making it easier
                to perform daily activities without pain. For athletes and active individuals, EMS also supports faster
                recovery, improved performance, and reduced risk of recurring injuries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

