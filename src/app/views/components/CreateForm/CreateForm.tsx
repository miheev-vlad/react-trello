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

interface IValues {
  inputStr: string;
}

export const CreateForm: React.FC<CreateCardFormProps> = ({
  onSubmit,
  inputName,
  placeholder,
  btnName,
}) => {
  return (
    <Form
      onSubmit={(values: IValues, form) => {
        onSubmit(Object.values(values));
        form.reset();
      }}
      render={({ handleSubmit, submitting, pristine, invalid }) => {
        return (
          <form id="exampleForm" onSubmit={handleSubmit}>
            <FormComponentsWrapp>
              <InputField inputName={inputName} placeholder={placeholder} />
              <CreateButton disabled={submitting || pristine || invalid}>
                {btnName}
              </CreateButton>
            </FormComponentsWrapp>
          </form>
        );
      }}
    />
  );
};
