import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Jitsi from 'react-jitsi';
import isEmpty from 'lodash/isEmpty';
import Loading from '../../components/Loading';

const MeetWithIDPage = () => {
  const router = useRouter();
  const { meetId } = router.query;
  return (
    <>
      <Head>
        <script src="https://meet.jit.si/external_api.js"></script>
        <title>uimeet | {meetId} Meeting</title>
      </Head>
      <div className=" w-screen h-screen">
        <div id="jitsi-container" className="w-full h-full">
          <Jitsi
            roomName={`${meetId}`}
            displayName="Jonathan Filbert"
            loadingComponent={Loading}
            domain="jitsi-editreadmedapatbaju.cs.ui.ac.id/jitsi"
            containerStyle={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  if (isEmpty(context.query.meetId)) {
    window.location.replace('/create');
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default MeetWithIDPage;
