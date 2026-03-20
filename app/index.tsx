import {
  StyleSheet
} from "react-native";
import App from "./App";

export default function Index() {
  

  return (
    <App />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#1e1e2f",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#2e2e40",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#6c63ff",
    borderRadius: 10,
    paddingHorizontal: 18,
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 22,
  },
  taskItem: {
    backgroundColor: "#2e2e40",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    color: "#fff",
    fontSize: 16,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  delete: {
    color: "#ff6b6b",
    fontSize: 18,
    marginLeft: 10,
  },
});