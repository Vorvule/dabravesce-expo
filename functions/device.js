import { Platform, useWindowDimensions } from "react-native";

export function sizeFont(width, height, mobileFontSize, desktopFontSize) {
  const sizedFont = deviceIsMobile(width, height)
    ? { fontSize: mobileFontSize }
    : { fontSize: desktopFontSize };

  return sizedFont;
}

export function deviceIsMobile() {
  const { width, height } = useWindowDimensions();

  return width < 900 || height < 900;
}

export function minHeight() {
  const { height } = useWindowDimensions();

  const minHeight =
    Platform.OS == "web" && deviceIsMobile() ? height + 80 : height - 4;

  return minHeight;
}

export function showsVerticalScrollIndicator() {
  const showsVerticalScrollIndicator =
    Platform.OS == "web" && !deviceIsMobile ? false : true;

  return showsVerticalScrollIndicator;
}
