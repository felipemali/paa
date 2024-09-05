import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f7f7f7",
    padding: 20,
    marginTop: 20,
  },
  heartsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  heart: {
    marginLeft: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FFF",
  },
  titleUP: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
  },
  question: {
    fontSize: 24,
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
  },
  optionsContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  optionButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  optionButtonNext: {
    backgroundColor: "#4CAF50",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 50,
  },
  optionText: {
    fontSize: 18,
    color: "#fff",
  },
  optionNext: {
    fontSize: 18,
    color: "#fff",
  },
  dataUser: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderColor: "#fff", // Define a cor da borda
    borderRadius: 0, // Define cantos arredondados
  },
  dark: {
    ...StyleSheet.absoluteFillObject, // Preenche toda a área
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor preta com 50% de opacidade
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});
