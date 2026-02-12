import React from 'react'
import GlobalTransformation from './GlobalTransformation';
// import Trust from './Trust';
import DigitalSolutionsSection from './DigitalSolutionsSection';
import DigitalTransformationROI from './DigitalTransformationROI';
import RapidTechSolutions from './RapidTechSolutions';
import Techstack from './Techstack';
import MediaCoverage from './MediaCoverage';
import LifeAtCompanySection from './LifeAtCompanySection';
import IndustriesSection from './IndustriesSection';
import AwardsSection from './AwardsSection';
import Why from './Why';
import CaseStudies from './CaseStudies';
import Podcast from './Podcast';
import Business from './Business';
import Excellence from './Exellence';
import Recognize from './Recognize';
import Faqs from './Faqs';
import Footer from '../Footer';
import HeroSection from './Herosection';

export default function HomePage() {
  return (
    <div id='homepage'>
       <HeroSection/>
         <GlobalTransformation/>
  {/* <Trust/> */}
  <DigitalSolutionsSection/>
  <DigitalTransformationROI/>
  <RapidTechSolutions/>
  <Techstack/>
  <MediaCoverage/>
  <LifeAtCompanySection/>
  <IndustriesSection/>
  <AwardsSection/>
  <Why/>
  <CaseStudies/>
  <Podcast/>
  <Business/>
  <Excellence/>
  <Recognize/>
  <Faqs/>
  <Footer/>
    </div>
  )
}
