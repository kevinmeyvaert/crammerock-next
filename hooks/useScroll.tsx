import { useLayoutEffect, useState } from 'react';

export function useScroll() {
  const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
  const [scrollY, setScrollY] = useState(bodyOffset.top);

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    if (bodyOffset.top > -370) {
      setScrollY(-bodyOffset.top);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
  };
}
