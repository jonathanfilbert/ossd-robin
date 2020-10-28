import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import GradientAsset from '../assets/GradientAsset';
import Button from '../../components/Button';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import jwt_decode from 'jwt-decode';
import { DJANGO_SSO_LOGOUT_URL } from '../../utils/api';
import MeetingHistory from './components/MeetingHistory';
import EmptyMeetingHistory from './assets/EmptyMeetingHistory';

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
  const [meetingHistory, setMeetingHistory] = useState([]);
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

  const receiveLogoutData = (event) => {
    const origin = event.origin || event.originalEvent.origin;
    if (event.data === 'ok') {
      // logout
      sessionStorage.removeItem('uimeet-token');
      window.removeEventListener('message', () => null);
      router.push('/');
    }
    if (
      DJANGO_SSO_LOGOUT_URL.startsWith(origin) &&
      event.data.startsWith('ey')
    ) {
      sessionStorage.removeItem('uimeet-token');
      window.removeEventListener('message', () => null);
      router.push('/');
    }
  };

  const handleLogout = () => {
    const logoutWindow = window.open(DJANGO_SSO_LOGOUT_URL, '_blank');

    const getUserDataInterval = setInterval(() => {
      if (logoutWindow.closed) {
        clearInterval(getUserDataInterval);
      }
      logoutWindow.postMessage('JOFIL', DJANGO_SSO_LOGOUT_URL);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('message', receiveLogoutData, false);
    if (sessionStorage.getItem('uimeet-token') === null) {
      router.push('/');
      return;
    }
    if (sessionStorage.getItem('uimeet-history') !== null) {
      setMeetingHistory(JSON.parse(sessionStorage.getItem('uimeet-history')));
    } else {
      sessionStorage.setItem('uimeet-history', JSON.stringify([]));
    }
    const token = sessionStorage.getItem('uimeet-token');
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
        {/* meeting history section */}
        <div className="w-100 min-h-screen m-auto mt-10">
          <div className="main__bold text-2xl text-center mb-4">
            My Meeting History
          </div>
          {meetingHistory.length > 0 ? (
            <MeetingHistory meetings={meetingHistory} />
          ) : (
            <div className="text-center mt-24">
              <div className="w-24 m-auto">
                <EmptyMeetingHistory />
              </div>
              <div
                className="font-normal mt-3 main__text"
                style={{ color: '#DCE0E5' }}
              >
                Start a meeting and it will appear here.
              </div>
            </div>
          )}
        </div>
      </Layout>
    </Wrapper>
  );
};

export default Index;
