import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => any;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div
      className=" px-8 py-2 rounded-full text-white main__text bg-main  hover:bg-orange-700 cursor-pointer"
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

export default Button;
