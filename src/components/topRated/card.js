import * as React from 'react';
import { Button, CardActionArea, CardActions, Typography, CardMedia, CardContent, Card } from '@mui/material';

export default function MultiActionAreaCard({ title, year, rating }) {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    return (
        <Card style={{ textAlign: 'center', margin: '10px' }} >
            <CardActionArea>
                <CardMedia
                    component='img'
                    height='300'
                    width='200'
                    image={`https://picsum.photos/id/${getRandomInt(1, 50)}/200/300`}
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
