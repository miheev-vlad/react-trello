import React from 'react';

type ButtonProps = {
  btnName: string;
};

export const CreateButton: React.FC<ButtonProps> = ({ btnName }) => {
  return <button type="submit">{btnName}</button>;
};
