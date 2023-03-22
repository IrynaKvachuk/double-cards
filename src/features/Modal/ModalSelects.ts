import { RootStateT } from '../../store/rootReducer';
import { ModalContent } from './ModalTypes';

export const selectModal = (state: RootStateT): ModalContent => state.modal.modalContent;
