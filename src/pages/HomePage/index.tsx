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
  IconButton,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
import {
  TileHeader,
  TileMedia,
  TileContent,
  TileActions,
  TileActionsAbsolute,
  Tile,
} from "./TileCard";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import DocTeaser from "./DocTeaser";
import castrationContentTable from "../CastrationPage/content-table";
import straycatsContentTable from "../StrayCatsPage/content-table";
import twentyYearsContentTable from "../TwentyYearsPage/content-table";
import introducingCatsContentTable from "../IntroducingCatsPage/content-table";
import LinkIconBtn from "../../components/LinkIconBtn";
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceIcon from "@mui/icons-material/Place";
import { Paragraph } from "../../components/doc2page";
import { red } from "@mui/material/colors";

function LinkPhoneBtn(props: { tel: string; putCaption?: boolean }) {
  const enrichtedProps = {
    putCaption: true,
    ...props,
    internationNbr: ["+32", props.tel.slice(1)].join(" ").replaceAll(" ", ""),
  };

  return (
    <>
      <LinkIconBtn
        tooltip={enrichtedProps.tel}
        icon={<PhoneIcon />}
        href={["tel", enrichtedProps.internationNbr.replaceAll(" ", "")].join(
          ":"
        )}
      />
      {enrichtedProps.putCaption && (
        <Typography component="span" variant="inherit">
          {["(", enrichtedProps.tel, ")"].join("")}
        </Typography>
      )}
    </>
  );
}

function LinkMonikaPhoneBtn() {
  return <LinkPhoneBtn tel="0477 270 753" />;
}

function LinkAngeliquePhoneBtn() {
  return <LinkPhoneBtn tel="0478 593 572" />;
}

function LinkVerdaPhoneBtn() {
  return <LinkPhoneBtn tel="0497 506 336" />;
}

function LinkKurtPhoneBtn() {
  return <LinkPhoneBtn tel="0474 990 121" />;
}

