import { useEffect } from "react";
import './Hero.css'
import play from '../../assets/images/play.png'
import pause from '../../assets/images/pause.png'
import arrow from '../../assets/images/arrow.png'
import Background from '../Background/Background'
const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div>
      <div className="hero">
        <div className="hero-container">
          <div className="column">
            <div className="hero-text">
              <p className="hero-text1">{heroData.text1}</p>
              <p className="hero-text2">{heroData.text2}</p>
              <p className="hero-text3">{heroData.text3}</p>
            </div>

            <div className="hero-explore">
              <p>Explore the features</p>
              <img src={arrow} alt='/' />
            </div>

            <div className="hero-dot-play">
              <ul className='hero-dots'>
                <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
              </ul>
              {/* <div className="hero-play">
              <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause:play} alt='' />
              <p>See the video</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Hero

