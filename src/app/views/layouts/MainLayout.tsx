import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import { MainTitle, MainWrapper, MainContainer } from './styles';
import { Column } from '../components/Сolumn/Column';
import { IAppState, RootState } from '../../state/store';
import { Popup } from '../components/Popup/Popup';
import { CardModal } from '../components/CardModal/CardModal';

export const MainLayout: React.FC = () => {
  const columns = useSelector((state: RootState) => state.columns.value);
  const isShow = useSelector((state: RootState) => state.modal.isShow);
  const userName = useSelector((state: IAppState) => state.user.userName);

  if (!userName) {
    return <Popup />;
  }

  return (
    <MainWrapper>
      <MainTitle>
        <h2>React Trello App</h2>
      </MainTitle>
      <MainContainer>
        {_.map(columns, (column) => {
          return <Column column={column} key={column.id} />;
        })}
      </MainContainer>
      {isShow && <CardModal />}
    </MainWrapper>
  );
};
