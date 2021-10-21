import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './components/Login'
import {ChakraProvider} from "@chakra-ui/react"

const Home: NextPage = () => {
  return (
    <div>
      <Login />
    </div>
  )
}

export default Home
