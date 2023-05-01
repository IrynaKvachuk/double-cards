import { Dispatch, SetStateAction } from '../../../../../features/_common/types';

type OnResizeBtnClick = {
  setShowResizeTable: Dispatch<SetStateAction<boolean>>;
};

export const onResizeBtnClick = (props: OnResizeBtnClick) => {
  const { setShowResizeTable } = props;

  setShowResizeTable((prevState) => !prevState);
};
