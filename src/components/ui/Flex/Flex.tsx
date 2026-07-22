import type { PropsWithChildren } from "react";
import type { FlexProps } from "./Flex.types.ts";
import styles from "./Flex.module.scss";

const Flex = ({ direction, children }: PropsWithChildren<FlexProps>) => {
  return (
    <div
      style={{
        flexDirection: direction,
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    ></div>
  );
};

Flex.displayName = "components.ui.Flex";
export default Flex;
