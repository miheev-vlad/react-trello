import { StatusEnum } from '../enums/StatusEnum';
import { ICard } from '../interfaces/ICard';
import { IColumn } from '../interfaces/IColumn';

export class LocalStorageService {
  static saveUserName(userName: string): void {
    localStorage.setItem('trelloUserName', userName);
  }

  static isUserNameSet(): boolean {
    if (localStorage.getItem('trelloUserName')) {
      return true;
    } else {
      return false;
    }
  }

  static getUserName(): string {
    return localStorage.getItem('trelloUserName')!;
  }

  static saveCards(cards: ICard[]): void {
    localStorage.setItem('cards', JSON.stringify(cards));
  }

  static getCards(): ICard[] {
    const savedCards = JSON.parse(
      localStorage.getItem('cards') || '[]',
    ) as ICard[];
    return savedCards;
  }

  static saveColumns(columns: IColumn[]): void {
    localStorage.setItem('columns', JSON.stringify(columns));
  }

  static getColumns(): IColumn[] {
    const defaultColumns: IColumn[] = [
      { title: 'TODO', id: 1, status: StatusEnum.ColumnOne },
      { title: 'In Progress', id: 2, status: StatusEnum.ColumnTwo },
      { title: 'Testing', id: 3, status: StatusEnum.ColumnThree },
      { title: 'Done', id: 4, status: StatusEnum.ColumnFour },
    ];
    const savedColumns = JSON.parse(
      localStorage.getItem('columns') || JSON.stringify(defaultColumns),
    ) as IColumn[];

    return savedColumns;
  }
}
