import React from 'react'

function Healthy() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-8xl py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: Image with blue arc ring */}
        <div className="lg:col-span-6">
          <div className="relative">
            {/* Blue arc background */}
            {/* <div className="absolute -right-6 top-4 bottom-4 w-6 rounded-full bg-[#14A7DF]" /> */}
            {/* Image container */}
            <div className="relative overflow-hidden">
              <img
                src="/right.png"
                alt="Group training with medicine balls"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Heading + Copy */}
        <div className="lg:col-span-6 mr-5">
          <h2 className="text-[#76C043] font-extrabold uppercase leading-[0.95] tracking-wide text-[40px] sm:text-[54px] lg:text-[64px]">
            Healthy Life
            <br />
            &amp; Long-Term
            <br />
            Maintenance
          </h2>
          <p className="mt-6 text-slate-700 text-sm sm:text-base leading-7 max-w-2xl">
            Fitness is not just about short-term transformation. With Pro EMS Fit, you gain the
            tools to maintain a healthy lifestyle long after your sessions. We focus on sustainable
            fitness routines that fit seamlessly into your daily life, making it easier to stay
            consistent. Our approach helps you build healthy habits, balance nutrition with
            training, and enjoy long-term energy and confidence. The goal is simple — a fitter,
            healthier you that lasts for life.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Healthy
