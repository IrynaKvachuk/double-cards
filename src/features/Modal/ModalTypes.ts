export type ModalContent = 'WinPopup' | 'none';

export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

interface OpenModal {
  type: typeof MODAL_OPEN;
  payload: { content: ModalContent };
}

interface CloseModal {
  type: typeof MODAL_CLOSE;
}

export type ModalTypes = OpenModal | CloseModal;
