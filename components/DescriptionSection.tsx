import React from 'react';

const DescriptionSection = () => {
  return (
    <div className=" w-screen min-h-screen flex flex-col items-center mt-5 sm:mt-40 px-8 mb-20">
      <div
        className="w-full h-auto md:w-4/5 md:h-64 flex flex-col lg:flex-row items-center"
        id="info"
      >
        <div className="w-auto order-2 md:order-2">
          <div className="md:text-5xl text-2xl text-dark main__bold">
            Classroom without the class.
          </div>
          <div className="main__text text-lg text-muted">
            <div>
              Pandemic has changed the way every single one of us interact with
              each other. From the way we watch movies, order food, do health
              consultations, and play together, everything has been done without
              phyisical contact.
            </div>
            <div className="mt-2">
              We believe in the importance of education in the midst of
              pandemic, an open yet powerful platform, an honest yet beautiful
              solution for remote-learning, available for everyone, everywhere.
            </div>
          </div>
        </div>
        <img
          src="/static/images/asset_learning.png"
          className="md:h-full order-21md:order-1 w-full h-auto md:w-auto"
        />
      </div>
      <div className="md:w-4/5 h-auto md:h-64 flex flex-col lg:flex-row items-center mt-5 md:mt-20">
        <img
          src="/static/images/asset_rocket.png"
          className="md:h-full order-1 md:order-1 w-full h-auto md:w-auto"
        />
        <div className="w-auto order-2 md:order-2">
          <div className="text-2xl lg:text-5xl text-dark main__bold">
            40 minutes? Zoom past that.
          </div>
          <div className="main__text text-lg text-muted">
            <div>
              We believe in the open and strategic importance of class
              discussion, hence we make every session of video conference
              unlimited in terms of participants and time. This means you can
              talk, discuss, or even present longer without limits. Goodbye to
              your 40 minutes trial, say hello to unlimited free sessions.
            </div>
            <div className="mt-2">
              This is made possible by Jitsi Meet, an open source teleconference
              solution.
            </div>
            <a href="https://jitsi.org/" className="font-bold">
              Learn more about Jitsi here.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
