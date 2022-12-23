import { forwardRef } from "react";
import { Mesh } from "three";

type BoxProps = {
  size?: number;
  color?: string;
} & JSX.IntrinsicElements["mesh"];

export default forwardRef<Mesh, BoxProps>(function Cuxel(
  { size = 1 / 8, color = "#31313a", children, ...props }: BoxProps,
  ref,
) {
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} />
      {children}
    </mesh>
  );
});
