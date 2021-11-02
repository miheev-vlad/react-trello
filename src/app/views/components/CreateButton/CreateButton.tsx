import React from 'react';
import { AddButton } from './styles';

type ButtonProps = {
  btnName: string;
  disabled: boolean;
};

export const CreateButton: React.FC<ButtonProps> = ({ btnName, disabled }) => {
  return (
    <AddButton type="submit" disabled={disabled}>
      {btnName}
    </AddButton>
  );
};
