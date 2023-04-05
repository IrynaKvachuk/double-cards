export type Dispatch<A> = (value: A) => void;
export type SetStateAction<S> = S | ((prevState: S) => S);

export type Timer = {
  minutes: number;
  seconds: number;
};
