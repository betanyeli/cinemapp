import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'next-share';

const shareComponent = ({ url, quote, hashtag }) => {
    return <>
        <FacebookShareButton
            url={url}
            quote={quote}
            hashtag={hashtag}
        >
            <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
            url={url}
            title={quote}
        >
            <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton
            url={url}
            title={quote}
            separator=":: "
        >
            <WhatsappIcon size={32} round />
        </WhatsappShareButton>
    </>
}


export default shareComponent;