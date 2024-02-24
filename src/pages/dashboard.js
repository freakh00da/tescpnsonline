import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Head from 'next/head';

export default function Dashboard() {
  return (
    <>
      <Head>
        <meta name='description' content='Tryout CPNS 2024 Gratis' />
        <link rel='icon' href='/icon.ico' />
        <title>Dashboard</title>
      </Head>
      <Sidebar />
      <Header />
    </>
  );
}
