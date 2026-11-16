import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>R</Text>
      </View>
      <Text style={styles.name}>Reelhouse Member</Text>
      <Text style={styles.message}>
        This is your profile. Your watch history and saved films will show up here later.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 28,
    backgroundColor: "#f4f6f7",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#e56b4b",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  avatarText: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#17212b",
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: "#66717b",
    textAlign: "center",
    lineHeight: 20,
  },
});
