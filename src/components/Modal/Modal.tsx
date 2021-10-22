import React, { useCallback, useEffect } from 'react';
import { ICard } from '../../shared/interfaces/ICard';
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
  card?: ICard
  onClose(): void
  onRemove(id: number): void
}

export const Modal: React.FC<ModalProps> = ({ card, onClose, onRemove }) => {
  const deleteCardHandler = () => {
    onRemove(card!.id)
    onClose()
  }
  const escapeHandler = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose();
  }, [onClose]);

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
              name=""
              id={'cardName'}
              value={'cardName'}
              onChange={(e) => {
              }}
            />
            <CardInfo>
              <p>
                in the column:{' '}
                <ins>{localStorage.getItem(`${'columnInModal'} name`)}</ins>{' '}
              </p>
              <p>Author: {'userName'}</p>
              <button onClick={deleteCardHandler}>Delete Card</button>
            </CardInfo>
          </ModalSection>
          <ModalSection>
            <p>Description:</p>
            <textarea
              value={'description'}
              onChange={(e) => {
              }}></textarea>
          </ModalSection>
          <ModalSection>
            <p>Comments:</p>
            <CommentInput
              type="text"
              name=""
              id=""
              placeholder="Your comment..."
              onChange={() => {}}
              value={'commentText'}
            />
            <CommentAddButton onClick={() => {}} disabled={false}>
              Add Comment
            </CommentAddButton>
          </ModalSection>
          <ModalSection>
            {true && <p>No comments yet...</p>}
            {/* {comments.map((item: IComments, key: number) => {
              return (
                <Comment
                  key={key}
                  item={item}
                  updateCommentText={updateCommentText}
                  deleteComment={deleteComment}
                />
              );
            })} */}
          </ModalSection>
        </ModalContainer>
      </ModalLayout>
    </React.Fragment>
  );
};
