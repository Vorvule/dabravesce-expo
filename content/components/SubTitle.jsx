import Title from "./Title";

import { DeviceSpecific } from "../../functions/DeviceSpecific";

export default function SubTitle({ children }) {
  return <Title styling={DeviceSpecific.sizedFont(15, 17)}>{children}</Title>;
}
