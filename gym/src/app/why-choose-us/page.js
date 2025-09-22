import React from 'react'
import IntroSection from '@/components/WhyChooseUs/IntroSection';
import PhysioLed from '@/components/WhyChooseUs/PhysioLed';
import Personalized from '@/components/WhyChooseUs/Personalized';
import OurSuccess from '@/components/WhyChooseUs/OurSuccess';
import ChooseHappy from '@/components/WhyChooseUs/ChooseHappy';

function page() {
  return (
    <div>
       <IntroSection />
       <OurSuccess />
       <ChooseHappy />
      {/* <PhysioLed />
      
      <Personalized /> */}
    </div>
  )
}

export default page
