import React from 'react'

function Pregnancy() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-8xl  lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: Heading + Copy */}
        <div className="lg:col-span-7 lg:ml-12 text-center lg:text-left px-[16px] py-[8px] lg:px-0 lg:py-0">
          <h2 className="text-[#76C043] font-extrabold uppercase text-3xl sm:text-[44px] lg:text-[64px] tracking-normal sm:tracking-wide leading-tight sm:leading-[0.95]">
            Pregnancy Diet
            <br />
            &amp; Body Shaping
          </h2>

          <p className="mt-6 text-slate-700 text-sm sm:text-base leading-7 max-w-2xl ">
            We provide specialized pregnancy diet plans and safe body-shaping programs to keep
            mothers healthy, active, and confident. Our focus is on ensuring fitness and well-being
            during pregnancy and helping women restore strength and body shape after childbirth —
            all with safety as the top priority. With expert guidance, every plan is tailored to
            individual needs, ensuring comfort and results, so mothers can embrace a healthier
            lifestyle while enjoying peace of mind.
          </p>
        </div>

        {/* Right: Circular Image with Blue Ring */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Outer blue ring */}
            <div className="">
              {/* Inner white ring to mimic double border */}
              <div className="overflow-hidden">
                <img
                  src="/left.png"
                  alt="Women training on treadmills"
                //   width="520"
                //   height="520"
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
            {/* Small accent dot (optional, to match visual detail) */}
            {/* <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#76C043]" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pregnancy
