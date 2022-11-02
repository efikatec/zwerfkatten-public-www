import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  RegularBreakpoints,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  TileHeader,
  TileMedia,
  TileContent,
  TileActions,
  Tile,
} from "./TileCard";
import DocTeaser from "./DocTeaser";
import castrationContentTable from "../CastrationPage/content-table";
import straycatsContentTable from "../StrayCatsPage/content-table";
import introducingCatsContentTable from "../IntroducingCatsPage/content-table";
import LinkIconBtn from "../../components/LinkIconBtn";

const TileWho = (
  <Tile>
    <TileHeader title={"Wie zijn we ?"} />

    <TileContent>
      We zijn een kleine groep vrijwilligers die als gemeenschappelijk doel
      hebben om de zwerfkattenpopulatie te beperken door het onvruchtbaar maken
      van zwerfkatten in{" "}
      <b>
        <big>Oudenaarde</big>
      </b>
      . Daardoor blijft aan veel katten en kitten angst en leed bespaard.
    </TileContent>
  </Tile>
);

const Banner = (() => {
  const Image = (
    <Box
      component="img"
      sx={{
        display: "block",
        width: "100%",
        height: "auto",
        margin: 0,
        padding: 0,
      }}
      alt="Banner"
      src="/images/banner.jpg"
    />
  );

  return (
    <Grid
      container
      spacing={{
        xs: 0,
      }}
      columns={{ xs: 1, sm: 1, lg: 2 }}
    >
      <Grid item xs={1}>
        {Image}
      </Grid>

      <Grid item xs={1}>
        {TileWho}
      </Grid>
    </Grid>
  );
})();

const TileDinnerparty = (
  <Tile>
    <TileHeader title={"Eetfestijn op 27/11/2022"} />
    <TileContent>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "auto",
        }}
        alt="Eetfestijn op 27/11/2022"
        src="/images/IMG-20220822-WA0001.jpg"
      />
    </TileContent>
  </Tile>
);

const TileCastratie = (() => {
  const docUrl = "/castration";

  return (
    <Tile>
      <TileHeader title={"Castratie van katten"} />
      <TileMedia img={"/images/schaar.jpg"} alt={"Castratieschaar"} />
      <TileContent>
        <DocTeaser docUrl={docUrl} contentTable={castrationContentTable}>
          Naast de wettelijke verplichting zijn er talrijke voordelen om katten,
          inclusief huiskatten, te castreren.
        </DocTeaser>
      </TileContent>
      <TileActions moreInfoUrl={docUrl} />
    </Tile>
  );
})();

const TileWhat = (() => {
  return (
    <Tile>
      <TileHeader title={"Wat doen we ?"} />
      <TileContent>
        <Typography variant="body1" gutterBottom>
          U kan bij ons ook terecht voor:
        </Typography>
        <List dense sx={{ pl: 0, pb: 0, pt: 0 }}>
          {[
            <>
              Aanvragen voor castratie van zwerfkatten
              <br />
              mits mededeling aan
              <LinkIconBtn
                tooltip={"Email naar Dienst Milieu van Oudenaarde"}
                icon={<EmailOutlinedIcon fontSize="small" />}
                href={"mailto:milieu@oudenaarde.be"}
              >
                Dienst mileu Oudenaarde
              </LinkIconBtn>
            </>,
            <>Hulp bij aangereden of zieke katten die geen eigenaar hebben</>,
            <>Aflezen van chip</>,
            <>
              Kleinschalige opvang van kitten jonger dan 10 weken en tamme
              katten in gastgezinnen indien beschikbaar
            </>,
            <>Beleidsvragen en wetgeving rond zwerfkatten</>,
            <>Advies voor huisvesting en juiste verzorging van katten</>,
          ].map((one, index) => (
            <ListItem key={index} dense>
              <ListItemIcon sx={{ minWidth: 0 }}>
                <ArrowRightIcon />
              </ListItemIcon>
              <Typography variant="body1" gutterBottom>
                {one}
              </Typography>
            </ListItem>
          ))}
        </List>
      </TileContent>
    </Tile>
  );
})();

const TileStrayCats = (() => {
  const docUrl = "/stray-cats";

  return (
    <Tile>
      <TileHeader title={"Zwerfkatten in uw tuin"} />
      <TileMedia img={"/images/stray-cats.jpg"} alt={"Zwerfkatten"} />
      <TileContent>
        <DocTeaser docUrl={docUrl} contentTable={straycatsContentTable}>
          Zwerfkatten in uw tuin. Wat nu ?
        </DocTeaser>
      </TileContent>
      <TileActions moreInfoUrl={docUrl} />
    </Tile>
  );
})();

const TileCatsIntroduction = (() => {
  const docUrl = "/introducing-cats";

  return (
    <Tile>
      <TileHeader title={"Katten introduceren"} />
      <TileMedia
        img={"/images/cats_together.jpg"}
        alt={"Katten introduceren"}
      />
      <TileContent>
        <DocTeaser docUrl={docUrl} contentTable={introducingCatsContentTable}>
          Katten zijn territoriale dieren. Daar moet men rekening mee houden als
          men een tweede kat in huis neemt als men al een kat heeft.
        </DocTeaser>
      </TileContent>
      <TileActions moreInfoUrl={docUrl} />
    </Tile>
  );
})();

// https://developers.facebook.com/docs/groups-api/guides#getting-group-posts

const TileUnderContruction = (
  <Tile>
    <TileHeader title={"Berichten in de media"} />
    <TileContent>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "auto",
        }}
        alt="Under construction"
        src="/images/png.monster-97.webp"
      />
    </TileContent>
  </Tile>
);

const HomePage = () => {
  const tiles: [JSX.Element, RegularBreakpoints][] = [
    [TileDinnerparty, { xs: 1, sm: 2, lg: 1 }],
    [TileWhat, { xs: 1, sm: 2, lg: 2 }],
    [TileCastratie, { xs: 1 }],
    [TileStrayCats, { xs: 1 }],
    [TileCatsIntroduction, { xs: 1 }],
    [TileUnderContruction, { xs: 1 }],
  ];

  return (
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 2,
        lg: 3,
      }}
      columns={{ xs: 1, sm: 2, lg: 3 }}
    >
      <Grid item xs={2} sm={2} lg={3}>
        {Banner}
      </Grid>

      {tiles.map((one, index) => (
        <Grid item key={index} {...one[1]}>
          {one[0]}
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
