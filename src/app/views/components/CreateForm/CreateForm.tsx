import React from 'react';
import { Form } from 'react-final-form';
import { CreateButton } from '../CreateButton/CreateButton';
import { InputField } from '../InputField/InputField';
import { FormComponentsWrapp } from './styles';

type CreateCardFormProps = {
  onSubmit(value: unknown): void;
  inputName: string;
  placeholder: string;
  btnName: string;
};

export const CreateForm: React.FC<CreateCardFormProps> = ({
  onSubmit,
  inputName,
  placeholder,
  btnName,
}) => {
  return (
    <Form
      onSubmit={(values: { [key: string]: string }, form) => {
        onSubmit(Object.values(values));
        form.reset();
      }}
      render={({ handleSubmit }) => {
        return (
          <form id="exampleForm" onSubmit={handleSubmit}>
            <FormComponentsWrapp>
              <InputField inputName={inputName} placeholder={placeholder} />
              <CreateButton btnName={btnName} />
            </FormComponentsWrapp>
          </form>
        );
      }}
    />
  );
};
