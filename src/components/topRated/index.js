import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Div } from './styles'
import { useSelector } from 'react-redux'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import MultiActionAreaCard from './card'

const TopRated = ({ className, ...rest }) => {
    const { movies } = useSelector(state => state.movies)

    const filteredData = () => {
        const MAX = 8
        const topRated = movies.filter(movie => movie?.rating >= 3)
        const finalTopRated = topRated.splice(0, MAX)
        return topRated.length === MAX ? topRated : finalTopRated
    }


    const Card = filteredData().map(card => {
        return <MultiActionAreaCard key={card} title={card.title} rating={card.rating} />
    })

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    const Gallery = () => {
        return (<AliceCarousel mouseTracking items={Card} responsive={responsive}
        />
        );
    }

    return (
        <Div className={className} data-aos='fade-up' {...rest}>
            <Grid container justifyContent='center'>
                <Typography m={4} variant={'h2'}>Top 8</Typography>
            </Grid>
            <Grid container justifyContent='center'>
                <Typography mb={6} variant={'body1'}>Top rates movies
                </Typography>
            </Grid>
            <Grid container spacing={4}>
                <Gallery />
            </Grid>
        </Div>

    )
}

export default TopRated;
