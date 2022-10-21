import Grid from "@mui/material/Grid";
import Tile, { ITile } from "./Tile";
import OwnCatTeaser from "./OwnCatTeaser";

const tiles: ITile[] = [
  {
    title: "Mijn eigen katje",
    img: "/images/own-cat.jpg",
    alt: "Katje in een handpalm",
    Teaser: OwnCatTeaser,
    moreInfoUrl: "/own-cat"
  },
  {
    title: "Mijn eigen katje",
    img: "/images/own-cat.jpg",
    alt: "Katje in een handpalm",
    Teaser: OwnCatTeaser,
  },
  {
    title: "Mijn eigen katje",
    img: "/images/own-cat.jpg",
    alt: "Katje in een handpalm",
    Teaser: OwnCatTeaser,
  },
  {
    title: "Mijn eigen katje",
    img: "/images/own-cat.jpg",
    alt: "Katje in een handpalm",
    Teaser: OwnCatTeaser,
  },
  {
    title: "Mijn eigen katje",
    img: "/images/own-cat.jpg",
    alt: "Katje in een handpalm",
    Teaser: OwnCatTeaser,
  },
  {
    title: "Mijn eigen katje",
    img: "/images/own-cat.jpg",
    alt: "Katje in een handpalm",
    Teaser: OwnCatTeaser,
  },
];

const HomePage = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 2, lg: 3 }}
      columns={{ xs: 1, sm: 2, lg: 3 }}
    >
      {tiles.map((one, index) => (
        <Grid item xs={1} key={index}>
          <Tile tile={one} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
