import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/movies";

export default function MoviesPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movies</Text>

      {CATEGORIES.map((cat) => (
        <Pressable
          key={cat.id}
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
          onPress={() => navigation.navigate(cat.screen)}
        >
          <Text style={styles.cardTitle}>{cat.title}</Text>
          <Text style={styles.cardBlurb}>{cat.blurb}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f6f7",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#17212b",
    marginBottom: 14,
  },
  card: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e8ebee",
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
  },
  cardPressed: {
    backgroundColor: "#efe9df",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#17212b",
  },
  cardBlurb: {
    fontSize: 13,
    color: "#66717b",
    marginTop: 4,
  },
});
