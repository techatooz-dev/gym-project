import React from 'react'
import { Anton } from 'next/font/google'

const anton = Anton({ subsets: ['latin'], weight: '400' })

function Wellness() {
  return (
    <section className="w-full bg-white  mb-14">
      <div className="max-w-7xl grid md:grid-cols-12 gap-12 items-center">
        {/* Left: Image with blue backdrop */}
        <div className="md:col-span-6 relative flex justify-center md:justify-start bg-black">
          {/* <div className="absolute -left-8 top-10 w-64 md:w-72 h-60 md:h-72 bg-[#14A7DF] rounded-tr-[12px] rounded-bl-[12px]" /> */}
          <div className="relative bg-white  overflow-hidden w-full">
            <img
              src="/5.png"
              alt="Wellness EMS session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="md:col-span-6">
          <h3 className={`${anton.className} text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-bold uppercase tracking-[0.05em] mb-8`}>
            Pain Relief &
            <br />
            Wellness
          </h3>
          <p className="text-slate-700 text-sm md:text-base leading-7 md:leading-8 max-w-xl">
            Chronic pain and muscle stiffness can hold you back from living life to the fullest. Our Pain Relief & Wellness
            Class is designed with therapeutic EMS sessions that gently stimulate muscles, improve blood circulation, and
            relieve tension. Ideal for people with back pain, joint issues, or mobility concerns, this class restores
            comfort, flexibility, and peace of mind.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Wellness
