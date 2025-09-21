import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function Physiotherapy() {
  return (
    <section className="relative py-14 md:py-20 bg-white">
      {/* Top-right decorative scribble */}
      {/* <img
        src="/file.svg"
        alt="decorative"
        className="hidden md:block absolute top-6 right-6 w-12 h-12 opacity-90"
      /> */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Row 1: Image left, Title + description right */}
        <div className="grid gap-6 md:grid-cols-12 items-start">
          {/* Image */}
          <div className="md:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-sm">
              <div className="relative w-full h-[260px] md:h-[360px] lg:h-[400px]">
                <Image src="/Physiotherapy.png" alt="Physiotherapy" fill className="object-cover" />
              </div>
            </div>
            {/* Green accent bar */}
            <div className="absolute -bottom-4 left-0 h-6 w-40 bg-lime-500 rounded-sm" />
          </div>

          {/* Heading and intro paragraph */}
          <div className="md:col-span-7">
            <div className="relative mb-4">
              {/* Blue highlight block behind part of the title */}
              {/* <div className="hidden md:block absolute -top-2 right-20 h-6 w-48 bg-sky-500 rounded-md" /> */}
              <h1
                className={`${anton.className} relative z-10 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none text-slate-900 tracking-tight`}
              >
                PHYSIOTHERAPY
                <br />
                SESSIONS
              </h1>
            </div>
            <p className="text-slate-700 max-w-2xl">
              Pro EMS Fit offers expert care for musculoskeletal issues such as frozen shoulder, neck pain,
              knee pain, and disc bulge. With advanced EMS therapy and personalized treatment plans, we focus on
              reducing pain, restoring mobility, and improving overall wellness. Our approach ensures lasting
              results and better quality of life.
            </p>
          </div>
        </div>

        {/* Row 2: Full-width paragraph */}
        <div className="mt-10">
          <p className="text-slate-700">
            We also provide rehabilitation for neurological disorders like stroke, cerebral palsy, vertigo, and
            facial palsy, as well as recovery programs for sports injuries including ACL tears and dislocations.
            Our goal is to ensure safe recovery, prevent future injuries, and enhance performance. With expert
            guidance, we help patients regain strength and confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
