import React from 'react'
import IntroSection from '@/components/Classes/IntroSection'
import Wedding from '@/components/Classes/Wedding'
import Post from '@/components/Classes/Post'
import Athlete from '@/components/Classes/Athlete'
import Wellness from '@/components/Classes/Wellness'
function page() {
  return (
    <div>
      <IntroSection />
      <Wedding />
      <Post />
      <Athlete  />
      <Wellness />
    </div>
  )
}

export default page
