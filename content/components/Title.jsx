import Block from "./Block";

import { DeviceSpecific } from "../../functions/DeviceSpecific";
import { styles } from "../../styles/styles";

export default function Title({ children, styling }) {
  return (
    <Block
      styling={[styles.textTitle, DeviceSpecific.sizedFont(16, 18), styling]}
    >
      {children}
    </Block>
  );
}
