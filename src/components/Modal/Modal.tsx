import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ICard } from '../../shared/interfaces/ICard';
import { IComment } from '../../shared/interfaces/IComment';
import { Backdrop } from './Backdrop/Backdrop';
import {
  CardInfo,
  CardTitle,
  CloseButton,
  CommentAddButton,
  CommentInput,
  ModalContainer,
  ModalLayout,
  ModalSection,
} from './styles';

type ModalProps = {
  columnTitle: string
  card?: ICard
  onClose(): void
  onRemove(id: number): void
  onAddComment(id: number, comment: IComment): void
  onRemoveComment(id: number, commentId: number): void
  onAddDescription(id: number, description: string): void
  onEditCadTitle(id: number, title: string): void
}

export const Modal: React.FC<ModalProps> = ({
  columnTitle,
  card,
  onClose,
  onRemove,
  onAddComment,
  onRemoveComment,
  onAddDescription,
  onEditCadTitle
}) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [cardTitle, setCardTitle] = useState<string>(card!.title)
  const [commentText, setCommentText] = useState<string>('')
  const deleteCardHandler = () => {
    onRemove(card!.id)
    onClose()
  }
  const escapeHandler = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose();
  }, [onClose]);

  const setCommentTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value)
  }

  const addCommentHandler = () => {
    const newComment: IComment = {
      author: localStorage.getItem('trelloUserName')!,
      text: commentText,
      id: Date.now()
    }
    onAddComment(card!.id, newComment)
    setCommentText('')
  }

  const editCardTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(event.target.value)
  }

  const keyUpHandler = (event: React.KeyboardEvent) => {
    onEditCadTitle!(card!.id, cardTitle)
  }

  const addCardDescriptionHandler = () => {
    onAddDescription(card!.id, ref.current!.value)
  }

  useEffect(() => {
    document.addEventListener('keydown', escapeHandler, false);
    return () => {
      document.removeEventListener('keydown', escapeHandler, false);
    };
  }, [escapeHandler]);
  return (
    <React.Fragment>
      <Backdrop />
      <ModalLayout>
        <ModalContainer>
          <CloseButton onClick={onClose}>x</CloseButton>
          <ModalSection>
            <CardTitle
              type="text"
              id="cardTitle"
              value={cardTitle}
              onChange={editCardTitleHandler}
              onKeyUpCapture={keyUpHandler}
            />
            <CardInfo>
              <p>
                in the column: {columnTitle ? columnTitle : '...without title'}
              </p>
              <p>Author: {card!.author}</p>
              <button onClick={deleteCardHandler}>Delete Card</button>
            </CardInfo>
          </ModalSection>
          <ModalSection>
            <p>Description:</p>
            <textarea
              ref={ref}
              value={card!.description}
              onChange={addCardDescriptionHandler}></textarea>
          </ModalSection>
          <ModalSection>
            <p>Comments:</p>
            <CommentInput
              type="text"
              id="comment"
              placeholder="Your comment..."
              value={commentText}
              onChange={setCommentTextHandler}
            />
            <CommentAddButton onClick={addCommentHandler} disabled={!commentText}>
              Add Comment
            </CommentAddButton>
          </ModalSection>
          <ModalSection>
            {!card!.comments.length && <p>No comments yet...</p>}
            {card!.comments.map((comment: IComment) => {
              return (
                <div key={comment.id}>
                  <p>
                    {comment.author}
                  </p>
                  <p>
                    {comment.text}
                  </p>
                  <button type="button" onClick={() => onRemoveComment(card!.id, comment.id)}>x</button>
                </div>
              );
            })}
          </ModalSection>
        </ModalContainer>
      </ModalLayout>
    </React.Fragment>
  );
};