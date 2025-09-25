import React from 'react'

function IntroSection() {
  return (
    <section className="w-full bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 relative">
        {/* Green Hero Container */}
        <div className="bg-[#76C043] rounded-[48px] w-full px-8 sm:px-12 lg:px-16 py-12 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
          {/* Heading */}
            <h1 className="flex-1 text-black font-extrabold uppercase leading-[0.9] tracking-wide text-[52px] sm:text-[72px] lg:text-[84px] max-w-xl">
              Our
              <br />
              Special
              <br />
              EMS Classes
            </h1>

          {/* Image */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="rounded-[40px] overflow-hidden shadow-xl bg-white/10">
              <img
                src="/EMS.jpg"
                alt="EMS training session"
                className="w-full h-full object-cover max-h-[420px]"
              />
            </div>
          </div>
        </div>

        {/* Overlapping White Description Box */}
        <div className="absolute left-0 right-0 -bottom-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl bg-white rounded-[48px] shadow-sm px-8 sm:px-12 py-10 text-slate-700 text-sm sm:text-base leading-7">
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
