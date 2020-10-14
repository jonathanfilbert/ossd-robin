import React from "react";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Robin | Interactive Jitsi Client</title>
      </Head>
      <div className="main__bold w-screen h-screen bg-black flex flex-col justify-center items-center font-bold uppercase text-white text-2xl">
        <div>This is Robin</div>
        <div className="main__text text-sm">Blah blah blah</div>
      </div>
    </>
  );
};

export default Index;
