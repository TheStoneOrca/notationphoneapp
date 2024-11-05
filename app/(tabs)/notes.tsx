import { StyleSheet, View, Text, Button } from "react-native";

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text>Notes</Text>
      <Button title="New Note" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
