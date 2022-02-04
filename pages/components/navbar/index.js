import React from 'react'

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
              {routes.map((route, index) => <li key={route.title}><a href={route.path}>{route.title}</a></li>)}
          </ul>

      </nav>
    )
  }