import React from 'react'
import { FadeInDiv } from '../../components/animations/FadeInDiv'
import { VideoHero } from './video-hero'
import { SingleLineBanner } from './single-line-banner'


const Home = () => {
  return (
    <FadeInDiv>
      <div className="d-flex w-100 justify-content-center bg-black">
        <SingleLineBanner />
      </div>
      <VideoHero />
    </FadeInDiv>
  )
}

export default Home
