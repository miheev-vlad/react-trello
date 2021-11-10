import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { StyledInput } from './styles';

type Props = FieldRenderProps<string, HTMLElement>;

export const InputField: React.FC<Props> = ({ input }: Props) => (
  <StyledInput type="text" {...input} />
);
