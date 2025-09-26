import React from 'react'

function Safe() {
    return (
        <section className="relative w-full bg-white px-4 sm:px-6 lg:px-8 py-14 md:py-20 overflow-hidden">
            {/* Decorative green semicircle */}
            {/* <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-[-380px] md:right-[-220px] lg:right-[-200px] w-[780px] h-[780px] rounded-full bg-[#9BCB49]" aria-hidden="true" /> */}


            {/* <div
                className="
    pointer-events-none
    absolute
    top-1/2 -translate-y-1/2
    -right-70  
    w-[500px] h-[400px]    
    rounded-full
    bg-[#9BCB49]
    overflow-hidden
  "
                aria-hidden="true"
            /> */}



            <div
  className="
    pointer-events-none
    absolute
    top-1/2 -translate-y-1/2
    -right-70         
    w-[500px] h-[400px]
    rounded-full
    bg-[#9BCB49]
    z-0                   /* circle ko piche rakho */
  "
  aria-hidden="true"
/>


            <div className="relative mx-auto max-w-7xl">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 mb-8 max-w-4xl">
                    Safe, Fast, and Scientifically Proven
                </h2>
                <div className="space-y-7 text-[15px] sm:text-base leading-7 text-neutral-700 max-w-7xl pr-4">
                    <p>
                        EMS isn’t just faster — it’s also safer. Unlike traditional workouts that put pressure on joints, bones, and ligaments,
                        EMS offers a low-impact, joint-friendly solution suitable for people of all fitness levels. Each session combines fat loss,
                        muscle toning, and strength building in a safe and controlled environment, ensuring you get maximum results without side effects
                        or unnecessary strain. Backed by years of scientific research, EMS is not just another trend — it’s a proven technology that
                        makes modern fitness more effective, accessible, and sustainable. Whether you’re recovering from an injury, looking to tone your body,
                        or simply want a smarter way to train, EMS is the perfect choice.
                    </p>
                    <p className="font-medium text-neutral-900">
                        Have questions or want to experience it yourself? Our team is here to guide you — contact us today and take the first step towards a healthier, stronger you!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Safe
