import React from 'react';
import { Field } from 'react-final-form';
import { InputContainer } from './styles';

type InputProps = {
  inputName: string;
  placeholder: string;
};

const required = (value: string) => {
  if (!value || !value.trim()) {
    return true;
  }

  return undefined;
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
        validate={required}
      />
    </InputContainer>
  );
};
