import React from 'react'
import { Anton } from 'next/font/google'

const anton = Anton({ subsets: ['latin'], weight: '400' })

function Athlete() {
  return (
    <section className="w-full bg-white ">
      <div className="mx-auto max-w-8xl">
        <div className="relative">
          <div
            className="relative bg-[#76C043] text-black grid md:grid-cols-12 gap-10 md:gap-12 pt-14 md:pt-20 pb-32 md:pb-40 px-6 sm:px-10 lg:px-14 overflow-hidden"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)' }}
          >
            {/* Full-width slanted decorative line & dot */}
            {/* <div className="pointer-events-none absolute bottom-8 left-0 w-full" style={{ transform: 'translateY(35%) rotate(7deg)' }}>
              <div className="relative w-full h-[3px] bg-white">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border-4 border-[#14A7DF]" />
              </div>
            </div> */}
            {/* Left Text Content */}
            <div className="md:col-span-6 flex flex-col justify-start mt-30">
              <h3 className={`${anton.className} text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold uppercase leading-[0.95] tracking-[0.04em] mb-8`}>
                Athlete
                <br />
                Performance
                <br />
                Boost
              </h3>
              <p className="text-black/80 text-sm sm:text-base leading-7 md:leading-8 max-w-xl">
                For athletes and sports lovers who want to reach the next level, this class focuses on enhancing strength,
                endurance, speed, and recovery. EMS activates deeper muscle fibers that traditional training often misses,
                helping you perform stronger, recover faster, and push your limits further. Whether you&apos;re preparing for
                competition or simply love sports, this program gives you the extra edge.
              </p>
            </div>

            {/* Right Image (simple slanted image only) */}
            <div className="md:col-span-6 flex items-start">
              <div className="w-full max-w-xl ml-auto mt-2 overflow-hidden rounded-sm">
                <img
                  src="/4.png"
                  alt="Athlete EMS performance training"
                  className="w-full h-auto object-cover -rotate-2 scale-110 origin-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Athlete
