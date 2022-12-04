import { useWindowDimensions } from "react-native";

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
}
