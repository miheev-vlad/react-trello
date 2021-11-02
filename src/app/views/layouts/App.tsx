import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../state/ducks/user/userSlice';
import { IAppState, RootState } from '../../state/store';
import { Modal } from '../components/Modal/Modal';
import { Column } from '../components/Сolumn/Column';
import { AppTitle, AppWrapper, Container } from './AppStyles';

const App: React.FC = () => {
  const columns = useSelector((state: RootState) => state.columns.value);
  const isShow = useSelector((state: RootState) => state.modal.isShow);
  const userName = useSelector((state: IAppState) => state.user.userName);
  const dispatch = useDispatch();

  useEffect(() => {
    let isUserName = false;
    if (!isUserName && !userName) {
      do {
        const result = window.prompt('Please enter your name');
        if (result && result !== '') {
          dispatch(
            createUser({
              userName: result,
            }),
          );
          isUserName = true;
        } else {
          window.alert('Your name is required');
        }
      } while (!isUserName);
    }
  }, [userName, dispatch]);

  return (
    <AppWrapper>
      <AppTitle>
        <h2>React Trello App</h2>
      </AppTitle>
      <Container>
        {columns.map((column) => {
          return <Column column={column} key={column.id} />;
        })}
      </Container>
      {isShow && <Modal />}
    </AppWrapper>
  );
};

export default App;
