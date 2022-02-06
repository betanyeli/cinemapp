import * as React from 'react';
import { Button, CardActionArea, CardActions, Typography, CardMedia, CardContent, Card } from '@mui/material';
import useMediaQuery from 'src/hooks/useMediaQuery';
export default function MultiActionAreaCard({ title, year, rating }) {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const width = isMobile ? '250' : '300'
    const height = isMobile ? '300' : '300'
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <Card style={{ textAlign: 'center', margin: '10px' }} >
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
                <Button size='small' color='primary'>
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}
