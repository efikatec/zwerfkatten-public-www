import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, CardMedia, Stack } from "@mui/material";

const Error404Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
     setTimeout(() => navigate("/"), 2000);
  }, []);

  return (
    <Container maxWidth="sm">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Typography variant="h2" component="h1" color="secondary">
          Error 404
        </Typography>

        <CardMedia
          component="img"
          width="100%"
          height="auto"
          image="/images/cat-looking.jpg"
          alt="Pagina niet gevonden"
          sx={{  objectFit: "contain" }}
        />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          {["Gezocht", "maar niet gevonden"].map((one, index) => (
            <Typography key={index} variant="h3" component="span" color="primary">
              {one}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Error404Page;
