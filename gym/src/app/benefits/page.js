import React from 'react'
import IntroSection from '@/components/Benifits/IntroSection'
import Experience from '@/components/Benifits/Experience'
import Beyound from '@/components/Benifits/Beyound'
import Pregnancy from '@/components/Benifits/Pregnancy'
import Healthy from '@/components/Benifits/Healthy'

function page() {
  return (
    <div>
      <IntroSection />
      <Experience />
      <Beyound />
      <Pregnancy  />
      <Healthy />
    </div>
  )
}

export default page
