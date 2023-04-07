import React from 'react';

type Props = {
  children?: React.ReactNode;
  classList?: string;
};

const Container: React.FC<Props> = (props: Props) => {
  const { children, classList = '' } = props;

  return <section className={`game-app_container ${classList}`}>{children}</section>;
};

export default Container;
