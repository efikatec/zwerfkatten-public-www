import { List, Link, ListItem, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpIcon from "@mui/icons-material/Http";
import { IChaptersContent } from "../../models/doc";
import { Paragraph, DocListItem } from "../../components/doc2page";

const chaptersContent: IChaptersContent = {
  "d8bfcabf-91c0-4ac3-a984-0b9b5439b762": (
    <Paragraph>
      In 2014 kwamen meer dan 30.000 katten in Belgische asielen terecht.
      <br />
      Over 10.000 katten kregen een spuitje omdat ze niet konden geplaatst
      worden….
    </Paragraph>
  ),
  "f3047dd6-a785-4378-952c-7b1a21451f88": (
    <Paragraph>
      Het steriel maken van jouw kattin en kater heeft enkel voordelen:
      <List dense>
        {[
          "geen sproeien, geen nachtelijk krijsen omwille van paringsgedrag",
          "minder ziekten worden overgedragen door vechten",
          "minder kans op borsttumoren bij de kattin",
        ].map((one, index) => (
          <DocListItem key={index} primary={one} />
        ))}
      </List>
    </Paragraph>
  ),
  "4d24c2bb-a2a3-423a-915c-4c51f9e1c7c4": (
    <Paragraph>
      In 2014 kwamen meer dan 30.000 katten in Belgische asielen terecht.
      <br />
      Over 10.000 katten kregen een spuitje omdat ze niet konden geplaatst
      worden….
    </Paragraph>
  ),
  "2bed21f6-1ce9-491b-8a2e-2a037d7b577c": (
    <Paragraph>
      Niet gewenste katten en overtollige nesten worden nog steeds gedumpt door
      onverantwoorde eigenaars.
      <br />
      Jaarlijks worden alleen in Oudenaarde en omgeving 150 – 200 katten gemeld
      voor castratie aan
      <Typography variant="body1" component="span">
        Operatie Zwerfkat vzw
      </Typography>
      van mensen die zich over achtergelaten katten ontfermen.
    </Paragraph>
  ),
  "8fccf36a-3eb0-4ec6-b197-2a2e0d55af3a": (
    <Paragraph>
      Alle katten die verkocht of weggeven worden, moeten vooraf gecastreerd en
      gechipt worden.
      <br />
      Vanaf 1 april 2018 moeten alle klibraryatten die geboren zijn na
      31/03/2017 gecastreerd en gechipt worden.
    </Paragraph>
  ),
  "a702f2fa-8042-497d-a6ed-fbccb22853e9": (
    <Paragraph>
      <List dense>
        <ListItem>
          <Link
            component="a"
            target="_blank"
            rel="noreferrer"
            href="mailto:dierenwelzijn@vlaanderen.be"
            underline="hover"
            variant="body1"
            color="text.primary"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailOutlinedIcon />
              <Typography variant="body1" component="span">
                Vlaanderen Dierenwelzijn
              </Typography>
            </Stack>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            component="a"
            target="_blank"
            rel="noreferrer"
            href="http://www.lne.be/meer-themas/dierenwelzijn"
            underline="hover"
            variant="body1"
            color="text.primary"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <HttpIcon />
              <Typography variant="body1" component="span">
                Vlaanderen Dierenwelzijn
              </Typography>
            </Stack>
          </Link>
        </ListItem>
      </List>
    </Paragraph>
  ),
};

export default chaptersContent;
