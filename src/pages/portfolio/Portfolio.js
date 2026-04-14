import React from 'react'
import PortfolioHero from './PortfolioHero'
import PortfolioCards from './Portfoliocards'
import PortfolioTrust from './PortfolioTrust'
import Footer from '../Footer'
import PortfolioCarousel from './PortfolioCarousel'
import PortfolioSlider from './PortfolioSlider'

export default function Portfolio() {
  return (
    <div>
        <PortfolioHero/>
        <PortfolioCards/>
        <PortfolioTrust/>
        <PortfolioCarousel/>
        <PortfolioSlider/>
        <Footer/>
    </div>
  )
}
