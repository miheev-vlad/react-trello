import React, { useState } from 'react';
import { IComment } from '../../../../../shared/interfaces/IComment';
import {
  CommentAuthor,
  CommentHeader,
  CommentLayout,
  CommentText,
  DeleteButton,
} from './styles';

type CommentProps = {
  cardId: string;
  comment: IComment;
  removeCommentHandler(cardId: string, commentId: string): void;
  editCommentHandler(cardId: string, commentId: string, text: string): void;
};

export const Comment: React.FC<CommentProps> = ({
  cardId,
  comment,
  removeCommentHandler,
  editCommentHandler,
}) => {
  const [commentText, setCommentText] = useState<string>(comment.text);

  return (
    <CommentLayout>
      <CommentHeader>
        <CommentText
          type="text"
          id="commentText"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyUpCapture={() =>
            editCommentHandler(cardId, comment.id, commentText)
          }
        />
        <DeleteButton
          type="button"
          onClick={() => removeCommentHandler(cardId, comment.id)}>
          x
        </DeleteButton>
      </CommentHeader>
      <hr></hr>
      <CommentAuthor>comment author: {comment.author}</CommentAuthor>
    </CommentLayout>
  );
};
