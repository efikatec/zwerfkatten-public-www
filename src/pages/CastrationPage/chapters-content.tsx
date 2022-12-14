import { List, ListItemText, ListItem, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpIcon from "@mui/icons-material/Http";
import { IChaptersContent } from "../../models/doc";
import { Paragraph, DocPrimaryList } from "../../components/doc2page";
import LinkIconBtn from "../../components/LinkIconBtn";

const chaptersContent: IChaptersContent = {
  d8bfcabf: (
    <Paragraph>
      In 2014 kwamen meer dan 30.000 katten in Belgische asielen terecht.
      <br />
      Over 10.000 katten kregen een spuitje omdat ze niet konden geplaatst
      worden….
    </Paragraph>
  ),
  f3047dd6: (
    <Paragraph>
      Het steriel maken van jouw kattin en kater heeft enkel voordelen:
      <DocPrimaryList
        items={[
          "geen sproeien, geen nachtelijk krijsen omwille van paringsgedrag",
          "minder ziekten worden overgedragen door vechten",
          "minder kans op borsttumoren bij de kattin",
        ].map((one) => (
          <ListItemText primary={one} />
        ))}
      />
    </Paragraph>
  ),
  "4d24c2bb": (
    <Paragraph>
      In 2014 kwamen meer dan 30.000 katten in Belgische asielen terecht.
      <br />
      Over 10.000 katten kregen een spuitje omdat ze niet konden geplaatst
      worden….
    </Paragraph>
  ),
  "2bed21f6": (
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
  "8fccf36a": (
    <Paragraph>
      Alle katten die verkocht of weggeven worden, moeten vooraf gecastreerd en
      gechipt worden.
      <br />
      Vanaf 1 april 2018 moeten alle katten van eigenaars die geboren zijn na
      31/03/2014 gecastreerd en gechipt worden.
    </Paragraph>
  ),
  a702f2fa: (
    <Paragraph>
      <List dense>
        <ListItem>
          <LinkIconBtn
            tooltip={"Email naar Dierenwelzijn van Vlaanderen"}
            icon={<EmailOutlinedIcon />}
            href={"mailto:dierenwelzijn@vlaanderen.be"}
          >
            Vlaanderen Dierenwelzijn
          </LinkIconBtn>
        </ListItem>

        <ListItem>
          <LinkIconBtn
            tooltip={"Link naar Dierenwelzijn van Vlaanderen"}
            icon={<HttpIcon />}
            href={"http://www.lne.be/meer-themas/dierenwelzijn"}
          >
            Vlaanderen Dierenwelzijn
          </LinkIconBtn>
        </ListItem>
      </List>
    </Paragraph>
  ),
};

export default chaptersContent;
