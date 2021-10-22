import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Column } from './components/Сolumn/Column';
import { ICard } from './shared/interfaces/ICard';
import { IColumn } from './shared/interfaces/IColumn';
import { StatusEnum } from './shared/StatusEnum';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #fafafa;
`

const App: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>([])
  const [columns, setColumns] = useState<IColumn[]>([])
  const removeHandler = (id: number) => {
      setCards(prev => prev.filter(card => card.id !== id))
  }
  const addHandler = (title: string, status: StatusEnum) => {
    const newCard: ICard = {
      title: title,
      id: Date.now(),
      comments: [],
      status: status,
      author: localStorage.getItem('trelloUserName')!
    }
    setCards(prev => [newCard, ...prev])
  }

  const titleEditHandler = (id: number, title: string) => {
    const newColumnsArr: IColumn[] = columns.map(column => {
      if (column.id === id) {
        column.title = title
      }
      return column
    })  
    setColumns(newColumnsArr)
  }

  useEffect(() => {
    if (!localStorage.getItem('trelloUserName')) {
      do {
        const result = window.prompt('Please enter your name');
        if (result && result !== '') {
          localStorage.setItem('trelloUserName', result);
        } else {
          window.alert('Your name is required');
        }
      } while (!localStorage.getItem('trelloUserName'));
    }
  }, []);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cards') || '[]') as ICard[] 
    setCards(saved)
  }, []);
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])
  useEffect(() => {
    const defaultColumns: IColumn[] = [
      { title: 'TODO', id: 1, status: StatusEnum.TODO },
      { title: 'In Progress', id: 2, status: StatusEnum.InProgress },
      { title: 'Testing', id: 3, status: StatusEnum.Testing },
      { title: 'Done', id: 4, status: StatusEnum.Done },
    ]  
    const saved = JSON.parse(localStorage.getItem('columns') || JSON.stringify(defaultColumns)) as IColumn[] 
    setColumns(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('columns', JSON.stringify(columns))
  }, [columns])

  return (
    <AppWrapper>
      <h2>
        React Trello App
      </h2>
      {columns.map(column => {
        return (
          <Column title={column.title} id={column.id} cards={cards} status={column.status} onRemove={removeHandler} onAdd={addHandler} onEdit={titleEditHandler} key={column.id} />
        )
      })}
    </AppWrapper>
  );
}

export default App;
