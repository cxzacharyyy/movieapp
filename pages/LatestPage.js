import React from "react";
import MovieList from "../components/MovieList";

export default function LatestPage({ navigation }) {
  return <MovieList title="Latest" category="latest" navigation={navigation} />;
}
