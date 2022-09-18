import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Navbar, Header} from '../components'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  )
}
