"use client";
import Image from "next/image";

function IntroSection() {
  return (
    <section className=" px-3 md:px-4 lg:px-6 py-4 md:py-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative ">
          <div className="relative w-full aspect-[16/6]">
            <Image
              src="/EMS-fitness-training.jpeg"
              alt="EMS training session in studio"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff00] via-[#00000055] to-[#000000c8]" />
            <h1 className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-extrabold uppercase tracking-[0.12em] whitespace-nowrap text-white drop-shadow-[0_8px_10px_rgba(0,0,0,0.55)]">
              WHY CHOOSE US
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
