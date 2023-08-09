import React from "react";

type Props = {
  children: React.ReactNode;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
};

export const Button = ({ children, id, onClick }: Props) => (
  <button onClick={onClick} id={id}>
    {children}
  </button>
);
