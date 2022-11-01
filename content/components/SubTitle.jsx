import { useWindowDimensions } from "react-native";

import Title from "./Title";

import { sizeFont } from "../../functions/device";

export default function SubTitle({ children }) {
  const { width, height } = useWindowDimensions();

  return <Title styling={sizeFont(width, height, 15, 17)}>{children}</Title>;
}
