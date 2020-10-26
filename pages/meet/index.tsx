import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Jitsi from 'react-jitsi';
import Loading from '../../components/Loading';
import jwt_decode from 'jwt-decode';
import LeftMeeting from './LeftMeeting';

const MeetWithIDPage = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  // const [jwt, setJWT] = useState('');
  const [isMeetingLeft, setIsMeetingLeft] = useState(false);
  const { meetId } = router.query;
  useEffect(() => {
    if (localStorage.getItem('uimeet-token') === null) {
      router.push('/');
      return;
    }
    const token = localStorage.getItem('uimeet-token');
    const decoded = jwt_decode(token);
    setUserName(decoded.cas.name);
    // setJWT(token);
  }, []);

  const handleApi = (JitsiMeetAPI) => {
    JitsiMeetAPI.addEventListener('videoConferenceLeft', () => {
      setIsMeetingLeft(true);
      setTimeout(() => {
        router.push('/');
      }, 3000);
    });
  };

  return (
    <>
      <Head>
        <script src="https://jitsi-editreadmedapatbaju.cs.ui.ac.id/jitsi/external_api.js"></script>
        <title>uimeet | {meetId} Meeting</title>
      </Head>
      <div className=" w-screen h-screen">
        <div id="jitsi-container" className="w-full h-full">
          {isMeetingLeft ? (
            <LeftMeeting />
          ) : userName === '' ? (
            'loading...'
          ) : (
            <Jitsi
              roomName={`${meetId}`}
              displayName={userName}
              loadingComponent={Loading}
              domain="jitsi-editreadmedapatbaju.cs.ui.ac.id/jitsi"
              containerStyle={{ width: '100%', height: '100%' }}
              onAPILoad={handleApi}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MeetWithIDPage;
