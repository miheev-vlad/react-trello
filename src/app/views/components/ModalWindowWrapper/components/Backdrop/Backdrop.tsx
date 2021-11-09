import React from 'react';
import { useDispatch } from 'react-redux';
import {
  closeModal,
  toggleModal,
} from '../../../../../state/ducks/modal/modalSlice';
import { BackdropLayout } from './styles';

type BackdropProps = {
  isUncloseable: boolean;
};

export const Backdrop: React.FC<BackdropProps> = ({ isUncloseable }) => {
  const dispatch = useDispatch();

  return (
    <BackdropLayout
      onClick={() => {
        if (!isUncloseable) {
          dispatch(toggleModal({ isShow: false }));
          dispatch(closeModal());
        }
      }}
    />
  );
};
