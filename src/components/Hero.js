import React from 'react'
import LazyHero from 'react-lazy-hero'

const Hero = () => {
  return (
    <div className='hero-container'>
      <LazyHero imageSrc='/project-x/github-pages/src/images/bg.jpg' color='#15002A' isCentered={false} parallaxOffset={50}>
        <h1 className="title">Cocktails</h1>
        <div className="hero-text">
          <p>It&apos;s time to find your new favourite drink</p>
          <p>Search by ingredient, select by category, ingredient, or glass, <br />
            or just click random and let us surprise you!</p>
        </div>
      </LazyHero>

    </div>
  )
}

export default Hero

