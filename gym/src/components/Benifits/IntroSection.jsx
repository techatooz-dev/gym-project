import React from 'react';
import Image from 'next/image';

function IntroSection() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl  py-8 md:py-12">
        <div className="relative overflow-hidden rounded-md">
          <Image
            src="/Group 1.png"
            alt="Benefits of Pro EMS Fit"
            width={1600}
            height={700}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
