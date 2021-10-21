import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Column } from './components/Сolumn/Column';
import { ICard } from './shared/interfaces/ICard';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #fafafa;
`

const App: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>([])
  const title: string = "TODO"
  const id: number = 1
  const removeHandler = (id: number) => {
      setCards(prev => prev.filter(card => card.id !== id))
  }
  const addHandler = (title: string) => {
    const newCard: ICard = {
      title: title,
      id: Date.now(),
      comment: 'comment',
      status: 'TODO'
    }
    setCards(prev => [newCard, ...prev])
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
  });
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cards') || '[]') as ICard[] 
    setCards(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])


  return (
    <AppWrapper>
      Trello App
      <Column title={title} id={id} cards={cards} onRemove={removeHandler} onAdd={addHandler} />
    </AppWrapper>
  );
}

export default App;
