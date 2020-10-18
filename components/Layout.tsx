import React from 'react';
import MainLogo from '../pages/assets/MainLogo';
import styled from 'styled-components';

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutWrapper = styled.div`
  background-color: #f9fbfe;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper className="main__bold w-screen h-screen flex flex-col relative">
      <div className="absolute top-0">
        <img src="/static/images/fasilkom.png" className="  h-20 w-auto " />
      </div>
      <div className="w-100 h-12 md:h-16 flex flex-row justify-center  pt-3">
        <MainLogo className=" max-h-full w-auto" />
      </div>
      {children}
      <div className="main__text text-muted w-100 text-center absolute bottom-0 left-0 right-0 pb-2 text-xs px-2">
        <div>
          Part of the Open Source Initiative of The Faculty of Computer Science
        </div>
        <div>University of Indonesia</div>
      </div>
    </LayoutWrapper>
  );
};

export default Layout;
