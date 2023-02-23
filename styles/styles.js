import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fontStyle: {
    fontFamily: "comfortaa-bold",
  },

  screenContainer: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    padding: 14,
  },

  screenContent: {
    paddingBottom: 48,
  },

  textBlock: {
    fontFamily: "comfortaa-regular",
    lineHeight: 24,
    paddingVertical: 6,
  },

  textTitle: {
    paddingVertical: 6,
    textAlign: "center",
    fontFamily: "comfortaa-bold",
  },

  appContainer: {
    flex: 1,
    margin: 2,
  },

  audioPlayer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },

  audioTouchable: {
    margin: 16,

    padding: 12,
    paddingLeft: 14,

    height: 41,
    width: 41,

    borderRadius: 4,
    borderWidth: 1,
    borderColor: "teal",
  },

  menuPadding: {
    paddingLeft: 16,
  },

  menuItemBorder: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },

  menuItemBlock: {
    paddingVertical: 12,
  },

  listPadding: {
    paddingLeft: 36,
  },

  listItemMargin: {
    paddingVertical: 2,
  },

  highlight: {
    color: "teal",
  },

  linkIcon: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  linkView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
