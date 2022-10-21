import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Paper,
} from "@mui/material";

interface ITileHeader {
  title: string;
}

interface ITileMedia {
  img: string;
  alt: string;
}

interface ITileActions {
  moreInfoUrl?: string;
}

export interface ITile extends ITileHeader, ITileMedia, ITileActions {
  Teaser: () => JSX.Element;
}

const TileHeader = ({ title }: ITileHeader) => (
  <CardHeader title={title}></CardHeader>
);

const TileMedia = ({ img, alt }: ITileMedia) => (
  <CardMedia
    component="img"
    width="100%"
    height="auto"
    image={img}
    alt={alt}
    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
  />
);

const TileActions = ({ moreInfoUrl }: Required<ITileActions>) => {
  const navigate = useNavigate();

  return (
    <CardActions>
      <Button
        variant="outlined"
        size="small"
        onClick={() => navigate(moreInfoUrl)}
      >
        Ik wil meer weten
      </Button>
    </CardActions>
  );
};

const Tile = ({ tile }: { tile: ITile }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <TileHeader title={tile.title} />
      <TileMedia img={tile.img} alt={tile.alt} />
      <CardContent>
        <Paper elevation={3}>
          <tile.Teaser />
        </Paper>
      </CardContent>
      {tile.moreInfoUrl ? (
        <TileActions moreInfoUrl={tile.moreInfoUrl} />
      ) : (
        <></>
      )}
    </Card>
  );
};

export default Tile;
