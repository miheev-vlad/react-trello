import React, { useEffect, useState } from 'react';
import { AppTitle, AppWrapper, Container } from './AppStyles';
import { Column } from './components/Сolumn/Column';
import { ICard } from './shared/interfaces/ICard';
import { IColumn } from './shared/interfaces/IColumn';
import { IComment } from './shared/interfaces/IComment';
import { StatusEnum } from './shared/StatusEnum';

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
      author: localStorage.getItem('trelloUserName')!,
      description: ''
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

  const addCommentHandler = (id: number, comment: IComment) => {
    const newCardsArr: ICard[] = cards.map(card => {
      if (card.id === id) {
        card.comments.unshift(comment)
      }
      return card
    })  
    setCards(newCardsArr)
  }

  const editCommentHandler = (id: number, commentId: number, text: string) => {
    const newCardsArr: ICard[] = cards.map(card => {
      if (card.id === id) {
        card.comments.map(comment => {
          if (comment.id === commentId) {
            comment.text = text
          }
          return comment;
        })
      }
      return card
    })  
    setCards(newCardsArr)
  }

  const removeCommentHandler = (id: number, commentId: number) => {
    const newCardsArr: ICard[] = cards.map(card => {
      if (card.id === id) {
        card.comments = card.comments.filter(comment => comment.id !== commentId)
      }
      return card
    })  
    setCards(newCardsArr)
  }

  const editCadTitleHandler = (id: number, title: string) => {
    const newCardsArr: ICard[] = cards.map(card => {
      if (card.id === id) {
        card.title = title
      }
      return card
    })  
    setCards(newCardsArr)
  }

  const addDescriptionHandler = (id: number, description: string) => {
    const newCardsArr: ICard[] = cards.map(card => {
      if (card.id === id) {
        card.description = description
      }
      return card
    })  
    setCards(newCardsArr)
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
      { title: 'TODO', id: 1, status: StatusEnum.ColumnOne },
      { title: 'In Progress', id: 2, status: StatusEnum.ColumnTwo },
      { title: 'Testing', id: 3, status: StatusEnum.ColumnThree },
      { title: 'Done', id: 4, status: StatusEnum.ColumnFour },
    ]  
    const saved = JSON.parse(localStorage.getItem('columns') || JSON.stringify(defaultColumns)) as IColumn[] 
    setColumns(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('columns', JSON.stringify(columns))
  }, [columns])

  return (
    <AppWrapper>
      <AppTitle>
        <h2>
          React Trello App
        </h2>
      </AppTitle>
      <Container>
        {columns.map(column => {
          return (
            <Column
              title={column.title}
              id={column.id}
              cards={cards}
              status={column.status}
              onRemove={removeHandler}
              onAdd={addHandler}
              onEdit={titleEditHandler}
              onAddComment={addCommentHandler}
              onRemoveComment={removeCommentHandler}
              onAddDescription={addDescriptionHandler}
              onEditCadTitle={editCadTitleHandler}
              onEditComment={editCommentHandler}
              key={column.id} />
          )
        })}
      </Container>
    </AppWrapper>
  );
}

export default App;
