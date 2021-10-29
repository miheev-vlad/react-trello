import React, { useRef } from 'react';
import { IComment } from '../../../../../shared/interfaces/IComment';
import {
  CommentAuthor,
  CommentHeader,
  CommentLayout,
  CommentText,
  DeleteButton,
} from './styles';

type CommentProps = {
  cardId: number;
  comment: IComment;
  onEditComment(cardId: number, commentId: number, text: string): void;
  onRemoveComment(cardId: number, commentId: number): void;
};

export const Comment: React.FC<CommentProps> = ({
  cardId,
  comment,
  onRemoveComment,
  onEditComment,
}) => {
  const refInput = useRef<HTMLInputElement>(null);

  const editCommentTextHandler = (id: number) => {
    onEditComment(cardId, id, refInput.current!.value);
  };

  return (
    <CommentLayout>
      <CommentHeader>
        <CommentText
          ref={refInput}
          type="text"
          id="commentText"
          value={comment.text}
          onChange={() => editCommentTextHandler(comment.id)}
        />
        <DeleteButton
          type="button"
          onClick={() => onRemoveComment(cardId, comment.id)}>
          x
        </DeleteButton>
      </CommentHeader>
      <hr></hr>
      <CommentAuthor>comment author: {comment.author}</CommentAuthor>
    </CommentLayout>
  );
};
