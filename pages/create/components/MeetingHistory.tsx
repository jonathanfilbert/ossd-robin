import { useRouter } from 'next/router';
import React from 'react';

type MeetingHistoryProps = {
  meetings: string[];
};

const MeetingHistory = ({ meetings }: MeetingHistoryProps) => {
  const router = useRouter();
  return (
    <div className=" max-w-sm m-auto flex flex-col justify-center mt-10 px-5 main__text">
      <span className="main__bold text-2xl text-center mb-4">
        My Meeting History
      </span>
      {meetings.map((meeting, index) => (
        <div
          onClick={() => router.push(`/meet?meetId=${meeting}`)}
          className="shadow-xs w-full h-auto bg-white  hover:shadow-lg transition-all duration-100 rounded-md px-6 py-2 text-black cursor-pointer my-2"
          key={index}
        >
          <div className="flex flex-col">
            <div className=" text-xs">ROOM NAME</div>
            <div className="text-2xl">{meeting}</div>
            <div className="w-full flex flex-row justify-end">
              <div className="py-2 px-3 rounded-md text-main hover:bg-orange-100 focus:bg-orange-200 ">
                JOIN
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingHistory;
