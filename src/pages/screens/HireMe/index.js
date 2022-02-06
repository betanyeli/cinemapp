import React from 'react'
import Navbar from '@/components/navbar'
import BannerHero from '@/components/bannerHero'

export default function AboutUsScreen() {
    return (
        <div>
            <Navbar />
            <BannerHero title={'Hire Me'} source={'https://i.ibb.co/hHsd0n3/banner-1.png'} />
        </div>
    )
}
