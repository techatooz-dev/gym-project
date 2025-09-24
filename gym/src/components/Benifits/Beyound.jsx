import React from 'react';
import Image from 'next/image';
import { Anton } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: '400' });

function Beyound() {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-10 md:py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
        {/* Left: image with green offset frame */}
        <div className="relative w-full max-w-xl">
          {/* Offset green frame behind */}
          {/* <div className="absolute -bottom-4 -right-4 h-[92%] w-[92%] border-8 border-lime-500" /> */}
          <div className="relative z-10">
            <Image
              src="/group 2.png"
              alt="Athlete preparing for heavy lift"
              width={700}
              height={520}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: copy + bar */}
        <div>
          <h3 className={`${anton.className} text-5xl md:text-7xl font-black leading-tight uppercase text-slate-900 mb-4`}>
            Beyond Heavy
            <br />
            Weight Lifting
          </h3>
          <p className="text-slate-600 leading-7 md:leading-8 mb-8">
            Forget the myth that only heavy lifting builds or maintains your body. Traditional workouts
            often demand hours of intense training and repetitive heavy exercises, which can sometimes put
            unnecessary strain on your joints and muscles. With EMS, you get a smarter, faster, and safer
            alternative that activates deep muscle fibers without the need for exhausting weightlifting sessions.
          </p>
          <div className="h-50 w-full bg-sky-500 rounded-sm" />
        </div>
      </div>
    </section>
  );
}

export default Beyound;
