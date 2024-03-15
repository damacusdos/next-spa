import Head from "next/head";
import Image from "next/image";
// components
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next SPA</title>
      </Head>
      <h1 className="text-blue-800">Welcome to Next SPA</h1>
      <Button>Start!</Button>
    </>
  );
}
