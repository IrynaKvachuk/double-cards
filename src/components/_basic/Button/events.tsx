import { DispatchT, SetStateAction } from '../../../features/_common/types';

type ClickButton = {
  event: React.MouseEvent<HTMLButtonElement>;
  setIsLoading: DispatchT<SetStateAction<boolean>>;
  onClick: (props: Object) => void;
};

export const clickButton = (props: ClickButton) => {
  const { event, setIsLoading, onClick, ...rest } = props;
  onClick({ event, setIsLoading, ...rest });
};
