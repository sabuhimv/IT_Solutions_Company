import React from 'react'
import Introsection from '../components/Introsection'
import Specializes from '../components/Specializes';
import About from '../components/About';
import Solutions from '../components/Solutions';
import Meet from '../components/Meet';
import CaseStudies from '../components/CaseStudies';
import Partners from '../components/Partners';
import Popular from '../components/Popular';
import Team from '../components/Team';
import Counter from '../components/Counter';
import Pricing from '../components/Pricing';
import News from '../components/News';
import SRewards from '../components/SRewards';



const Home = () => {
  return (
    <>
    <Introsection/>
    <Specializes/>
    <About/>
    <Solutions/>
    <Meet/>
    <CaseStudies/>
    <Partners/>
    <Popular/>
    <Team/>
    <Counter/>
    <Pricing/>
    <News/>
    </>
  )
}

export default Home