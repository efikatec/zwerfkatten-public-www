import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  RegularBreakpoints,
  Stack,
  Grow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  CardMedia,
  Link,
  Tooltip,
  IconButton,
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
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceIcon from "@mui/icons-material/Place";

const PersonCard = (props: {
  name: string;
  img: string;
  tel: string;
  description: string;
}) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "row" }}>
      {/* <CardMedia
        component="img"
        sx={{ width: 80, objectFit: "contain" }}
        image={props.img}
        alt="avatar"
      /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography component="div" variant="h5">
              {props.name}
            </Typography>
            <LinkIconBtn
              tooltip={props.tel}
              icon={<PhoneIcon />}
              href={["tel", props.tel.replaceAll(" ", "")].join(":")}
            />
          </Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

const VetCard = (props: {
  name: string;
  img: string;
  url: string;
  map: string;
}) => {
  return (
    <Card
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CardMedia
        component="img"
        sx={{ height: 120, objectFit: "contain" }}
        image={props.img}
        alt="avatar"
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Stack
          direction={"column"}
          sx={{
            width: "100%",
          }}
        >
          <Stack direction={"row"}>
            <Link
              component="a"
              target="_blank"
              rel="noreferrer"
              href={props.url}
              underline="hover"
              variant="body1"
              color="text.primary"
              sx={{ whiteSpace: "nowrap" }}
            >
              <Typography component="div" variant="h5">
                {props.name}
              </Typography>
            </Link>

            <Link
              component="a"
              target="_blank"
              rel="noreferrer"
              href={props.map}
              underline="hover"
              variant="body1"
              color="text.primary"
              sx={{ whiteSpace: "nowrap" }}
            >
              <IconButton color="inherit">{<PlaceIcon />}</IconButton>
            </Link>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

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
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ons bestuur</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <PersonCard
              name="Monika"
              img="/images/cat-looking.jpg"
              tel="+32 477 270 753"
              description="Oprichter en voorzitter, administrator, beleidsvragen, vangacties, opvang voor adopties"
            />
            <PersonCard
              name="Angelique"
              img="/images/cat-looking.jpg"
              tel="+32 478 593 572"
              description="Bestuurslid en secretaris, fondsenwerving (eetfestijn, paaseieren)"
            />
            <PersonCard
              name="Verda"
              img="/images/cat-looking.jpg"
              tel="+32 497 506 336"
              description="Bestuurslid, fondsenwerving (eetfestijn, paaseieren)"
            />
            <PersonCard
              name="Dirk"
              img="/images/cat-looking.jpg"
              tel="+32 474 990 121"
              description="Coördinator gastgezinnen"
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Onze dierenartsen</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <VetCard
              name="Dierenarts De Temmerman"
              img="/images/dierenarts-de-temmerman.png"
              url="http://www.dierenartsoudenaarde.be/"
              map="https://goo.gl/maps/7EaYPh5r2DuUK4Nf7"
            />
            <VetCard
              name="Crius Dierenartsen"
              img="/images/crus.png"
              url="https://www.crius-dierenartsen.be/"
              map="https://goo.gl/maps/64i8euxreiuEAYcr6"
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
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
      alt="2 katten in een boom"
      src="/images/koala-katjes.jpg"
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

const TileWishes2023 = (
  <Tile>
    <TileHeader title={"Beste wensen voor 2023"} />
    <TileContent>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "auto",
        }}
        alt="Beste wensen voor 2023"
        src="/images/wensen-2023.jpg"
      />
    </TileContent>
  </Tile>
);

const TileDinnerparty = (
  <Tile>
    <TileHeader title={"Eetfestijn van 27/11/2022"} />
    <TileContent>
      <Typography variant="subtitle1" gutterBottom>
        Eetfestijn Operatie Zwerfkat is geslaagd !<br></br>
        Met dank aan alle gasten en de helpers !
      </Typography>
      <Stack direction="column" spacing={5}>
        <Stack direction="row" spacing={0}>
          <Box
            component="img"
            sx={{
              width: "50%",
              height: "auto",
            }}
            alt="Eetfestijn van 27/11/2022"
            src="/images/IMG-20220822-WA0001.jpg"
          />
          <Box
            component="img"
            sx={{
              width: "50%",
              height: "auto",
            }}
            alt="Dank u"
            src="/images/thank_you.jpg"
          />
        </Stack>
        <Typography variant="body2" gutterBottom>
          Vanwege het organisatiecomité : Angelique, Verda, Margot, Els en
          Monika.
        </Typography>
      </Stack>
    </TileContent>
  </Tile>
);

const TileCastratie = (() => {
  const docUrl = "/castration";

  return (
    <Tile>
      <TileHeader title={"Castratie van katten"} />
      <TileMedia
        img={"/images/it-is-a-boy.jpg"}
        alt={"Dierenarts die een kater vasthoudt"}
      />
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
                Dienst milieu Oudenaarde
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
      <TileMedia img={"/images/20210303_154522.jpg"} alt={"Zwerfkatten"} />
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
        img={"/images/20171007_162800.jpg"}
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
    [Banner, { xs: 1, sm: 2, lg: 3 }],
    [TileWishes2023, { xs: 1, sm: 2, lg: 1 }],
    [TileDinnerparty, { xs: 1, sm: 2, lg: 1 }],
    [TileWhat, { xs: 1, sm: 2, lg: 2 }],
    [TileStrayCats, { xs: 1 }],
    [TileCastratie, { xs: 1 }],
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
      {tiles.map((one, index) => (
        <Grow key={index} in={true} timeout={1000}>
          <Grid item {...one[1]}>
            {one[0]}
          </Grid>
        </Grow>
      ))}
    </Grid>
  );
};

export default HomePage;
