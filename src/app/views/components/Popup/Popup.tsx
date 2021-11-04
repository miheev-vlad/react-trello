import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../state/ducks/user/userSlice';
import { CreateForm } from '../CreateForm/CreateForm';
import {
  PopupBackdropLayout,
  PopupContainer,
  PopupLayout,
  PopupSection,
  WellcomeTitle,
  Message,
} from './styles';

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
    <React.Fragment>
      <PopupBackdropLayout />
      <PopupLayout>
        <WellcomeTitle>Wellcome to Trello on Redux</WellcomeTitle>
        <PopupContainer>
          <PopupSection>
            <Message>Please enter your name</Message>
            <CreateForm
              onSubmit={setUserHandler}
              inputName={'userName'}
              placeholder={'your name...'}
              btnName={'Save'}
            />
          </PopupSection>
        </PopupContainer>
      </PopupLayout>
    </React.Fragment>
  );
};
