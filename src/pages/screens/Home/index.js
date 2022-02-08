import React from 'react'
import Navbar from '@/components/navbar'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import BannerHero from '@/components/bannerHero'
import Filters from '@/components/filters'
import Footer from '@/components/footer'

const ComponentWithNoSSR = dynamic(() => import('@/components/topRated'), {
    ssr: false
})

const HomeScreen = ({ movies }) => {
    return (
        <div>
            <Navbar />
            <BannerHero source={'https://i.ibb.co/Yd1nGhL/Naranja-Amarillo-Profesional-Gradiente-Aplicacio-n-Fitness-Mascotas-Banner-Horizontal.png'} />
            <Filters movies={movies} />
            <ComponentWithNoSSR movies={movies} />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    const { movies } = state
    return {
        movies: movies,
    }
}
export default connect(mapStateToProps)(HomeScreen);