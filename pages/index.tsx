import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homepage from './components/Homepage'

const Home: NextPage = () => {
  return (
    <div>
      <Homepage/>
    </div>
  )
}

export default Home
