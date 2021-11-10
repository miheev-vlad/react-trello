import React from 'react';
import { Field, Form } from 'react-final-form';
import { CreateButton } from '../CreateButton/CreateButton';
import { InputField } from '../InputField/InputField';
import { FormComponentsWrapp } from './styles';

type CreateFormProps = {
  onSubmit(value: unknown): void;
  placeholder: string;
  btnName: string;
};

interface IValues {
  inputStr: string;
}

const required = (value: string) => {
  if (!value || !value.trim()) {
    return true;
  }

  return undefined;
};

export const CreateForm: React.FC<CreateFormProps> = ({
  onSubmit,
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
              <Field<string>
                name="inputStr"
                component={InputField}
                placeholder={placeholder}
                validate={required}
              />
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
