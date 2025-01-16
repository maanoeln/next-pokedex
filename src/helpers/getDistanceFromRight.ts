const getDistanceFromRight = (element: HTMLElement | null): number => {
  const rect = element && element.getBoundingClientRect();
  if (rect) {
    return window.innerWidth - rect.right;
  }
  return 0;
};

export default getDistanceFromRight;
