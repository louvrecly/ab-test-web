import { useEffect, useRef } from "react";

/* Create custom effect hook useDidUpdateEffect to skip the effect from running in the initial render */
export function useDidUpdateEffect(fn: React.EffectCallback, inputs?: React.DependencyList) {
  const didMountRef = useRef<Boolean>(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, inputs); /* eslint-disable-line */
}
