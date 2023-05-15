import { useRef } from 'react';

const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setFocus = () => {
    if (ref.current !== null) {
      ref.current.focus();
    }
  };

  return { ref, setFocus };
};

export default useFocus;
