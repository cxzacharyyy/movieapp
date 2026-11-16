import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Receives a single movie through props and shows the poster beside the text.
export default function MovieCard({ movie }) {
  return (
    <View style={styles.card}>
      <Image source={movie.image} style={styles.poster} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.meta}>{movie.year}  ·  ★ {movie.rating}</Text>
        <Text style={styles.desc} numberOfLines={3}>
          {movie.desc}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 11,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#e8ebee",
  },
  poster: {
    width: 76,
    height: 112,
    borderRadius: 9,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#17212b",
  },
  meta: {
    fontSize: 13,
    color: "#e56b4b",
    fontWeight: "600",
    marginTop: 2,
    marginBottom: 6,
  },
  desc: {
    fontSize: 13,
    color: "#66717b",
    lineHeight: 18,
  },
});
