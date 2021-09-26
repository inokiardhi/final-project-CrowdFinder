import React from "react"
import { Container } from "react-bootstrap"
import hero from '../../image/hero.jpeg'
import './index.scss'

function Hero() {
    return (

        <div className='hero d-flex justify-content-center'>
            <div className="image-hero" style={{ backgroundImage: `url(${hero})` }}>
            </div>
        </div>

    )
}


export default Hero
