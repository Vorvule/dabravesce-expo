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

  static logoStyle() {
    const { width } = useWindowDimensions();
    
    const screenPadding = 14 * 2;

    const logoWidth = Math.min(width, 600) - screenPadding;

    return { width: logoWidth, height: logoWidth / 4, alignSelf: "center" };
  }
}
