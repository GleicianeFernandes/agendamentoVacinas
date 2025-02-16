import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    color: "#3FABB7",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  backButton: {
    position: "absolute",
    left: -120,
    top: 25,
  },
  container: {
    flex: 1,
    padding: 32,
    alignItems: "center",
    backgroundColor: "white",
    position: "relative",
  },
  wrapperVaccines: {
    flexDirection: "row",
    gap: 5,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
