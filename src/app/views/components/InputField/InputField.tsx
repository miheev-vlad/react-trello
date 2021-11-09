import React from 'react';
import { Field, FieldRenderProps } from 'react-final-form';
import { InputContainer } from './styles';

interface IInputField {
  inputName: string;
  placeholder: string;
}

const required = (value: string) => {
  if (!value || !value.trim()) {
    return true;
  }

  return undefined;
};

const RenderInputComponent = (
  props: FieldRenderProps<string, HTMLInputElement>,
) => {
  return <input {...props.input} />;
};

export const InputField: React.FC<IInputField> = ({
  inputName,
  placeholder,
}) => {
  return (
    <InputContainer>
      <Field
        name={inputName}
        component={RenderInputComponent}
        type="text"
        placeholder={placeholder}
        validate={required}
      />
    </InputContainer>
  );
};
