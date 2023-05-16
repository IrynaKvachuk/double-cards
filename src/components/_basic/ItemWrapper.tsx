import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ItemWrapper: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return <div className="item-wrapper">{children}</div>;
};

export default ItemWrapper;
