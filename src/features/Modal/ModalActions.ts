import { ModalContent, ModalTypes, MODAL_CLOSE, MODAL_OPEN } from './ModalTypes';

export const openModal = (input: ModalContent): ModalTypes => ({
  type: MODAL_OPEN,
  payload: { content: input }
});

export const closeModal = (): ModalTypes => ({
  type: MODAL_CLOSE
});
