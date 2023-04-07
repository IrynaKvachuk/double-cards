import React from 'react';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  shouldCloseOnOverlayClick?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const Modal: React.FC<Props> = (props) => {
  const {
    isOpen,
    onOpen = () => {},
    onClose = () => {},
    shouldCloseOnOverlayClick = false,
    className,
    children
  } = props;
  const body = document.querySelector('body') as HTMLBodyElement;

  if (isOpen) {
    body.classList.add('body--modal-open');
    onOpen();
  }
  if (!isOpen && body.classList.contains('body--modal-open')) {
    body.classList.remove('body--modal-open');
  }

  return isOpen
    ? createPortal(
        <section
          data-testid="modal"
          className={`modal ${className}`}
          onClick={(event) => {
            const target = event.target as HTMLDivElement;
            target.classList.contains('modal') && shouldCloseOnOverlayClick && onClose && onClose();
          }}
        >
          <div className="modal__content">
            {children}
            <button
              data-testid="button-close"
              className="modal__button-close game-app_btn double-cards_btn"
              onClick={onClose}
            >
              &#9587;
            </button>
          </div>
        </section>,
        body
      )
    : null;
};

export default Modal;
