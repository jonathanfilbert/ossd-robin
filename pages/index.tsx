import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import GradientAsset from './assets/GradientAsset';
import MainLogo from './assets/MainLogo';
import Button from '../components/Button';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  background-color: #f9fbfe;

  @keyframes spin {
    from {
      transform: rotate(0deg);
      opacity: 1;
    }
    to {
      transform: rotate(360deg);
      opacity: 0.2;
    }
  }

  .spin-slowly {
    animation: spin 10s linear infinite;
    animation-direction: alternate;
  }
`;

const Index = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/meet');
  };
  return (
    <Wrapper>
      <Head>
        <title>uimeet | Interactive Jitsi Client</title>
      </Head>
      <div className="main__bold w-screen h-screen flex  flex-col">
        <div className="w-100 h-12 md:h-16 flex flex-row justify-center  pt-3">
          <MainLogo className=" max-h-full w-auto" />
        </div>
        <div className="w-100 flex flex-row items-center justify-center h-64 md:h-auto">
          <GradientAsset className="max-h-full w-auto spin-slowly" />
        </div>
        <div className="w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 ">
          Meetings have never been easier.
        </div>
        <div className="w-100 flex flex-row justify-center mt-4">
          <Button onClick={() => handleLogin()}>SSO LOGIN</Button>
        </div>
        <div className="main__text text-muted w-100 text-center absolute bottom-0 left-0 right-0 pb-2 text-xs px-2">
          <div>
            Part of the Open Source Initiative of The Faculty of Computer
            Science
          </div>
          <div>University of Indonesia</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
