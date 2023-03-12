import React, { useEffect } from 'react'
import './Popular.css'
import Button from './Button'
import AOS from "aos";


import Solution from '../assets/images/idea.png'
import Settings from '../assets/images/settings.png'
import Cyper from '../assets/images/cyber-security.png'
import Internet from '../assets/images/internet-of-things.png'

const Popular = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='popular-container'>
            <div className="popular-left" data-aos="fade-right" data-aos-duration="1000">
                <span className='orange-span'>our popular services</span>
                <h2 className='popular-header home-h2'>BEST PROFESSIONAL IT SOLUTIUONS</h2>
                <p className='popular-p home-p'>Sed perspiciatis unde omniste natus voluptate accusantiuy doloremque laudantium totam aperm eaque quae ainvtore veritatis architecto</p>
                <Button buttonDeyeri="Explore more services" button_path={"./it-services"}/>
            </div>
            <div className="popular-right">
                <div className='p-right-top'>
                    <div className='p-section'>
                        <div className="p-section-logo">
                            <img src={Solution} alt="" />
                        </div>
                        <div className="p-section-text">
                            <a href="">Infrastructure</a>
                            <p className='home-p'>But I must explain to you how all this mistaken ideofe denouncing pleasure</p>
                        </div>
                    </div>

                    <div className='p-section'>
                        <div className="p-section-logo">
                            <img src={Settings} alt="" />
                        </div>
                        <div className="p-section-text">
                            <a href="">IT Engineering</a>
                            <p className='home-p'>But I must explain to you how all this mistaken ideofe denouncing pleasure</p>
                        </div>
                    </div>
                </div>

                <div className='p-right-bottom'>
                    <div className='p-section'>
                        <div className="p-section-logo">
                            <img src={Cyper} alt="" />
                        </div>
                        <div className="p-section-text">
                            <a href="">Cyper Security</a>
                            <p className='home-p'>But I must explain to you how all this mistaken ideofe denouncing pleasure</p>
                        </div>
                    </div>

                    <div className='p-section'>
                        <div className="p-section-logo">
                            <img src={Internet} alt="" />
                        </div>
                        <div className="p-section-text">
                            <a href="">Apps Development</a>
                            <p className='home-p'>But I must explain to you how all this mistaken ideofe denouncing pleasure</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular