import { Platform, useWindowDimensions } from "react-native";

export class DeviceSpecific {
  static deviceIsMobile() {
    const { width, height } = useWindowDimensions();

    return width < 900 || height < 900;
  }

  static sizedFont(mobileFontSize, desktopFontSize) {
    const sizedFont = this.deviceIsMobile()
      ? { fontSize: mobileFontSize }
      : { fontSize: desktopFontSize };

    return sizedFont;
  }

  static minHeight() {
    const { height } = useWindowDimensions();

    const minHeight =
      Platform.OS == "web" && this.deviceIsMobile() ? height + 88 : height - 4;

    return minHeight;
  }

  static showsVerticalScrollIndicator() {
    const showsVerticalScrollIndicator =
      Platform.OS == "web" && !this.deviceIsMobile() ? false : true;

    return showsVerticalScrollIndicator;
  }
}
