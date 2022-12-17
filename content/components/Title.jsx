import Block from "./Block";

import { DeviceSpecific } from "../../functions/DeviceSpecific";
import { styles } from "../../styles/styles";

export default function Title({ children, styler }) {
  return (
    <Block
      styler={[styles.textTitle, DeviceSpecific.sizedFont(16, 18), styler]}
    >
      {children}
    </Block>
  );
}
