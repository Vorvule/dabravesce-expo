import * as React from "react";

import Slider from "@react-native-community/slider";

export default function AudioSlider({ sliderValue}) {
  return (
    <Slider
      style={{ width: "100%", paddingTop: 30, height: 60 }}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#555555"
      maximumTrackTintColor="#AAAAAA"
      thumbTintColor="teal"
      value={sliderValue}
    />
  );
}
