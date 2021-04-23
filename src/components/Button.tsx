import React from "react";

type ButtonProps = {
  id: string;
  onClick: () => void;
  icon: string | React.ReactElement;
  children: React.ReactNode;
};

function Button({ id, onClick, children, icon }: ButtonProps) {
  return (
    <button id={id} onClick={onClick}>
      {icon} {children}
    </button>
  );
}

export default Button;
