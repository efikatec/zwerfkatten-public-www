import Grid from "@mui/material/Grid";
import Tile, { ITile } from "./Tile";
import Teaser from "./Teaser";
import castrationContentTable from "../CastrationPage/content-table";

const tiles: ITile[] = [
  {
    title: "Castratie van katten",
    img: "/images/schaar.jpg",
    alt: "Castratieschaar",
    Teaser: () => (
      <Teaser docUrl={"/castration"} contentTable={castrationContentTable}>
        Naast de wettelijke verplichting zijn er talrijke voordelen om katten,
        inclusief huiskatten, te castreren.
      </Teaser>
    ),
    moreInfoUrl: "/castration",
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
