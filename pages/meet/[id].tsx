import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import MainLogo from '../assets/MainLogo';

const MeetWithIDPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { id } = router.query;
  function startConference() {
    try {
      const domain = 'jitsi-editreadmedapatbaju.cs.ui.ac.id/';
      const options = {
        roomName: `${id}`,
        height: '100%',
        parentNode: document.getElementById('jitsi-container'),
        interfaceConfigOverwrite: {
          filmStripOnly: false,
          SHOW_JITSI_WATERMARK: false,
        },
        configOverwrite: {
          disableSimulcast: false,
        },
        userInfo: {
          email: 'jonathan.filbert81@ui.ac.id',
          displayName: 'Jonathan Filbert',
        },
      };

      const api = new JitsiMeetExternalAPI(domain, options);
      api.addEventListener('videoConferenceJoined', () => {
        console.log('Local User Joined');
        setLoading(false);
        api.executeCommand('displayName', 'Jonathan Filbert');
      });
    } catch (error) {
      console.error('Failed to load Jitsi API', error);
    }
  }

  useEffect(() => {
    // verify the JitsiMeetExternalAPI constructor is added to the global..
    if (window.JitsiMeetExternalAPI) startConference();
    else alert('Jitsi Meet API script not loaded');
  }, []);

  return (
    <>
      <Head>
        <script src="https://meet.jit.si/external_api.js"></script>
      </Head>
      <div className=" w-screen h-screen">
        <div id="jitsi-container" className="w-full h-full"></div>
      </div>
    </>
  );
};

export default MeetWithIDPage;
