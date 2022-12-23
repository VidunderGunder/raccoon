import { forwardRef } from "react";
import View, { ViewProps, ViewType } from "../design/View";

type RenameMeType = ViewType;
type RenameMeProps = {
  // Custom props here
} & ViewProps;

export default forwardRef<RenameMeType, RenameMeProps>(function RenameMe(
  { children, sx, ...props },
  ref,
) {
  return (
    <View
      ref={ref}
      {...props}
      sx={(theme) => ({
        // Custom styles here
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      {children}
    </View>
  );
});
