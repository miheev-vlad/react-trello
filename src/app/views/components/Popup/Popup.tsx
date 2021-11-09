import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../state/ducks/user/userSlice';
import { CreateForm } from '../CreateForm/CreateForm';
import { ModalWindowWrapper } from '../ModalWindowWrapper/ModalWindowWrapper';
import { Message, PopupContainer } from './styles';

export const Popup: React.FC = () => {
  const dispatch = useDispatch();

  const setUserHandler = (userName: string) => {
    dispatch(
      createUser({
        userName,
      }),
    );
  };

  return (
    <ModalWindowWrapper
      isUncloseable={true}
      title={'Wellcome to Trello on Redux'}
      height={'300px'}>
      <PopupContainer>
        <Message>Please enter your name:</Message>
        <CreateForm
          onSubmit={setUserHandler}
          inputName={'userName'}
          placeholder={'your name...'}
          btnName={'Save'}
        />
      </PopupContainer>
    </ModalWindowWrapper>
  );
};
