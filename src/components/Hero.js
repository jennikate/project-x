import React from 'react'
import LazyHero from 'react-lazy-hero'

const Hero = () => {
  return (
    <div className='hero-container'>
      <LazyHero imageSrc='/project-x/80664c9b977737eff60b64e6364f1198.jpg' color='#15002A' isCentered={false} parallaxOffset={50}>
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

// can't work out why the image here wasn't being created properly, I think it's something to do with styled components. For now just calling the image directly that is successfully created out of my scss file