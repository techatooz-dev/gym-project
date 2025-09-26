"use client";
import React from "react";
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

function ExpertCare() {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 mt-8">
        {/* Top Ribbon */}
        <div className="mx-auto mb-8 w-full rounded-full bg-[#7CC245] px-4 py-2 text-center text-sm font-semibold text-white md:text-base">
          <div className="mx-auto flex items-center justify-center gap-3">
            <span aria-hidden className="inline-block rotate-180">➜</span>
            <span>Train smarter and safer under the guidance of skilled professionals</span>
            <span aria-hidden className="inline-block">➜</span>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid items-center gap-8 md:grid-cols-12">
          {/* Left copy */}
          <div className="md:col-span-6">
            {/* <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700">
              <span className="translate-x-0.5">→</span>
            </div> */}
            <h2 className={`${anton.className} mt-4 text-[56px] uppercase leading-[0.9] tracking-tight text-[#1180F2] md:text-[96px]`}>
              Expert
              <br />
              Care  With 
              <br />
             Professionals
            </h2>
            <p className="mt-6 max-w-[24rem] md:max-w-[28rem] lg:max-w-[30rem] text-sm text-gray-700 md:text-base">
              Our team combines advanced EMS technology with professional expertise to deliver safe, effective, and personalized
              training. With guidance at every step, you can achieve your fitness and recovery goals with confidence.
            </p>
          </div>

          {/* Right visual panel */}
          <div className="md:col-span-6">
            <div className="relative mx-auto w-full max-w-[520px]">
              {/* Direct image replacement (no green box) */}
              <Image
                src="/1st.png"
                alt="Smiling professional assisting a senior client using light weights"
                width={520}
                height={580}
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="h-auto w-full"
              />

              {/* Decorative swirl */}
              {/* <svg
                className="pointer-events-none absolute -bottom-6 left-6 h-14 w-14 text-gray-800/70"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8 40c8 8 16-8 24 0s16-8 24 0"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertCare;
