import { Reducer } from 'redux';
import { ModalContent, ModalTypes, MODAL_CLOSE, MODAL_OPEN } from './ModalTypes';

type ModalState = {
  modalContent: ModalContent;
};

const initialState: ModalState = {
  modalContent: 'none'
};

const modalReducer: Reducer<ModalState, ModalTypes> = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        modalContent: action.payload.content
      };
    case MODAL_CLOSE:
      return {
        ...state,
        modalContent: 'none'
      };
    default:
      return state;
  }
};

export default modalReducer;
