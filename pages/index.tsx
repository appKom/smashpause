import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './Login'
import {ChakraProvider} from "@chakra-ui/react"
import Homepage from './components/Homepage'


const Home: NextPage = () => {
  return (
    <div>
      <Login />
      <Homepage/>
    </div>
  )
}

export default Home
