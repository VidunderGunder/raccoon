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

  useFrame(({ clock }) => {
    // if (mesh.current !== null) mesh.current.rotation.y += 0.01;
    if (mesh.current !== null)
      mesh.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

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

        <Cuxel position={[0, -0.2, -0.55]} scale={[3, 3, 1]} color="#34343d" />
        <Cuxel position={[0, -0.2, -0.675]} scale={[3, 3, 1]} color="#434353" />
        <Cuxel position={[0, -0.2, -0.8]} scale={[3, 3, 1]} color="#34343d" />

        <boxGeometry args={[1, 0.8, 1]} />
        <meshStandardMaterial color={"#434353"} opacity={hovered ? 0.8 : 1} />
      </mesh>
    </>
  );
});
