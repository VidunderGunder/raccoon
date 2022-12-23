import { forwardRef, useRef, useState } from "react";
import Canvas from "../threejs/Canvas";
import { useFrame } from "../threejs";
import View, { ViewProps, ViewType } from "../design/View";
import RaccoonMesh from "./meshes/Raccoon";
import { PerspectiveCamera } from "@react-three/drei";
import { Mesh } from "three";
import { useSpring } from "@react-spring/three";

export type RaccoonSimulatorProps = {
  //
} & Omit<Partial<ViewProps>, "children">;
export type RaccoonSimulatorType = ViewType;

export default forwardRef<RaccoonSimulatorType, RaccoonSimulatorProps>(
  function RaccoonSimulator({ ...props }, ref) {
    return (
      <View
        ref={ref}
        sx={{
          flexGrow: 1,
          width: "100%",
        }}
        {...props}
      >
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <PerspectiveCamera
            makeDefault
            position={[0, 5, 10]}
            rotation={[-0.5, 0, 0]}
            fov={35}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
            onUpdate={(self) => self.updateProjectionMatrix()}
          />
          <Raccoon />
        </Canvas>
      </View>
    );
  },
);

const Raccoon = () => {
  const mesh = useRef<Mesh>(null);
  const [squeezed, setSqueezed] = useState(false);

  // Make Raccoon jump every 3 seconds using react-spring
  const { position, rotation } = useSpring<{
    position: typeof Mesh.prototype.position;
    rotation: typeof Mesh.prototype.rotation;
  }>({
    from: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    to: async (next) => {
      while (1) {
        const oldYRotation = mesh?.current?.rotation.y ?? 0;
        const random = (Math.random() * Math.PI) / 4 - Math.PI / 8;
        const newYRotation = oldYRotation + random;

        await next({
          position: [0, squeezed ? 0.025 : 0.1, 0],
          rotation: [0, newYRotation, 0],
          config: {
            velocity: [0, 0.001, 0],
            damping: 0.75,
            clamp: true,
            tension: 100,
            friction: 10,
          },
          delay: 2000,
        });
        await next({
          position: [0, squeezed ? -0.05 : 0, 0],
          config: {
            damping: 0.25,
            clamp: true,
            tension: 100,
            friction: 10,
          },
        });
      }
    },
    config: {
      mass: 1,
    },
  });

  // Make Raccoon jump every 3 seconds using react-three-fiber
  useFrame(() => {
    if (squeezed) {
      mesh.current?.scale.set(1.125, 0.825, 1.125);
      return;
    }
    const swell = 0.01;
    const time = Date.now() / 250;
    const scale = Math.sin(time) * swell * 0.5 + 1;
    const oppositeScale = Math.sin(time) * -swell + 1;
    mesh.current?.scale.set(oppositeScale, scale, oppositeScale);
  });

  return (
    <>
      <RaccoonMesh
        ref={mesh}
        position={position}
        rotation={rotation}
        onPointerDown={() => {
          setSqueezed(true);
          mesh.current?.scale.set(1, 0.5, 1);
          mesh.current?.position.set(0, -0.05, 0);
        }}
        onPointerUp={() => {
          setSqueezed(false);
          mesh.current?.position.set(0, 0, 0);
        }}
        onPointerLeave={() => {
          setSqueezed(false);
          mesh.current?.position.set(0, 0, 0);
        }}
      />
    </>
  );
};
