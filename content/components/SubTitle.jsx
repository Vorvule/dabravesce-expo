import Title from "./Title";

import { DeviceSpecific } from "../../functions/DeviceSpecific";

export default function SubTitle({ children }) {
  return <Title styler={DeviceSpecific.sizedFont(15, 17)}>{children}</Title>;
}
