import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    const routes = [{
        title: 'Home',
        path: '/'
    },
    {
        title: 'About us',
        path: '/about-us'
    }]
    return (
        <nav>
            <ul>
                {routes.map((route, index) => <li key={route.title}><Link href={route.path}>{route.title}</Link></li>)}
            </ul>

        </nav>
    )
}