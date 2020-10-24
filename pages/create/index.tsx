import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import GradientAsset from '../assets/GradientAsset';
import Button from '../../components/Button';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { DJANGO_SSO_LOGOUT_URL } from '../../utils/api';

const Wrapper = styled.div`
  background-color: #f9fbfe;

  @keyframes breathe {
    from {
      opacity: 1;
      transform: rotate(0deg);
    }
    to {
      opacity: 0;
      transform: rotate(360deg);
    }
  }

  .spin-slowly {
    animation: breathe 3s ease-in-out infinite;
    animation-direction: alternate;
  }
`;

const Index = () => {
  const [roomName, setRoomName] = useState('');
  const [userName, setUserName] = useState('');
  const router = useRouter();
  const handleCreateMeeting = () => {
    if (roomName.split(' ').length > 1) {
      const formattedRoomName = roomName.split(' ').join('-');
      router.push({
        pathname: '/meet',
        query: {
          meetId: formattedRoomName,
        },
      });
    } else {
      router.push({
        pathname: '/meet',
        query: {
          meetId: roomName,
        },
      });
    }
  };

  const receiveLoginData = (event) => {
    const origin = event.origin || event.originalEvent.origin;
    const user = event.data;

    if (DJANGO_SSO_LOGOUT_URL.startsWith(origin)) {
      // login success, save data to local storage
      localStorage.removeItem('uimeet-token');
      router.push('/');
      return;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('uimeet-token');
    const loginWindow = window.open(
      DJANGO_SSO_LOGOUT_URL,
      '_blank',
      'width=800,height=800',
    );

    const getUserDataInterval = setInterval(() => {
      if (loginWindow.closed) {
        clearInterval(getUserDataInterval);
      }
      loginWindow.postMessage('JOFIL', DJANGO_SSO_LOGOUT_URL);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('message', receiveLoginData, false);
    if (localStorage.getItem('uimeet-token') === null) {
      router.push('/');
      return;
    }
    const token = localStorage.getItem('uimeet-token');
    const decoded = jwt_decode(token);
    setUserName(decoded.cas.name);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>uimeet | Create Meeting</title>
      </Head>
      <Layout>
        <div className="w-100 flex flex-row items-center justify-center h-64 md:h-auto">
          <GradientAsset className="max-h-full w-auto spin-slowly" />
        </div>
        <div className="w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 ">
          Hello, {userName}.
        </div>
        <div className="w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 my-2 ">
          <input
            className="appearance-none rounded w-full md:w-1/2 py-2 px-3 text-muted leading-tight text-lg focus:shadow-md focus:outline-none"
            type="text"
            placeholder="Meeting Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </div>
        <div className="w-100 flex flex-row justify-center mt-4">
          <Button onClick={() => handleCreateMeeting()}>CREATE MEETING</Button>
        </div>
        <div
          className="self-center mx-3 mt-2 main__text text-muted cursor-pointer"
          onClick={() => handleLogout()}
        >
          LOG OUT
        </div>
      </Layout>
    </Wrapper>
  );
};

export default Index;
