import { useRef, useEffect } from "react";

export default function useInterval(callback: Function, delay: number | null) {
  const savedCallBack = useRef<any>();

  useEffect(() => {
    savedCallBack.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallBack.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
