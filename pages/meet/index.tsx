import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import GradientAsset from '../assets/GradientAsset';
import MainLogo from '../assets/MainLogo';
import Button from '../../components/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
  const router = useRouter();
  const handleCreateMeeting = () => {
    if (roomName.split(' ').length > 1) {
      const formattedRoomName = roomName.split(' ').join('-');
      router.push(`/meet/${formattedRoomName}`);
    } else {
      router.push(`/meet/${roomName}`);
    }
  };
  return (
    <Wrapper>
      <Head>
        <title>uimeet | Create Meeting</title>
      </Head>
      <div className="main__bold w-screen h-screen flex  flex-col">
        <div className="w-100 h-12 md:h-16 flex flex-row justify-center  pt-3">
          <Link href="/">
            <MainLogo className=" max-h-full w-auto" />
          </Link>
        </div>
        <div className="w-100 flex flex-row items-center justify-center h-64 md:h-auto">
          <GradientAsset className="max-h-full w-auto spin-slowly" />
        </div>
        <div className="w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 ">
          Hello, Jonathan.
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
