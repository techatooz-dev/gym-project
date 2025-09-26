import React from 'react'
import { Anton } from 'next/font/google'

const anton = Anton({ subsets: ['latin'], weight: '400' })

function Wedding() {
  return (
    <section className="w-full bg-white  py-14 md:py-10">
      <div className="max-w-8xl grid md:grid-cols-12 gap-10 items-start">
        {/* Left: Text */}
        <div className="md:col-span-6 ml-5 px-8">
          <h2 className={`${anton.className} text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-[0.04em] text-black mb-6`}> 
            Wedding Fitness
            <br />
            Program
          </h2>
          <p className="text-slate-700 leading-7 md:leading-8 max-w-xl text-sm md:text-base">
            Your wedding is one of the most important days of your life — and you deserve to look and feel your absolute best. Our Wedding Fitness EMS sessions are designed to help brides and grooms slim down, tone up, and gain that natural glow of confidence. With just 20-minute sessions, you can achieve results that normally take hours in the gym. Perfect for picture-ready moments and lasting energy on your big day.
          </p>
        </div>

        {/* Right: Image with blue background shape */}
        <div className="md:col-span-6 relative ">
          {/* Blue background card */}
          {/* <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 bg-[#15A7DF] rounded-[56px]" /> */}
          <div className="relative rounded-[40px] overflow-hidden bg-white w-full">
            <img
              src="/2 (1).png"
              alt="Wedding fitness EMS training"
              className="w-full h-[500px] object-cover aspect-[16/9] md:aspect-[5/3]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wedding
