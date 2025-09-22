import React from 'react'
import IntroSection from '@/components/WhyChooseUs/IntroSection';
import PhysioLed from '@/components/WhyChooseUs/PhysioLed';
import JointFriendly from '@/components/WhyChooseUs/JointFriendly';
import Personalized from '@/components/WhyChooseUs/Personalized';
import OurSuccess from '@/components/WhyChooseUs/OurSuccess';

function page() {
  return (
    <div>
       <IntroSection />
       <OurSuccess />
      {/* <PhysioLed />
      <JointFriendly />
      <Personalized /> */}
    </div>
  )
}

export default page
