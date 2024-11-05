import { StyleSheet, View, Text, Button } from "react-native";

export default function JoinPage() {
  const onClick = () => {
    console.log("Join is in progress.");
  };
  return (
    <View style={styles.container}>
      <Text>Join</Text>
      <Button onPress={onClick} title="Join" />
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
