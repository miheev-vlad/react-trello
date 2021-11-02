import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import _ from 'lodash';

import { Backdrop } from './components/Backdrop/Backdrop';
import { Comment } from './components/Comment/Comment';
import {
  CardInfo,
  CardTitle,
  CloseButton,
  ModalContainer,
  ModalLayout,
  ModalSection,
} from './styles';
import { CreateForm } from '../CreateForm/CreateForm';
import { IComment } from '../../../shared/interfaces/IComment';
import {
  addCardComment,
  editCardComments,
  editCardDescription,
  editCardTitle,
  removeCard,
  removeCardComment,
} from '../../../state/ducks/card/cardSlice';
import { closeModal, toggleModal } from '../../../state/ducks/modal/modalSlice';
import { IAppState } from '../../../state/store';

export const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const card = useSelector((state: IAppState) => state.modal.card);
  const refTextArea = useRef<HTMLTextAreaElement>(null);
  const [cardTitle, setCardTitle] = useState<string>(card ? card.title : '');
  const userName = useSelector((state: IAppState) => state.user.userName);

  const columnTitle = useSelector(
    (state: IAppState) => state.modal.columnTitle,
  );

  const [cardComments, setCardComments] = useState<IComment[]>(
    card ? card.comments : [],
  );

  const escapeHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch(toggleModal({ isShow: false }));
        dispatch(closeModal());
      }
    },
    [dispatch],
  );

  const addCardDescriptionHandler = () => {
    dispatch(
      editCardDescription({
        id: card!.id,
        description: refTextArea.current!.value,
      }),
    );
  };

  const createCommentHandler = (comment: string) => {
    const newComment: IComment = {
      id: uuid(),
      author: userName,
      text: comment,
    };
    dispatch(
      addCardComment({
        id: card!.id,
        comment: newComment,
      }),
    );
    setCardComments((prevComments) => [newComment, ...prevComments]);
  };

  const removeCommentHandler = (cardId: string, commentId: string) => {
    dispatch(
      removeCardComment({
        cardId,
        commentId,
      }),
    );
    setCardComments((prevComments) => [
      ...prevComments.filter((comment) => comment.id !== commentId),
    ]);
  };

  const editCommentHandler = (
    cardId: string,
    commentId: string,
    text: string,
  ) => {
    dispatch(
      editCardComments({
        cardId,
        commentId,
        text,
      }),
    );
  };

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
          <CloseButton
            onClick={() => {
              dispatch(toggleModal({ isShow: false }));
              dispatch(closeModal());
            }}>
            x
          </CloseButton>
          <ModalSection>
            <CardTitle
              type="text"
              id="cardTitle"
              value={cardTitle}
              onChange={(e) => setCardTitle(e.target.value)}
              onKeyUpCapture={() => {
                dispatch(
                  editCardTitle({
                    id: card!.id,
                    title: cardTitle,
                  }),
                );
              }}
            />
            <CardInfo>
              <p>
                in the column: {columnTitle ? columnTitle : '...without title'}
              </p>
              <p>Author: {card!.author}</p>
              <button
                onClick={() => {
                  dispatch(removeCard({ id: card!.id }));
                  dispatch(toggleModal({ isShow: false }));
                  dispatch(closeModal());
                }}>
                Delete Card
              </button>
            </CardInfo>
          </ModalSection>
          <ModalSection>
            <p>Description:</p>
            <textarea
              ref={refTextArea}
              value={card!.description}
              onChange={addCardDescriptionHandler}></textarea>
          </ModalSection>
          <ModalSection>
            <p>Comments:</p>
            <CreateForm
              onSubmit={createCommentHandler}
              inputName={'comment'}
              placeholder={'Enter comment...'}
              btnName={'Add comment'}
            />
          </ModalSection>
          <ModalSection>
            {!cardComments.length && <p>No comments yet...</p>}
            {_.map(cardComments, (comment: IComment) => {
              return (
                <Comment
                  key={comment.id}
                  comment={comment}
                  cardId={card!.id}
                  removeCommentHandler={removeCommentHandler}
                  editCommentHandler={editCommentHandler}
                />
              );
            })}
          </ModalSection>
        </ModalContainer>
      </ModalLayout>
    </React.Fragment>
  );
};
