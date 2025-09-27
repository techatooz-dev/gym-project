import React from 'react'
import IntroSection from '@/components/Contact/IntroSection'
import Burn from '@/components/Contact/Burn'
import ImageSection from '@/components/Contact/Imagesection'
import Safe from '@/components/Contact/Safe'
import GetInTouch from '@/components/Contact/GetInTouch'
function page() {
  return (
    <div>
      <IntroSection />
      <Burn />
      <ImageSection />
      <Safe />  
      <GetInTouch /> 
    </div>
  )
}

export default page
