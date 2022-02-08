import Head from 'next/head'
import React, { useEffect } from 'react'
import { fetchMovies } from '@/redux/services'
import { wrapper } from '@/redux/store'
import HomeScreen from './screens/Home'
import { useDispatch } from 'react-redux'




export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])
  return (
    <div>
      <Head>
        <title>Cinemapp</title>
        <meta name="description" content="Cinemapp" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=optional" rel="stylesheet" />
      </Head>

      <HomeScreen />
    </div>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  await store.dispatch(fetchMovies(req))
})