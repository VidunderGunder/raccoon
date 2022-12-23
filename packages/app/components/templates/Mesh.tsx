import { forwardRef } from "react";
import type { Mesh } from "three";

type BoxProps = JSX.IntrinsicElements["mesh"];

export default forwardRef<Mesh, BoxProps>(function Raccoon(
  props: BoxProps,
  ref,
) {
  return (
    <mesh {...props} ref={ref}>
      {/* Stuff here */}
    </mesh>
  );
});
