import { StyleSheet } from "react-native";

import * as React from "react";

import { Video } from "expo-av"; // , AVPlaybackStatus

export default function ChapterVideo() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
  );
}

const styles = StyleSheet.create({
  video: {
    marginBottom: 16,
  },
});
