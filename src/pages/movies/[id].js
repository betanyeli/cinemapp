import React from 'react'
import { useRouter } from 'next/router'
import { replaceUrlInArray } from 'src/utils'
import { data } from '@/services/data'
import { moviesUrls } from '@/services/moviesUrl'

export default function movies() {
    const router = useRouter()
    return (
        <div>
            <h2>MOVIE {router.query.id}</h2>
        </div>
    )
}