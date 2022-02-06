import React from 'react'
import { useSelector } from 'react-redux'
import AboutUsScreen from './screens/AboutUs'

export default function AboutUs() {
  const { movies } = useSelector(state => state.movies)
  console.log('movies', movies)
  return (
    <div>
      <AboutUsScreen />
    </div>
  )
}
