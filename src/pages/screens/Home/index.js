import React from 'react'
import Navbar from '@/components/navbar'
import BannerHero from '@/components/bannerHero'
import dynamic from 'next/dynamic'

const ComponentWithNoSSR = dynamic(() => import('@/components/topRated'), {
    ssr: false
})

export default function HomeScreen() {
    return (
        <div>
            <Navbar />
            <BannerHero title={'CinemApp'} source={'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80'} />
            <ComponentWithNoSSR />
        </div>
    )
}
