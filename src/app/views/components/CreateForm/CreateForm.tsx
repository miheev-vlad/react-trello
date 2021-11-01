import React from 'react';
import { Form } from 'react-final-form';
import { CreateButton } from '../CreateButton/CreateButton';
import { InputField } from '../InputField/InputField';

type CreateCardFormProps = {
  onSubmit(title: string): void;
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
      onSubmit={(values, form) => {
        const { title } = values;
        onSubmit(title);
        form.reset();
      }}
      render={({ handleSubmit }) => {
        return (
          <form id="exampleForm" onSubmit={handleSubmit}>
            <InputField inputName={inputName} placeholder={placeholder} />
            <CreateButton btnName={btnName} />
          </form>
        );
      }}
    />
  );
};
