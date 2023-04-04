export type Dispatch<A> = (value: A) => void;
export type SetStateAction<S> = S | ((prevState: S) => S);

export type Timer = {
  hours: number;
  minutes: number;
  seconds: number;
};
