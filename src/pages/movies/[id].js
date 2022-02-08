import React from 'react'
import { useRouter as NextUseRouter } from 'next/router'


export default function movies() {
    const router = NextUseRouter()
    return (
        <div>
            <h2>MOVIE {router.query.id}</h2>
        </div>
    )
}