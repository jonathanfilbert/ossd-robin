import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => any;
};

const Button = ({ children, onClick, ...rest }: ButtonProps) => {
  return (
    <div
      {...rest}
      className=" px-8 py-2 rounded-full text-white main__text bg-main  hover:bg-orange-700 cursor-pointer text-center"
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

export default Button;
