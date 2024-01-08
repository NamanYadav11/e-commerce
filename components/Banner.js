import { banner1, banner2, banner3, banner4, banner5 } from '@/asset'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
        >

        <div>
            <Image src={banner1} alt="1"/>
        </div>

        <div>
            <Image src={banner2} alt="2"/>
        </div>

        <div>
            <Image src={banner3} alt="3"/>
        </div>

        <div>
            <Image src={banner4} alt="4"/>
        </div>

        <div>
            <Image src={banner5} alt="5"/>
        </div>

        </Carousel>
    </div>
  )
}

export default Banner