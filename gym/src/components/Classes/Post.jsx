import React from 'react'
import { Anton } from 'next/font/google'

const anton = Anton({ subsets: ['latin'], weight: '400' })

function Post() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-8xl">
        {/* Slanted Green Split Container */}
        <div className="relative mt-4 md:mt-0">
          <div
            className="relative bg-[#76C043] text-black grid md:grid-cols-12 gap-10 md:gap-12 pt-10 md:pt-16 pb-16 md:pb-24 px-6 sm:px-10 lg:px-14"
            style={{ clipPath: 'polygon(0 6%, 100% 20%, 100% 100%, 0 100%)' }}
          >
            {/* Left Image Cluster */}
            <div className="md:col-span-6 flex items-start">
              {/* Straight outer container; only the image inside is slanted */}
              <div className="w-full max-w-xl mt-12 rounded-sm overflow-hidden">
                <img
                  src="/3.png"
                  alt="Post delivery EMS recovery training"
                  className="w-full object-cover -rotate-2 scale-110 origin-center"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="md:col-span-6 flex flex-col justify-start mt-60 ">
              <h3 className={`${anton.className} text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-[0.95] tracking-[0.04em] mb-8`}> 
                Post-Delivery
                <br />
                Recovery Training
              </h3>
              <p className="text-black/80 text-sm sm:text-base leading-7 md:leading-8 max-w-xl">
                Motherhood is beautiful, but it also brings changes to your body. Our Post-Delivery
                Recovery Class uses gentle and safe EMS technology to help new mothers rebuild core
                strength, reduce post-pregnancy fat, and improve posture. These sessions are
                low-impact and joint-friendly, ensuring a safe return to fitness while boosting
                energy and confidence in your daily life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post
