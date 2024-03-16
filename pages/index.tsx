import Head from 'next/head';
import Image from 'next/image';
// components
import { Login } from '@/components/features';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next SPA</title>
      </Head>
      <div className="h-[100vh] bg-[#FFFCF0] flex justify-center items-center">
        <Login />
      </div>
    </>
  );
}
