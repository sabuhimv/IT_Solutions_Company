import React from 'react'
import BlackButton from './BlackButton'
import './CyberMain.css'

const CyberMain = () => {
    return (
        <div className='cyber-main-container'>
            <div className='cyber-main-text'>
                <span className='orange-bg-span'>Why We Offer</span>
                <h2 className='capitalize-h2 text-underline'>Cyber Security Information Manager Certified</h2>
                <p className='gray-p'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboenim ipsam voluptatem quia voluptasy sit aspernatur aused quia consequuntur magne</p>
                <BlackButton BlackButtonValue={"Get started us"} />
            </div>

            <div className="cyber-main-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nfP5N9Yc72A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        </div>
    )
}

export default CyberMain