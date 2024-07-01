import React from 'react'
import './Solutions.css'
import solution1 from '../../assets/images/spkb_icon.png'
import solution2 from '../../assets/images/data-integration.jpg'
import solution3 from '../../assets/images/cloud.jpg'

const Solutions = () => {
    return (
        <div className="container">
            <div className='solutions'>
                <div className="solution">
                    <img src={solution1} alt='' />
                    <p>Sistem Penguatkuasaan Bersepadu (SPKB)</p>
                </div>
                <div className="solution">
                    <img src={solution2} alt='' />
                    <p>Data Integration</p>
                </div>
                <div className="solution">
                    <img src={solution3} alt='' />
                    <p>Cloud Services</p>
                </div>
            </div>
        </div>
    )
}

export default Solutions