const PersonCard = (props: {
  name: string;
  img: string;
  PhoneLink: JSX.Element;
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

            {props.PhoneLink}
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
      <Paragraph>
        We zijn een kleine groep vrijwilligers die als gemeenschappelijk doel
        hebben om de zwerfkattenpopulatie te beperken door het onvruchtbaar
        maken van zwerfkatten in{" "}
        <b>
          <big>Oudenaarde</big>
        </b>
        . Daardoor blijft aan veel katten en kitten angst en leed bespaard.
      </Paragraph>
      <Paragraph>
        <Accordion sx={{ marginTop: "16px" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Ons bestuur</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <PersonCard
                name="Monika"
                img="/images/cat-looking.jpg"
                PhoneLink={<LinkMonikaPhoneBtn />}
                description="Oprichter en voorzitter, administrator, beleidsvragen, vangacties, opvang voor adopties"
              />
              <PersonCard
                name="Angelique"
                img="/images/cat-looking.jpg"
                PhoneLink={<LinkAngeliquePhoneBtn />}
                description="Bestuurslid en secretaris, fondsenwerving (eetfestijn, paaseieren)"
              />
              <PersonCard
                name="Verda"
                img="/images/cat-looking.jpg"
                PhoneLink={<LinkVerdaPhoneBtn />}
                description="Bestuurslid, fondsenwerving (eetfestijn, paaseieren)"
              />
              <PersonCard
                name="Kurt"
                img="/images/cat-looking.jpg"
                PhoneLink={<LinkKurtPhoneBtn />}
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
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Ons team</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Verda</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Verda komt regelmatig in actie als vangster van zwerfkatten en
                  zorgt ook voor de voedselbedeling van enkele kolonies. Ook
                  staat ze in voor de organisatie van de paaseierenactie en het
                  benefiet eten eind november. Ze kwam in ons bestuur ook als
                  moeder van dierenarts Veerle waar we al heel lang met
                  samenwerken. Ikzelf ontmoette Veerle als vrijwilliger in het
                  asiel ‘De helpende pootjes’. Op dat moment was ze bezig met
                  haar studies voor dierenarts.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Angelique</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Angelique heb ik eveneens leren kennen in het asiel waar we,
                  samen met Els en Elke, de zorgen voor de katten deelden. Zij
                  volgde toen haar opleiding sociaal werkster en was nog geen
                  mama. Ikzelf zat toen tussen twee loopbanen – einde contract
                  als onderzoeker in de moleculaire biologie van de Gentse
                  universiteit en vanaf 1997 in dienst van de Vlaamse overheid
                  als beleidsadviseur voor biotechnologie in Brussel. Angelique
                  is ook samen met Steven aan de leiding van de organisatie van
                  het jaarlijkse Eetfestijn.{" "}
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Margot</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Margot was laatstejaars student jura wanneer ze begon mee te
                  helpen in de vzw na een tip van onze gemeenschappelijke
                  huisarts als iemand die zeer geïnteresseerd is in het beleid
                  voor dierenwelzijn. Sindsdien is ze een zeer welkome aanwinst
                  in het team. Zij verzorgt mee de administratie en helpt, samen
                  met Angelique, mee bij de organisatie van activiteiten.
                  Hierbij wordt ze ook ondersteund door haar ouders.{" "}
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Olivia</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Olivia woonde – ook lang geleden – naast een boerderij met
                  heel veel katten waarvan de meeste vrij ziek waren (o.a.
                  niesziekte). Dit was de eerste keer dat we samenwerkten. Zij
                  was toen ook al katten aan het verzorgen in het Gentse en is
                  later zelf een asiel begonnen. Uiteindelijk leek het beter om
                  de krachten te bundelen en is ze nu een zeer efficiënte
                  zwerfkattenvangster, opvanggezin voor de moeilijkere gevallen
                  en vaak niet te plaatsen oude en zieke katjes.{" "}
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Dagmar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Van Dagmar krijg ik regelmatig ondersteuning in de boekhouding
                  en de administratie en balansen opmaken en aanvragen voor
                  subsidies voorbereiden, wat heel veel van mijn tijd in beslag
                  neemt. En zeg zelf wie doet dat nu graag? Dagmar ken ik sinds
                  haar <i>optreden</i> in het asiel waarbij ze op zoek was naar
                  opvang voor haar kat toen ze naar Duitsland ging om haar
                  familie te bezoeken. Sindsdien oefenen we ook wat <i>hoog</i>{" "}
                  Duits en Oostenrijks met elkaar.
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Jacqueline</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Jacqueline belde, ook jaren geleden, om te klagen over katten
                  in haar buurt die blijkbaar niet de nodige verzorging kregen
                  (o.a. sproeiende katers? …). Ze vroeg me wat ik kon doen om
                  dit probleem aan te pakken. Dit is opgelost geraakt en
                  sindsdien neemt ze, na het overlijden van mijn partner Jean,
                  de verzorging over van mijn zwerfkattenkolonie voor haar
                  rekening wanneer ik bij mijn familie in Oostenrijk op bezoek
                  ga.{" "}
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Sonja en Filip</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Sonja en Filip zijn een onafscheidelijk koppel dat van katten
                  houdt. Zij komen wekelijks langs en zetten zich met hart en
                  ziel in om mijn boel hier recht te houden. Sonja verzorgt de
                  wisselende opvangertjes en Filip helpt me vooral met de
                  infrastructuur buiten. Ze zijn beide heel zot van Bompa maar
                  dat is weer een ander verhaal.{" "}
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Sylvia</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Sylvia ving al veel papflessers op. Vermits dit veel energie
                  vergt is ze ondertussen overgeschakeld naar de gewone opvang.
                  Tevens neemt ze de coördinatie van de opvanggezinnen op zich,
                  de opvolging van onze interne databank en de (verplichte)
                  Vlaamse databank Animal Shelter. Dit was voordien het terrein
                  van Kurt die echter door een verandering in zijn professionele
                  activiteiten voor dit onderdeel diende af te haken.{" "}
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Kurt</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Kurt heeft een heel goede hand in het opstellen van
                  formulieren en het schrijven van heldere teksten. Hij verzorgt
                  ook nog de selectie van de kandidaat-adoptanten, start nieuwe
                  opvanggezinnen op en vangt samen met echtgenote Katrien en
                  dochter Febe nog jaarlijks (enkele) nestjes op.{" "}
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Marleen</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Marleen die alle meldingen op facebook in de gaten houdt en
                  aan de alarmbel trekt als wij volgens haar dienen tussen te
                  komen.{" "}
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography style={{ fontWeight: 600 }}>
                    De opvanggezinnen
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Last – but not least - de opvanggezinnen die ervoor zorgen dat
                  de kittens en jonge katjes gesocialiseerd worden in de omgang
                  met mensen en andere dieren. Zij zorgen ervoor dat ze hun vaak
                  moeilijke start met parasieten en ziektes achter zich kunnen
                  laten en zich zodoende tot leuke, sociale en gezonde katjes
                  kunnen ontwikkelen. Hier wil ik vooral Fiona en Dirk, Nikita
                  en haar kindjes, Lynn en Graciella vermelden en danken voor
                  hun toewijding.{" "}
                </AccordionDetails>
              </Accordion>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Paragraph>
      {/* <Paragraph sx={{ marginTop: "24px" }}>
        Met de oprichting van de vzw (samen met Jean en Els) is er wel een zware
        verantwoordelijkheid voor de voorzitster vrijwilligster verbonden.
        Ondanks alle hulp ben ik onophoudelijk bezig met plannen en uitvoeren
        van vangacties, opvangen en bijhouden van ‘pluts’katten, onderhouden van
        goede contacten met de lokale politie en gemeentediensten, en de
        provinciale en Vlaamse overheden. Hier komt dus een hoop administratie
        en boekhouding bij kijken. Opvang en asielwerking was eigenlijk nooit de
        initiële intentie van Operatie Zwerfkat vzw. Je kan er als organisatie
        binnen een zwerfkattenbeleid evenwel niet onderuit gezien het jaarlijks
        nog steeds terugkerend aantal kittens van zwerfmoeders en de tamme
        volwassen dieren die door mensen in de steek gelaten worden. Zij
        verdienen allen ook een goede thuis en een veilige toekomst.
      </Paragraph> */}
    </TileContent>
  </Tile>
);

const BannerWho = (() => {
  // const Image = (
  //   <Box
  //     component="img"
  //     sx={{
  //       display: "block",
  //       width: "100%",
  //       height: "auto",
  //       margin: 0,
  //       padding: 0,
  //     }}
  //     alt="2 katten in een boom"
  //     src="/images/koala-katjes.jpg"
  //   />
  // );

  const Gallery = (() => {
    const images = [
      "IMG-20240324-WA0004.jpg",
      "IMG-20231207-WA0005.jpg",
      "IMG-20240324-WA0005.jpg",
      "IMG-20240324-WA0007.jpg",
      "IMG-20240324-WA0015.jpg",
      "IMG-20240324-WA0016.jpg",
    ].map((one) => ({
      original: "/gallery/" + one,
    }));

    return (
      <ImageGallery
        items={images}
        showNav={false}
        showPlayButton={false}
        autoPlay={true}
        slideDuration={350}
      />
    );
  })();

  return (
    <Grid
      container
      spacing={{
        xs: 0,
      }}
      columns={{ xs: 1, sm: 1, lg: 2 }}
    >
      <Grid item xs={1}>
        {Gallery}
      </Grid>

      <Grid item xs={1}>
        {TileWho}
      </Grid>
    </Grid>
  );
})();

// const TileWishes2023 = (
//   <Tile>
//     <TileHeader title={"Beste wensen voor 2023"} />
//     <TileContent>
//       <Box
//         component="img"
//         sx={{
//           width: "100%",
//           height: "auto",
//         }}
//         alt="Beste wensen voor 2023"
//         src="/images/wensen-2023.jpg"
//       />
//     </TileContent>
//   </Tile>
// );

const TileEaster = (
  <Tile>
    <TileHeader title={"Lekkere paaseieren te koop"} />
    <TileContent>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "auto",
        }}
        alt="Lekkere paaseieren te koop"
        src="/images/paaseieren.jpg"
        // src="/images/happy-easter-images-download.jpg"
      />
      <Typography variant="subtitle1" gutterBottom>
        Pasen nadert en er zijn weer lekkere paaseieren te koop t.v.v. de
        zwerfkatten. <br></br>
        200 gr gevulde choco eitjes fondant, wit en melk praliné voor 6 euro.
        <br></br>
        Je kan ze afhalen/bestellen bij:
        <List dense sx={{ pl: 0, pb: 0, pt: 0 }}>
          {[
            {
              name: "Verda",
              lnk: LinkVerdaPhoneBtn,
            },
            {
              name: "Monika",
              lnk: LinkMonikaPhoneBtn,
            },
            {
              name: "Angelique",
              lnk: LinkAngeliquePhoneBtn,
            },
          ].map((one, index) => (
            <ListItem key={index} dense>
              <ListItemIcon sx={{ minWidth: 0 }}>
                <ArrowRightIcon />
              </ListItemIcon>
              {one.name}
              {<one.lnk />}
            </ListItem>
          ))}
        </List>
        Meerdere zakjes kunnen we wel aan huis brengen. Vanaf aankoop van 15
        zakjes is een zakje gratis!
        <br></br>
        <br></br>
        <Typography paragraph variant="body1">
          Ieder Euro die we hier aan verdienen zal welbesteed worden, zoals
          vorig jaar
        </Typography>
        {
          <List dense sx={{ pl: 0, pb: 0, pt: 0 }}>
            {[
              "rond € 7.000 aan voeding",
              "meer dan € 11.000 voor medicatie, behandelingen en operaties",
            ].map((one, index) => (
              <ListItem key={index} dense>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <ArrowRightIcon />
                </ListItemIcon>
                {one}
              </ListItem>
            ))}
          </List>
        }
      </Typography>
    </TileContent>
  </Tile>
);

// const TileDinnerparty = (
//   <Tile>
//     <TileHeader title={"Eetfestijn op 24/11/2024"} />
//     <TileContent>
//       <Stack direction="column" spacing={5}>
//         <Stack direction="row" spacing={0}>
//           <Box
//             component="img"
//             sx={{
//               width: "100%",
//               height: "auto",
//             }}
//             alt="Eetfestijn van 24/11/2024"
//             src="/images/eetfestijn-2024.jpg"
//           />
//         </Stack>
//       </Stack>
//     </TileContent>
//   </Tile>
// );

const TileTwentyYears = (() => {
  const docUrl = "/twenty-years-page";

  return (
    <Tile>
      <TileHeader title={"Operatie Zwerfkat 20 jaar in actie"} />

      <TileContent>
        <DocTeaser docUrl={docUrl} contentTable={twentyYearsContentTable}>
          20 jaren in wel en wee samengevat
        </DocTeaser>
      </TileContent>
      <TileActions moreInfoUrl={docUrl} />
    </Tile>
  );
})();

const BannerTwentyYears = (() => {
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
      alt="Operatie Zwerfkat is 20 jaar"
      src="/images/dsc_8314.jpg"
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
        {TileTwentyYears}
      </Grid>
    </Grid>
  );
})();

