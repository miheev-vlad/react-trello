import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Backdrop } from './components/Backdrop/Backdrop';
import {
  CloseButton,
  ModalContainer,
  ModalLayout,
  ModalSection,
  ModalTitle,
} from './styles';
import { closeModal, toggleModal } from '../../../state/ducks/modal/modalSlice';

type ModalWindowWrapperProps = {
  isUncloseable?: boolean;
  title?: string;
  height?: string;
};

export const ModalWindowWrapper: React.FC<ModalWindowWrapperProps> = ({
  isUncloseable = false,
  title = '',
  height = '390px',
  children,
}) => {
  const dispatch = useDispatch();

  const escapeHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isUncloseable) {
        dispatch(toggleModal({ isShow: false }));
        dispatch(closeModal());
      }
    },
    [dispatch, isUncloseable],
  );

  useEffect(() => {
    document.addEventListener('keydown', escapeHandler, false);
    return () => {
      document.removeEventListener('keydown', escapeHandler, false);
    };
  }, [escapeHandler]);

  return (
    <React.Fragment>
      <Backdrop isUncloseable={isUncloseable} />
      <ModalLayout style={{ height }}>
        {!!title && <ModalTitle>{title}</ModalTitle>}
        <ModalContainer>
          {!isUncloseable && (
            <CloseButton
              onClick={() => {
                dispatch(toggleModal({ isShow: false }));
                dispatch(closeModal());
              }}>
              x
            </CloseButton>
          )}
          <ModalSection>{children}</ModalSection>
        </ModalContainer>
      </ModalLayout>
    </React.Fragment>
  );
};
