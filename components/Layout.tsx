import React from 'react';
import MainLogo from '../pages/assets/MainLogo';
import styled from 'styled-components';
import DescriptionSection from './DescriptionSection';

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutWrapper = styled.div`
  background-color: #f9fbfe;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper className="main__bold w-screen min-h-screen flex flex-col relative">
      <div className="fixed top-0 pl-2">
        <img src="/static/images/fasilkom.png" className="  h-20 w-auto " />
      </div>
      <div className="w-100 h-12 md:h-16 flex flex-row justify-center  pt-3">
        <MainLogo className=" max-h-full w-auto" />
      </div>
      {children}
      <div className="main__text text-muted w-100 text-center pb-2 text-xs px-2 flex flex-col flex-1 justify-between">
        <a href="#info" className="text-lg mt-4">
          Learn More
        </a>
        <div className="mt-4">
          Part of the Open Source Initiative of The Faculty of Computer Science
          <div>University of Indonesia</div>
        </div>
      </div>
      <DescriptionSection />
    </LayoutWrapper>
  );
};

export default Layout;
