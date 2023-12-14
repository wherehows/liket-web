import { RefObject, useRef, useState } from "react";

const useStateRef = <S>(
  defaultValue: S
): [S, (value: S) => void, RefObject<S>] => {
  const ref = useRef<S>(defaultValue);
  const [state, _setState] = useState<S>(defaultValue);
  const setState = (value: S) => {
    _setState(value);
    ref.current = value;
  };

  return [state, setState, ref];
};

export default useStateRef;
