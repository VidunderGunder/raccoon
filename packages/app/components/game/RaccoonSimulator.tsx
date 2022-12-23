import { forwardRef } from "react";
import Canvas from "../threejs/Canvas";
import View, { ViewProps, ViewType } from "../design/View";
import Raccoon from "./models/Raccoon";

export type ThreeProps = {
  //
} & Omit<Partial<ViewProps>, "children">;
export type ThreeType = ViewType;

export default forwardRef<ThreeType, ThreeProps>(function Three(
  { ...props },
  /**
   * NB: Ref may have differing types on web and native (your IDE most likely only shows the native types)
   */
  ref,
) {
  return (
    <View
      ref={ref}
      sx={{
        flexGrow: 1,
        width: "100%",
      }}
      {...props}
    >
      <Canvas
        // Adjust field of view
        camera={{
          fov: 30,
          // Look down from above at an angle
          // position: [0, 0, 0],
          // rotation: [-Math.PI / 4, 0, 0],
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Raccoon position={[0, 0, 0]} />
      </Canvas>
    </View>
  );
});
