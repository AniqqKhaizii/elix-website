import React from 'react'
import './Spkb.css'
import mockup from '../../assets/images/mockup.png'
const Spkb = () => {
    return (
        <div className="spkb">
            <div className="spkb-container">
                <div>
                    <div className="company-name">ELIX SOLUTION SDN. BHD.</div>
                    <div className="spkb-name">Sistem Penguatkuasaan Bersepadu (SPKB)</div>
                    <div className="spkb-explanation">This innovatively design local authority enforcement system is capable of handling multiple types of offences covering vehicle parking & non-vehicle; such as licensing, illegal extension, illegal dumping and etc. These again are further classified based on the enforcement acts (Akta-133, Akta-171 & Akta-333) according to the state. </div>
                </div>
                <div className="spkb-mockup">
                    <img src={mockup} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Spkb