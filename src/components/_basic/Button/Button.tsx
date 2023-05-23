import React, { useEffect, forwardRef, ReactNode } from 'react';
import { useState } from 'react';
import Loader from '../../icons/Loader';
import { clickButton } from './events';
import ItemWrapper from '../ItemWrapper';

type Props = {
  ref?: React.ComponentPropsWithRef<typeof ButtonWrapper>;
  type?: 'submit' | 'button';
  title?: string;
  loading?: boolean;
  showLoader?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: (props: Object) => void;
};
type Ref = HTMLButtonElement;

const ButtonWrapper = forwardRef<Ref, Props>((props, ref) => {
  const {
    type = 'button',
    title = 'button',
    loading = false,
    showLoader = true,
    className = '',
    children,
    onClick = () => {},
    ...rest
  } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!showLoader) return;
    setIsLoading(loading);
  }, [loading, showLoader]);

  return (
    <ItemWrapper>
      <button
        ref={ref}
        className={`game-app_btn double-cards_btn ${className}`}
        title={title}
        type={type}
        onClick={(event) => clickButton({ event, setIsLoading, onClick, ...rest })}
      >
        {isLoading ? <Loader size={40} /> : children ? children : <div></div>}
      </button>
    </ItemWrapper>
  );
});

ButtonWrapper.displayName = 'Button';

export default ButtonWrapper;
