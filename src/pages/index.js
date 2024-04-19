import Divider from '@/components/DIvider';
import Mascot from '@/components/Mascot';
import Features from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';
import HeaderLanding from '@/components/landing/HeaderLanding';
import HeroSection from '@/components/landing/HeroSection';
import TimeLine from '@/components/landing/TimeLine';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <div className='bg-gray-100'>
        <Head>
          <meta name='description' content='Tryout CPNS 2024 Gratis' />
          <link rel='icon' href='/icon.ico' />
          <title>Jago CPNS</title>
        </Head>
        <div className='fixed top-0 left-0 right-0 z-10'>
          <HeaderLanding />
        </div>
        <HeroSection />
        <Divider data={'Mengapa?'} />
        <Features />
        <Divider data={'Kapan?'} />
        <TimeLine />
        <div className='fixed bottom-5 right-5 z-10'>
          <Mascot />
        </div>
        <Footer />
      </div>
    </>
  );
}
