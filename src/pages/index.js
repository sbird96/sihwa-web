import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Notice from '@/components/Notice'
import PageTop from '@/components/PageTop'
import PageBottom from '@/components/PageBottom'
import MainPageBlog from '@/components/MainPageBlog'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>시화당(詩畵堂) </title>
        <meta charSet="utf-8" />
        <meta name="description" content="Generated by SmallBird create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Notice />
      <PageTop />
      <MainPageBlog />
      <PageBottom />
    </>
  )
}
