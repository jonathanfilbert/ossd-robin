import React, { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import GradientAsset from './assets/GradientAsset';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { DJANGO_SSO_LOGIN_URL } from '../utils/api';

const Wrapper = styled.div`
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
  const { redirect } = router.query;

  const handleLogin = () => {
    const loginWindow = window.open(DJANGO_SSO_LOGIN_URL, '_blank');

    const getUserDataInterval = setInterval(() => {
      if (loginWindow.closed) {
        clearInterval(getUserDataInterval);
      }
      loginWindow.postMessage('JOFIL', DJANGO_SSO_LOGIN_URL);
    }, 1000);
  };

  const receiveLoginData = (event) => {
    window.removeEventListener('message', () => null, false);
    const origin = event.origin || event.originalEvent.origin;
    const user = event.data;

    if (user.startsWith('ey') && user !== 'ok' && user.scope === undefined) {
      sessionStorage.setItem('uimeet-token', `${user}`);
      if (redirect !== undefined) {
        router.push(`/meet?meetId=${redirect}`);
      } else {
        router.push('/create');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('message', receiveLoginData, false);
    if (sessionStorage.getItem('uimeet-token') !== null) {
      if (redirect !== undefined) {
        router.push(`/meet?meetId=${redirect}`);
      } else {
        router.push('/create');
      }
    }
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>uimeet | Interactive Jitsi Client</title>
      </Head>
      <Layout>
        <div className="w-100 flex flex-row items-center justify-center h-64 md:h-auto">
          <GradientAsset className="max-h-full w-auto spin-slowly" />
        </div>
        <div className="w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 ">
          Meetings have never been easier.
        </div>
        <div className="w-100 flex flex-row justify-center mt-4">
          <Button onClick={() => handleLogin()}>SSO LOGIN</Button>
        </div>
      </Layout>
    </Wrapper>
  );
};

export default Index;
