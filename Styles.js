import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    width: "100%",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 75,
    marginBottom: 30,
  },
  logoText: {
    fontSize: 36,
    textAlign: "center",
    color: "yellow",
    marginBottom: 50,
  },
  landingPageImage: {
    width: "80%",
    height: "35%",
    marginBottom: 30,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: "transparent",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    width: "90%",
    height: 60,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 25,
    padding: 20,

    borderWidth: 1,
  },
  textInputText: {
    fontFamily: "Cairo-Bold",
  },
  landingScreenButton: {
    fontFamily: "Cairo-Regular",
    width: "90%",
    height: 60,
    backgroundColor: "#ffee1d",
    margin: 10,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 25,
  },

  landingScreenButtonContainer: {
    fontFamily: "Cairo-Regular",
    width: "100%",
    height: "30%",
    backgroundColor: "transparent",

    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
  },

  ButtonText: {
    fontFamily: "Cairo-ExtraBold",
    fontSize: 16,
  },
  loginScreenText: {
    fontFamily: "Cairo-ExtraBold",
    color: "#ffee1d",
    alignSelf: "baseline",
    left: "10%",
  },
  habitTrackerContainer: {
    flex: 1,

    backgroundColor: "black",
    width: "100%",
    alignItems: "center",
  },
  habitCardContainer: {
    width: "90%",
    height: 100,

    backgroundColor: "#181a19",
    borderRadius: 25,
    flexDirection: "row",

    margin: 10,
  },
  profileIconContainer: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    backgroundColor: "black",
  },
  profileImage: {
    borderRadius: 100,
    width: 50,
    height: 50,
    //borderColor: "#ffe200",
    borderColor: "#ffee1d",
    borderWidth: 2,
    left: 20,
    alignSelf: "center",
  },
  profileIconContainerLogo: {},
});
