import React from 'react';
import MainLogo from '../pages/assets/MainLogo';
import { useQuery } from 'react-query';

const Loading = () => {
  const { data, isLoading } = useQuery('useQueryGetRandomAdvices', () =>
    fetch('https://api.adviceslip.com/advice').then((res) => res.json()),
  );
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-3 text-center">
      <div className="animate-pulse flex flex-col items-center">
        <MainLogo />
        <div className="mt-5">
          {isLoading ? 'Loading...' : data.slip.advice}
        </div>
      </div>
    </div>
  );
};

export default Loading;
