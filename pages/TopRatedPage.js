import React from "react";
import MovieList from "../components/MovieList";

export default function TopRatedPage({ navigation }) {
  return <MovieList title="Top Rated" category="topRated" navigation={navigation} />;
}
