import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import { AppTitle, AppWrapper, Container } from './AppStyles';
import { Modal } from '../components/Modal/Modal';
import { Column } from '../components/Сolumn/Column';
import { IAppState, RootState } from '../../state/store';
import { Popup } from '../components/Popup/Popup';

const App: React.FC = () => {
  const columns = useSelector((state: RootState) => state.columns.value);
  const isShow = useSelector((state: RootState) => state.modal.isShow);
  const userName = useSelector((state: IAppState) => state.user.userName);

  if (!userName) {
    return <Popup />;
  }

  return (
    <AppWrapper>
      <AppTitle>
        <h2>React Trello App</h2>
      </AppTitle>
      <Container>
        {_.map(columns, (column) => {
          return <Column column={column} key={column.id} />;
        })}
      </Container>
      {isShow && <Modal />}
    </AppWrapper>
  );
};

export default App;
