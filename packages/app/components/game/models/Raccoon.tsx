import { forwardRef, useRef, useEffect, useState } from "react";
import { useFrame } from "../../threejs";
import { Mesh } from "three";
import Cuxel from "./Cuxel";

type BoxProps = JSX.IntrinsicElements["mesh"];

export default forwardRef<Mesh, BoxProps>(function Raccoon(
  props: BoxProps,
  ref,
) {
  const mesh = useRef<Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // useFrame(({ clock }) => {
  //   // if (mesh.current !== null) mesh.current.rotation.y += 0.01;
  //   if (mesh.current !== null)
  //     mesh.current.rotation.y = clock.getElapsedTime() * 0.2;
  // });

  useEffect(() => {
    if (mesh.current !== null) mesh.current.rotation.z = 6;
    if (mesh.current !== null) mesh.current.rotation.y = 6;
    if (mesh.current !== null) mesh.current.rotation.x = -6;
  }, []);

  return (
    <>
      <mesh
        {...props}
        ref={ref ?? mesh}
        scale={active ? 0.9 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <Cuxel position={[0, -0.1, 0.6]} scale={[1.5, 1, 4]} color="gray" />
        <Cuxel position={[0, -0.15, 0.6]} scale={[3, 1, 1]} color="gray" />
        <Cuxel position={[0, -0.075, 0.8]} scale={[1, 1, 1]} color="black" />

        <Cuxel position={[0, +0.05, 0.5]} scale={[7, 4, 0.5]} color="gray" />
        <Cuxel
          position={[0, +0.05, 0.5]}
          scale={[6.5, 3.5, 0.75]}
          color="black"
        />

        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#31313a"} opacity={hovered ? 0.8 : 1} />
      </mesh>
    </>
  );
});
