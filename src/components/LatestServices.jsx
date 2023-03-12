import React from 'react'
import './LatestServices.css'

import Solution from '../assets/images/idea.png'
import Settings from '../assets/images/settings.png'
import Cyper from '../assets/images/cyber-security.png'
import Internet from '../assets/images/internet-of-things.png'
import Solution1 from '../assets/images/solution1.png'
import Blockchain from '../assets/images/blockchain.png'
import LatestComponent from './LatestComponent'

const LatestServices = () => {
    return (
        <div className='latest-services-container'>
            <div className="latest-services-head">
                <span className='orange-span'>
                    LATEST SERVICES
                </span>
                <h2 className='home-h2'>
                    We Provide Awesome Professional IT & Technology Solutiuons
                </h2>
            </div>
            <div className="latest-services-body">
                <div className='latest-body-top'>
                    <LatestComponent latest_img={Solution} latest_title="Infrastructure" />
                    <LatestComponent latest_img={Settings} latest_title="IT Engineering" />
                    <LatestComponent latest_img={Cyper} latest_title="Cyber Security" />
                </div>

                <div className='latest-body-bottom'>
                    <LatestComponent latest_img={Internet} latest_title="Apps Development" />
                    <LatestComponent latest_img={Solution1} latest_title="Cyber Security" />
                    <LatestComponent latest_img={Blockchain} latest_title="Cyber Security" />
                </div>
            </div>
        </div>
    )
}

export default LatestServices