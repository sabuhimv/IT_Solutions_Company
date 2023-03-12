import './App.css';

import { useState, useEffect } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

//MARSRUT SISTEMINDEKI KOMPONENTLER
import Home from '../src/pages/Home'

//KOMPONNETLER
import About from './components/About';
import Navbar from './components/Navbar';
import Specializes from './components/Specializes';
import Solutions from './components/Solutions';
import CaseStudies from './components/CaseStudies';
import Partners from './components/Partners';
import Popular from './components/Popular';
import Team from './components/Team';
import Counter from './components/Counter';
import Pricing from './components/Pricing';
import News from './components/News';
import Footer from './components/Footer';
import SRewards from './components/SRewards';
import Meet from './components/Meet';
import AOS from 'aos'
import Introsection from './components/Introsection';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFoundPage from './pages/NotFoundPage';
import ItAgency from './pages/ItAgency';
import ItCompany from './pages/ItCompany';


import BlueNavbar from './components/BlueNavbar';
import PricingPlan from './pages/PricingPlan';
import ProductDesign from './components/ProductDesign';
import ProductDetails from './pages/ProductDetails';
import PortfolioGridView from './pages/PortfolioGridView';
import ITServices from './pages/ITServices';
import CyberSecurity from './pages/CyberSecurity';
import HelpDesk from './pages/HelpDesk';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import HomeDevelopment from './pages/HomeDevelopment';
import Contact from './pages/Contact';

// BLOG
import BlogStandard from './pages/BlogStandard';
import BlogDetails from './pages/BlogDetails';
import Loader from './components/Loader';


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  return (
    <div>
      <a></a>
      {
        loading ?
          <div className='loading-effect'>
            <ClimbingBoxLoader
              color={'#FD4A18'}
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div> :


          <BrowserRouter>
            {/* <BlueNavbar/> */}
            <Navbar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/it-agency' element={<ItAgency />} />
              <Route path='/it-company' element={<ItCompany />} />
              <Route path='/help-desk' element={<HelpDesk />} />
              <Route path='/home-development' element={<HomeDevelopment />} />


              <Route path='/contact' element={<Contact />} />

              <Route path='/about' element={<AboutUs />} />
              <Route path='/career' element={<Career />} />


              <Route path='/blog-standard' element={<BlogStandard />} />
              <Route path='/blog-details' element={<BlogDetails />} />

              <Route path='/pricing' element={<PricingPlan />} />
              <Route path='/product-details' element={<ProductDetails />} />
              <Route path='/portfolio-grid-view' element={<PortfolioGridView />} />
              <Route path='/it-services' element={<ITServices />} />
              <Route path='/cyber-security' element={<CyberSecurity />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <SRewards />
            <Footer />
          </BrowserRouter>
      }




      {/* <Introsection/> */}
      {/* <Specializes/> */}
      {/* <About/> */}
      {/* <Solutions/> */}
      {/* <Meet/> */}
      {/* <CaseStudies/> */}
      {/* <Partners/> */}
      {/* <Popular/> */}
      {/* <Team/> */}
      {/* <Counter/> */}
      {/* <Pricing/> */}
      {/* <News/> */}
      {/* <SRewards/> */}
    </div>
  );
}

export default App;
