import React from 'react'
import './Solutions.css'
import solution1 from '../../assets/images/spkb_icon.png'
import solution2 from '../../assets/images/data-integration.jpg'
import solution3 from '../../assets/images/cloud.jpg'
import Title from '../Title/Title'

const Solutions = () => {
    return (
        <div className='solutions'>
            <div className="row">
                <Title subTitle="Our Services" Title="What We Offer" />
            </div>
            <div className="row-solutions">
                <div className="solution">
                    <img src={solution1} alt='' />
                    <p className='solution-name'>SPKB</p>
                    <p>The primary objectives of SPKB are to streamline operations, improve efficiency, and ensure better compliance with laws and regulations.</p>
                </div>
                <div className="solution">
                    <img src={solution2} alt='' />
                    <p className='solution-name'>Data Integration</p>
                    <p>Data integration services involve combining data from different sources and providing users with a unified view of this data.</p>
                </div>
                <div className="solution">
                    <img src={solution3} alt='' />
                    <p className='solution-name'>Cloud Services</p>
                    <p>Cloud services refer to a wide range of services delivered on-demand to companies and customers over the internet</p>
                </div>
            </div>

        </div>

    )
}

export default Solutions
