import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";

export const TileHeader = ({ title }: { title: string }) => (
  <CardHeader title={title}></CardHeader>
);
export const TileMedia = ({ img, alt }: { img: string; alt: string }) => (
  <CardMedia
    component="img"
    width="100%"
    height="auto"
    image={img}
    alt={alt}
    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
  />
);
export const TileContent = ({ children }: PropsWithChildren) => (
  <CardContent>{children}</CardContent>
);

export const TileActions = ({ moreInfoUrl }: { moreInfoUrl: string }) => {
  const navigate = useNavigate();

  return (
    <CardActions>
      <Button
        variant="contained"
        color="info"
        size="small"
        onClick={() => navigate(moreInfoUrl)}
      >
        Ik wil meer weten
      </Button>
    </CardActions>
  );
};

export const Tile = ({ children }: PropsWithChildren) => {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        height: "100%",
        margin: 0,
        padding: 0,
        borderStyle: "none",
        boxShadow: "none",
      }}
    >
      {children}
    </Card>
  );
};
