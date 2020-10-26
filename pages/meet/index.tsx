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
  const [jwt, setJWT] = useState('');
  const [isMeetingLeft, setIsMeetingLeft] = useState(false);
  const { meetId } = router.query;

  // add the current meeting to the meeting list

  useEffect(() => {
    if (sessionStorage.getItem('uimeet-token') === null) {
      if (window.location.href.includes('meetId=')) {
        const roomRedirect = window.location.href.split('meetId=').pop();
        router.push(`/?redirect=${roomRedirect}`);
      } else {
        router.push('/');
      }
      return;
    }
    const token = sessionStorage.getItem('uimeet-token');

    const decoded = jwt_decode(token);
    setUserName(decoded.cas.name);
    setJWT(token);
  }, []);

  const handleApi = (JitsiMeetAPI) => {
    JitsiMeetAPI.addEventListener('videoConferenceLeft', () => {
      setIsMeetingLeft(true);
      setTimeout(() => {
        router.push('/');
      }, 3000);
    });
  };

  useEffect(() => {
    const meetingHistory: string[] = JSON.parse(
      window.sessionStorage.getItem('uimeet-history'),
    );
    if (meetingHistory !== null) {
      if (meetingHistory === undefined) {
        sessionStorage.setItem('uimeet-history', JSON.stringify([`${meetId}`]));
      } else {
        meetingHistory.push(`${meetId ? meetId : 'Your First Meeting'}`);
        sessionStorage.setItem(
          'uimeet-history',
          JSON.stringify(meetingHistory),
        );
      }
    }
  }, [meetId]);

  return (
    <>
      <Head>
        {/* <script src="https://jitsi-editreadmedapatbaju.cs.ui.ac.id/jitsi/external_api.js"></script> */}
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
              jwt={jwt}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MeetWithIDPage;