// const TileExposition = (
//   <Tile>
//     <TileHeader title={"Eetfestijn op 26/11/2023"} />
//     <TileContent>
//       <Stack direction="column" spacing={5}>
//         <Stack direction="row" spacing={0}>
//           <Box
//             component="img"
//             sx={{
//               width: "100%",
//               height: "auto",
//             }}
//             alt="Eetfestijn van 26/11/2023"
//             src="/images/tentoonstelling.pdf"
//           />
//         </Stack>
//       </Stack>
//     </TileContent>
//   </Tile>
// );

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

const TileAnimalShelter = (() => {
  const url = "https://www.adopteereendier.be";

  return (
    <Tile>
      <TileHeader title={"Onze vrienden van Animal Shelter"} />
      <TileContent>
        <iframe
          src="https://www.adopteereendier.be/dierenasielen/operatie-zwerfkat-vzw/iframe"
          width="100%"
          height="720"
        ></iframe>
      </TileContent>
      <TileActionsAbsolute moreInfoUrl={url} />
    </Tile>
  );
})();

// https://developers.facebook.com/docs/groups-api/guides#getting-group-posts

// const TileUnderContruction = (
//   <Tile>
//     <TileHeader title={"Berichten in de media"} />
//     <TileContent>
//       <Box
//         component="img"
//         sx={{
//           width: "100%",
//           height: "auto",
//         }}
//         alt="Under construction"
//         src="/images/png.monster-97.webp"
//       />
//     </TileContent>
//   </Tile>
// );

