import React from 'react'
import Navbar from '@/components/navbar'
import BannerHero from '@/components/bannerHero'

export default function AboutUsScreen() {
    return (
        <div>
            <Navbar />
            <BannerHero title={'About us'} source={'https://i.ibb.co/2SDNsK3/banner.png'} />
        </div>
    )
}
