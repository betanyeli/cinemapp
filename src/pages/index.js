import Head from 'next/head'
import React from 'react'
import { fetchMovies } from '@/redux/actions/moviesAction'
import { wrapper } from '@/redux/store'
import HomeScreen from './screens/Home'



export default function Home() {

  return (
    <div>
      <Head>
        <title>Cinemapp</title>
        <meta name="description" content="Cinemapp" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Roboto&family=Short+Stack&display=optional" rel="stylesheet" />
      </Head>

      <HomeScreen />
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  await store.dispatch(fetchMovies(req))
})