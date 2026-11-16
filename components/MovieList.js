import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { MOVIES } from "../data/movies";
import MovieCard from "./MovieCard";

// Reusable list: receives title, category and navigation as props.
export default function MovieList({ title, category, navigation }) {
  const filtered = MOVIES.filter((movie) => movie.categories.includes(category));

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>{title}</Text>
        <Pressable onPress={() => navigation.navigate("Movies")}>
          <Text style={styles.back}>Back to categories</Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f6f7",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#17212b",
  },
  back: {
    fontSize: 13,
    color: "#e56b4b",
  },
});
