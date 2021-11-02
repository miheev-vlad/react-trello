import React from 'react';
import { Field } from 'react-final-form';
import { InputContainer } from './styles';

type InputProps = {
  inputName: string;
  placeholder: string;
};

export const InputField: React.FC<InputProps> = ({
  inputName,
  placeholder,
}) => {
  return (
    <InputContainer>
      <Field
        name={inputName}
        component="input"
        type="text"
        placeholder={placeholder}
      />
    </InputContainer>
  );
};
