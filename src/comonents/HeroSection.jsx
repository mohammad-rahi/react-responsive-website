import React from 'react'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero_wrapper'>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero_btns">
                <Button
                    className='btn'
                    buttonStyle={'btn_outline'}
                    buttonSize={'btn_large'}
                >
                    GET STARTED
                </Button>
                <Button
                    className='btn'
                    buttonStyle={'btn_primary'}
                    buttonSize={'btn_large'}
                >
                    WATCH TRAILER <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection