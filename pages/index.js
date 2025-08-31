import Head from 'next/head'
import Landing from '../components/Landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>MarinePath Careers</title>
        <meta name="description" content="Start your Merchant Navy journey with MarinePath Careers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Landing />
    </>
  )
}
