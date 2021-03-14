import Head from 'next/head';
import HeaderLousa from '../components/HeaderLousa';
import VideoContainer from '../components/VideoContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lousa Virtual</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="lousaWrapper">
        <HeaderLousa />
        <VideoContainer />
      </div>
      </>
  )
}
