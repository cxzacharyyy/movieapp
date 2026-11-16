import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>YOUR NEXT MOVIE NIGHT</Text>
      <Text style={styles.welcome}>Good stories{ "\n" }start here.</Text>
      <Text style={styles.sub}>A handpicked collection of films for whatever kind of night you’re having.</Text>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => navigation.navigate("Movies")}
      >
        <Text style={styles.buttonText}>Explore movies  →</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 26,
    backgroundColor: "#f4f6f7",
  },
  eyebrow: {
    color: "#e56b4b",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.7,
    marginBottom: 14,
  },
  welcome: {
    fontSize: 38,
    fontWeight: "800",
    color: "#17212b",
    lineHeight: 43,
    marginBottom: 14,
  },
  sub: {
    fontSize: 15,
    color: "#66717b",
    lineHeight: 23,
    fontSize: 15,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#e56b4b",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
