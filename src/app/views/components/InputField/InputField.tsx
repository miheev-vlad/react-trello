import React from 'react';
import { Field } from 'react-final-form';

type InputProps = {
  inputName: string;
  placeholder: string;
};

export const InputField: React.FC<InputProps> = ({
  inputName,
  placeholder,
}) => {
  return (
    <Field
      name={inputName}
      component="input"
      type="text"
      placeholder={placeholder}
    />
  );
};
