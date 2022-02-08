import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Div } from './styles'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import MultiActionAreaCard from './card'
import { useRouter as NextUseRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'


const TopRated = ({ movies }) => {

    const filteredData = () => {
        const MAX = 8
        const topRated = movies?.filter(movie => movie?.rating >= 3)
        const finalTopRated = topRated?.splice(0, MAX)
        return topRated?.length === MAX ? topRated : finalTopRated
    }

    const Card = filteredData()?.map(card => {
        return <MultiActionAreaCard key={card} title={card.title} rating={card.rating} year={card.year} url={`${origin}/movies/${card.title}&${card.year || 'not-found'}`} />
    })

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const Gallery = () => {
        return (<AliceCarousel
            paddingLeft={50}
            paddingRight={50}
            mouseTracking
            items={Card}
            responsive={responsive}
        />
        );
    }

    return (
        <Div data-aos='fade-up'>
            <Grid container justifyContent='center' mt={6}>
                <Typography m={4} variant={'h2'}>Top 8</Typography>
            </Grid>
            <Grid container justifyContent='center'>
                <Typography mb={6} variant={'body1'}>Top Rates movies
                </Typography>
            </Grid>
            <Grid container spacing={4}>
                <Gallery />
            </Grid>
        </Div>

    )
}


export async function getServerSideProps(context) {
    const { protocol, host } = absoluteUrl(req, 'localhost:10040')
    const origin = protocol + '//' + host
    return {
        props: { origin }, // will be passed to the page component as props
    }
}

export default TopRated