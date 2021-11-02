import React from 'react';
import { AddButton } from './styles';

type ButtonProps = {
  btnName: string;
};

export const CreateButton: React.FC<ButtonProps> = ({ btnName }) => {
  return <AddButton type="submit">{btnName}</AddButton>;
};
