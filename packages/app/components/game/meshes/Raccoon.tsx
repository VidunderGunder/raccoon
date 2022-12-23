import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Mesh } from "three";
import { animated } from "@react-spring/three";

type BoxProps = ComponentPropsWithoutRef<typeof animated.mesh>;

export default forwardRef<Mesh, BoxProps>(function Raccoon(
  props: BoxProps,
  ref,
) {
  return (
    <>
      <animated.mesh {...props} ref={ref}>
        <Cuxel position={[0, -0.1, 0.6]} scale={[1.5, 1, 4]} color="gray" />
        <Cuxel position={[0, -0.15, 0.6]} scale={[3, 1, 1]} color="gray" />
        <Cuxel position={[0, -0.075, 0.8]} scale={[1, 1, 1]} color="#0f0f0f" />
        <Cuxel
          position={[0, -0.15, 0.8]}
          scale={[1, 1, 0.25]}
          rotation={[0, 0, Math.PI / 4]}
          color="#853164"
        />

        <Cuxel
          position={[+0.175, +0.025, 0.5]}
          scale={[3, 2, 0.75]}
          rotation={[0, 0, -0.6]}
          color="#252529"
        />
        <Cuxel
          position={[-0.175, +0.025, 0.5]}
          scale={[3, 2, 0.75]}
          rotation={[0, 0, 0.6]}
          color="#252529"
        />

        <Cuxel
          position={[+0.175, +0.025, 0.51]}
          scale={[3.75, 2.5, 0.5]}
          rotation={[0, 0, -0.6]}
          color="gray"
        />
        <Cuxel
          position={[-0.175, +0.025, 0.51]}
          scale={[3.75, 2.5, 0.5]}
          rotation={[0, 0, 0.6]}
          color="gray"
        />

        <Cuxel
          position={[+0.175, +0.025, 0.5]}
          scale={[0.5, 0.5, 0.85]}
          color="white"
        />
        <Cuxel
          position={[-0.175, +0.025, 0.5]}
          scale={[0.5, 0.5, 0.85]}
          color="white"
        />

        <Cuxel
          position={[+0.225, 0.4125, 0.3]}
          scale={[2.25, 2.25, 0.25]}
          rotation={[0, 0, Math.PI / 4]}
          color="#434353"
        />
        <Cuxel
          position={[-0.225, 0.4125, 0.31]}
          scale={[1.5, 1.5, 0.25]}
          rotation={[0, 0, Math.PI / 4]}
          color="#7d4d8b"
        />

        <Cuxel
          position={[+0.225, 0.4125, 0.31]}
          scale={[1.5, 1.5, 0.25]}
          rotation={[0, 0, Math.PI / 4]}
          color="#7d4d8b"
        />
        <Cuxel
          position={[-0.225, 0.4125, 0.3]}
          scale={[2.25, 2.25, 0.25]}
          rotation={[0, 0, Math.PI / 4]}
          color="#434353"
        />

        <mesh scale={[0.9, 0.9, 0.9]} position={[0, -0.025, -0.05]}>
          <Cuxel
            position={[0, -0.225, -0.55]}
            scale={[2.675, 2.675, 1]}
            color="#34343d"
          />
          <Cuxel
            position={[0, -0.2, -0.675]}
            scale={[3, 3, 1]}
            color="#595969"
          />
          <Cuxel
            position={[0, -0.2, -0.8]}
            scale={[3.125, 3.125, 1]}
            color="#34343d"
          />
          <Cuxel
            position={[0, -0.225, -0.925]}
            scale={[2.5, 2.5, 1]}
            color="#595969"
          />
        </mesh>
        <boxGeometry args={[1, 0.8, 1]} />
        <meshStandardMaterial color={"#434353"} />
      </animated.mesh>
    </>
  );
});

type CuxelProps = {
  size?: number;
  color?: string;
} & JSX.IntrinsicElements["mesh"];

const Cuxel = forwardRef<Mesh, CuxelProps>(function Cuxel(
  { size = 1 / 8, color = "#31313a", children, ...props }: CuxelProps,
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
