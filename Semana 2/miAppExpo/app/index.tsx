import { StyleSheet, View } from "react-native";
import { HelloWorldApp } from "./components/HelloWorldApp";

export default function Index() {
  return (
    <View style={styles.contenedor}>
      <HelloWorldApp nombres={["Melitón", "Diego", "Aaron"]} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  }
})
