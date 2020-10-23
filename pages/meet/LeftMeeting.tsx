import React from 'react';
import MainLogo from '../assets/MainLogo';

const LeftMeeting = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-3 text-center">
      <div className="animate-pulse flex flex-col items-center">
        <MainLogo />
        <div className="mt-5 font-bold">You left the meeting</div>
      </div>
    </div>
  );
};

export default LeftMeeting;
