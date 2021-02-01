import Head from 'next/head'
import FeaturesGallery from '../components/FeaturesAbout'
import FeaturesAnimation from '../components/FeaturesAnimation'
import Header from '../components/Header'
import Timeline from '../components/TimeLine'
import Masonry from '../components/Masonry'
import HeroHome from '../components/Hero'


export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>Mos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
    <HeroHome/>

    <Timeline/>

    </div>
  )
}
