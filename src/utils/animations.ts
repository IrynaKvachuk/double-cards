type SetAnimation = {
  element: HTMLDivElement;
  visible: boolean;
  name: string;
};

export const setAnimation = (props: SetAnimation) => {
  const { element, visible, name } = props;
  if (!element) return;

  if (visible) return element.classList.add(name);
  return element.classList.remove(name);
};
