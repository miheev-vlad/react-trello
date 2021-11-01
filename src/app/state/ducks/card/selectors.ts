import { createSelector } from 'reselect';
import _ from 'lodash';
import { IAppState } from '../../store';
import { StatusEnum } from '../../../shared/enums/StatusEnum';
import { ICard } from '../../../shared/interfaces/ICard';

const colunmsCards = (state: IAppState) => state.cards.value;

function filterColumnCardsByStatus(status: StatusEnum) {
  return createSelector(colunmsCards, (cards: ICard[]) => {
    return cards.filter((card) => card.status === status);
  });
}

export default filterColumnCardsByStatus;
