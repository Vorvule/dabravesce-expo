export function sizeFont(deviceWidth, deviceHeight, mobileSize, desktopSize) {
  const deviceIsMobile = deviceWidth < 900 || deviceHeight < 900;

  return deviceIsMobile ? { fontSize: mobileSize } : { fontSize: desktopSize };
}
