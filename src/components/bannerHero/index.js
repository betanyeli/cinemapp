import React from 'react'

export default function BannerHero({ title, source }) {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src={source} style={{ width: '100%', height: '50%' }} alt="Banner hero" />
            <div style={{
                position: 'absolute', top: '50%',
                left: '15%',
                transform: 'translate(-50%, -50%)',
                paddingTop: 0,
                paddingBottom: 0,
                color: '#fff',
                fontSize: '2em',
                fontFamily: 'Short Stack'
            }}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}