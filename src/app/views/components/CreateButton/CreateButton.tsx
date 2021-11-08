import React from 'react';
import { AddButton } from './styles';

type ButtonProps = {
  disabled: boolean;
};

export const CreateButton: React.FC<ButtonProps> = ({ disabled, children }) => {
  return (
    <AddButton type="submit" disabled={disabled}>
      {children}
    </AddButton>
  );
};
