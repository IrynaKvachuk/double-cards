import { DispatchT, SetStateAction } from '../../../../../features/_common/types';

type OnResizeBtnClick = {
  setShowResizeTable: DispatchT<SetStateAction<boolean>>;
};

export const onResizeBtnClick = (props: OnResizeBtnClick) => {
  const { setShowResizeTable } = props;

  setShowResizeTable((prevState) => !prevState);
};
