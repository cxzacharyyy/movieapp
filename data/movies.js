// Movie data. Categories: "latest", "topRated", "popular", "recommended"
// A movie can belong to more than one category.

export const MOVIES = [
  {
    id: 1,
    title: "The Lighthouse Keeper's Daughter",
    year: 2024,
    rating: 8.4,
    desc: "A girl grows up alone on a rocky coast and starts decoding the signals ships send at night.",
    image: require("../assets/images/lighthouse.jpg"),
    categories: ["popular", "topRated"],
  },
  {
    id: 2,
    title: "Salt & Static",
    year: 2025,
    rating: 7.9,
    desc: "Two radio hosts in a fishing town find a broadcast that shouldn't exist.",
    image: require("../assets/images/salt-static.jpg"),
    categories: ["latest", "recommended"],
  },
  {
    id: 3,
    title: "Paper Lanterns",
    year: 2023,
    rating: 8.7,
    desc: "A family restores a lantern festival after a decade, and old arguments come back with it.",
    image: require("../assets/images/lanterns.jpg"),
    categories: ["topRated", "popular", "recommended"],
  },
  {
    id: 4,
    title: "Last Train to Marrow",
    year: 2026,
    rating: 7.2,
    desc: "The final night run of a mountain railway carries a stranger with a locked suitcase.",
    image: require("../assets/images/marrow.jpg"),
    categories: ["latest"],
  },
  {
    id: 5,
    title: "Quiet Orchard",
    year: 2022,
    rating: 8.1,
    desc: "A retired teacher takes over a failing apple farm and the neighbors who come to help.",
    image: require("../assets/images/orchard.jpg"),
    categories: ["topRated", "recommended"],
  },
  {
    id: 6,
    title: "Neon Tides",
    year: 2026,
    rating: 7.6,
    desc: "A night-shift ferry pilot keeps meeting the same passenger in a city that never sleeps.",
    image: require("../assets/images/neon-tides.jpg"),
    categories: ["latest", "popular"],
  },
  {
    id: 7,
    title: "The Cartographer's Dog",
    year: 2021,
    rating: 8.9,
    desc: "After a mapmaker disappears, her dog leads a young apprentice along her last unfinished route.",
    image: require("../assets/images/cartographer.jpg"),
    categories: ["topRated", "popular"],
  },
  {
    id: 8,
    title: "Hollow Summer",
    year: 2025,
    rating: 7.4,
    desc: "Three cousins spend one strange summer in a house that keeps rearranging its rooms.",
    image: require("../assets/images/hollow-summer.jpg"),
    categories: ["latest", "popular", "recommended"],
  },
];

// Used by the Movies page. `screen` is the Tab.Screen name to navigate to.
export const CATEGORIES = [
  { id: "latest", title: "Latest", screen: "Latest", blurb: "Newest releases" },
  { id: "topRated", title: "Top Rated", screen: "TopRated", blurb: "Highest scores" },
  { id: "popular", title: "Popular", screen: "Popular", blurb: "What everyone is watching" },
  { id: "recommended", title: "Recommended", screen: "Recommended", blurb: "Picked for you" },
];
