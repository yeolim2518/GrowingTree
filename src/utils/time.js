export const throttle = (fn, time) => {
  let timer = 0;

  return () => {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      fn();
      timer = 0;
    }, time);
  };
};