// const TilePhotoGallery = (() => {
//   const images = [
//     "20230913_153945_resized.jpg",
//     "IMG-20231014-WA0003.jpg",
//     "IMG-20231226-WA0001.jpg",
//     "IMG-20240324-WA0004.jpg",
//     "IMG-20240324-WA0009.jpg",
//     "IMG-20240324-WA0014.jpg",
//     "20231119_190738_resized.jpg",
//     "IMG-20231029-WA0002.jpg",
//     "IMG-20240206-WA0004.jpg",
//     "IMG-20240324-WA0005.jpg",
//     "IMG-20240324-WA0010.jpg",
//     "IMG-20240324-WA0015.jpg",
//     "IMG-20230625-WA0001.jpg",
//     "IMG-20231207-WA0005.jpg",
//     "IMG-20240207-WA0000.jpg",
//     "IMG-20240324-WA0006.jpg",
//     "IMG-20240324-WA0011.jpg",
//     "IMG-20240324-WA0016.jpg",
//     "IMG-20230922-WA0002.jpg",
//     "IMG-20231213-WA0002.jpg",
//     "IMG-20240226-WA0000.jpg",
//     "IMG-20240324-WA0007.jpg",
//     "IMG-20240324-WA0012.jpg",
//     "IMG-20240324-WA0017.jpg",
//     "IMG-20230925-WA0000.jpg",
//     "IMG-20231213-WA0004.jpg",
//     "IMG-20240324-WA0003.jpg",
//     "IMG-20240324-WA0008.jpg",
//     "IMG-20240324-WA0013.jpg",
//     "Messenger_creation_a989a528-0383-46e8-8126-2b505b864b76.jpeg",
//   ].map((one) => ({
//     original: "/gallery/" + one,
//   }));

//   return (
//     <Tile>
//       <TileHeader title={"Smaakmakende foto's"} />
//       <TileContent>
//         <ImageGallery items={images} />;
//       </TileContent>
//     </Tile>
//   );
// })();

const HomePage = () => {
  const tiles: [JSX.Element, RegularBreakpoints][] = [
    // [TileEaster, { xs: 1, sm: 2, lg: 3 }],
    [TileAnimalShelter, { xs: 1, sm: 2, lg: 3 }],
    // [BannerTwentyYears, { xs: 1, sm: 2, lg: 3 }],
    [BannerWho, { xs: 1, sm: 2, lg: 3 }],
    // [TileWishes2023, { xs: 1, sm: 2, lg: 1 }],
    // [TileExposition, { xs: 1, sm: 2, lg: 3 }],
    // [TileDinnerparty, { xs: 1, sm: 2, lg: 1 }],
    [TileWhat, { xs: 1, sm: 2, lg: 2 }],
    [TileStrayCats, { xs: 1 }],
    [TileCastratie, { xs: 1 }],
    [TileCatsIntroduction, { xs: 1 }],
    // [TilePhotoGallery, { xs: 1, sm: 2, lg: 3 }],
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
