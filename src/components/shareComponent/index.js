import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'next-share';
import { Grid } from '@mui/material'

const shareComponent = ({ url, quote, hashtag }) => {
    return <>
        <Grid container>
            <Grid item mr={2}>
                <FacebookShareButton
                    url={url || 'https://www.google.com'}
                    quote={quote || 'not found'}
                    hashtag={hashtag}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </Grid>

            <Grid item mr={2}>
                <TwitterShareButton
                    url={url || 'https://www.google.com'}
                    title={quote || 'not found'}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </Grid>
            <Grid item mr={2}>
                <WhatsappShareButton
                    url={url || 'https://www.google.com'}
                    title={quote || 'not found'}
                    separator=":: "
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </Grid>
        </Grid>
    </>
}


export default shareComponent;