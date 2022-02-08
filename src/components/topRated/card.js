import React, { useState } from 'react';
import { CardActionArea, CardActions, Typography, CardMedia, CardContent, Card, Button } from '@mui/material';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';
import Modal from '@/components/modal'

export default function MultiActionAreaCard({ title, year, rating, url }) {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const width = isMobile ? '200' : '300'
    const height = isMobile ? '300' : '300'
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState([])


    return (
        <Card style={{ textAlign: 'center', margin: '10px', padding: 10 }} >
            <CardActionArea>
                <CardMedia
                    component='img'
                    height={height}
                    width={width}
                    image={`https://picsum.photos/id/${getRandomInt(1, 50)}/${width}/${height}`}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant='h6' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {rating}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                <Link href={`/movies/${title}&${year || 'not-found'}`} > Watch movie </Link>
                <Button onClick={setShowModal}>Share movie</Button>

            </CardActions>
            {showModal && <Modal open={showModal} setOpen={setShowModal} quote={title} url={url} />}
        </Card>
    );
}
