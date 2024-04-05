import { ListItemText } from "@mui/material";
import { IChaptersContent } from "../../models/doc";
import { Paragraph, DocPrimaryList } from "../../components/doc2page";

const chaptersContent: IChaptersContent = {
  d8bfcabf: (
    <Paragraph>
      Met een handvol vrijwilligers werden tijdens deze periode:
      <DocPrimaryList
        items={[
          "Meer dan 6000 katten steriel gemaakt",
          "Voor honderden kleine en grote zwervertjes een nieuwe thuis gezocht",
          "Tientallen zieke en gewonde katjes/kittens verzorgd, gered of uit hun lijden verlost",
          "Vangacties uitgevoerd om kittens en/of katten van een zwervertjesbestaan te behoeden of na castratie beter te verzorgen in hun gewone omgeving",
          "Informatieverspreiding uitgevoerd over wetgeving, dierenwelzijn en hoe katten beter te begrijpen",
        ].map((one) => (
          <ListItemText primary={one} />
        ))}
      />
    </Paragraph>
  ),
  f3047dd6: (
    <Paragraph>
      <DocPrimaryList
        items={[
          "Verplichte castratie voor eigenaarskatten",
          "Katten/kittens ter adoptie moeten steriel, gevaccineerd en gechipt/geregistreerd zijn",
          "Verantwoordelijkheid van de gemeente/stad m.b.t. zwerfkattenbeleid",
          "Overeenkomst met Stad Oudenaarde m.b.t. zwerfkattenbeleid",
          "Tussenkomst Stad Oudenaarde bij castratie zwerfkatten",
        ].map((one) => (
          <ListItemText primary={one} />
        ))}
      />
      Hierdoor is het aantal zwerfkatten in Oudenaarde duidelijk verminderd en
      kunnen alle plaatsbare/gesocialiseerde katten/kittens ook geadopteerd
      worden. Tevens is er bij sommige inwoners het besef gegroeid dat dieren
      houden ook geld kost. Echter blijft dit een continue inspanning aangezien
      niet iedereen op een correcte en vriendelijke manier omgaat met dieren.
    </Paragraph>
  ),
  "4d24c2bb": (
    <Paragraph>
      <DocPrimaryList
        items={[
          "Mensen die nog steeds hun verantwoordelijkheid niet willen opnemen en daardoor de zwerfkattenpopulatie in stand blijven houden. Het gebrek aan boetes, controles of de beperkte pakkans dragen hieraan grotendeels bij",
          "Een tekort aan noodzakelijke vrijwilligers die zich tijdens hun vrije tijd actief willen inzetten om mee te helpen het zwerfkattenbeheer uit te voeren. Daarbij komt het aspect van de verzorging van dieren, vangacties met vervoer naar dierenarts enz. regelmatig aan bod.",
          "De continue financiële strijd die dergelijke vzw’s moeten voeren om de rekeningen te kunnen blijven betalen en op die manier trachten te overleven",
        ].map((one) => (
          <ListItemText primary={one} />
        ))}
      />
    </Paragraph>
  ),
  "2bed21f6": (
    <Paragraph>
      <DocPrimaryList
        items={[
          "De maatschappelijke impact van een vzw zoals Operatie Zwerfkat wordt dikwijls onderschat",
          "Een overpopulatie aan zwerfkatten zorgt enerzijds niet enkel voor problemen binnen de kattenpopulatie zelf (incest, karakteriële afwijkingen, lichamelijke afwijkingen, …) maar zorgt er anderzijds ook voor dat bewoners zelf naar diverse dieronvriendelijke middelen grijpen        (o.a. vergif, vallen, …) om een overpopulatie te gaan beperken. Het is         bijgevolg belangrijk dat organisaties zoals Operatie Zwerfkat vzw aanwezig zijn binnen onze maatschappij, hierbij de nodige ondersteuning en erkenning krijgen waarbij de maatschappij bewust is over de noodzaak van dergelijke vzw’s",
          "Operatie Zwerfkat vzw verheugt zich dat zij over deze 20 jaar heel veel dierenleed heeft kunnen voorkomen. Een uitdaging waarop men zal blijven werken en waarbij men mensen zal blijven overtuigen op een andere manier om te gaan met katten. Want zeg nu zelf, wie kan weerstaan aan het schattig snoetje van een klein kittentje of lieve poes?",
        ].map((one) => (
          <ListItemText primary={one} />
        ))}
      />
    </Paragraph>
  ),
};

export default chaptersContent;
