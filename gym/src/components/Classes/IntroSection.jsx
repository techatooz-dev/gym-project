import React from 'react'
import { Anton } from 'next/font/google'

const anton = Anton({ subsets: ['latin'], weight: '400' })

function IntroSection() {
  return (
    <section className="w-full bg-white relative">
      <div className="max-w-7xl mx-auto  md:pt-8 md:pb-24 relative">
        {/* Green Hero Container */}
  <div className="bg-[#76C043] rounded-none lg:rounded-[48px] w-full px-6 sm:px-12 lg:px-10 py-6 sm:py-10 lg:py-12 flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-10 lg:gap-20">
          {/* Heading */}
            <h1 className={`${anton.className} flex-1 text-black uppercase leading-[0.9] tracking-wide text-[52px] sm:text-[72px] lg:text-[94px] max-w-xl`}>
              Our
              <br />
              Special
              <br />
              EMS Classes
            </h1>

          {/* Image */}
          <div className="flex-1 w-full lg:w-auto lg:ml-4">
            <div className="rounded-[24px] lg:rounded-[40px] overflow-hidden shadow-xl bg-white/10">
              <img
                src="/1.jpg"
                alt="EMS training session"
                className="w-full h-[240px] sm:h-[340px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
 
        {/* Overlapping White Description Box */}
        <div className="mt-4 sm:mt-6 lg:mt-0 lg:absolute lg:left-0 lg:right-0 lg:-bottom-4">
          <div className="max-w-2xl bg-white rounded-tr-4xl px-[16px] sm:px-12 lg:px-8 py-[16px] sm:py-10 lg:py-10 text-slate-700 text-sm sm:text-base leading-7 mx-auto lg:mx-0">
            <p>
              At Pro EMS Fit, we understand that every individual has unique goals. That&apos;s why
              we&apos;ve created specialized EMS classes tailored for different lifestyles and
              needs. From preparing for your big day to recovering after delivery, our classes are
              designed to deliver safe, effective, and lasting results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
