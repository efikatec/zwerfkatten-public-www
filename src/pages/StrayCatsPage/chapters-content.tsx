import { ListItemText } from "@mui/material";
import { IChaptersContent } from "../../models/doc";
import {
  Paragraph,
  DocPrimaryList,
  DocSecondaryList,
} from "../../components/doc2page";

const chaptersContent: IChaptersContent = {
  "328d89fb": (
    <Paragraph>
      Na onze tussenkomst (zie onderaan): Gecastreerde katers en kattinnen
      worden rustiger omdat de hormonen om te paren en te vechten voor
      voortplanting uit hun lichaam verdwijnen samen met de straffe geur van de
      urine. Dat duurt wel enkele weken.
    </Paragraph>
  ),
  e2b7e460: (
    <Paragraph>
      <DocPrimaryList
        items={[
          "Je eigen katten zijn sowieso gecastreerd en gechipt",
          "Jaarlijkse vaccinatie beschermt hen voor niesziekte, kattenziekte en kattenleukemie (virussen)",
          "Regelmatig ontwormen en behandelen tegen ecto-parasieten (vlooien, teken, luizen, oormijt)",
          "voor de zwerfkatten kan je de volgende middelen gebruiken door in het eten te mengen",
        ].map((one) => (
          <ListItemText primary={one} />
        ))}
      />
      <DocSecondaryList
        items={[
          "panacur: wormen en giardia",
          "milbemax: wormen incluis lintwormen",
          "credelio: vlooien en teken",
        ].map((one) => (
          <ListItemText primary={one} />
        ))}
      />
      <DocPrimaryList
        items={[
          "om de hongerige zwervertjes buiten huis te houden gebruik je een kattenluik dat je kan programmeren op de chip van jouw kat dus geen halsbandje nodig",
        ].map((one) => (
          <ListItemText primary={one} />
        ))}
      />
    </Paragraph>
  ),
  "1d4b77ba": (
    <Paragraph>
      Ons eerste doel als vrijwilligers van Operatie Zwerfkat vzw (sinds 2004)
      is het, zwerfkatten onvruchtbaar te laten maken zodat er geen ongewenste
      nesten van voort komen. Dit wordt nu ook ondersteund door het
      gemeentelijke zwerfkattenbeleid (besluit Vlaamse overheid 2018).
      Verwilderde bange zwerfkatten worden terug gezet. Als ze daar niet gewenst
      zijn, moeten we wel eerst iemand vinden die ze wil opvangen bijv. in een
      manege, oude boerderij of dergelijke. Kitten en tamme katten kunnen voor
      adoptie aangeboden worden.
    </Paragraph>
  ),
  e9a42d62: (
    <Paragraph>
      Zwerfkatten zijn niet de schuld van de katten zelf of van de
      dierenbescherming! Het komt door mensen die hun verantwoordelijkheid niet
      opnemen. Het is nochtans een strafbaar feit om dieren aan hun lot over te
      laten! Daar is de laatste jaren dus nog de verplichting van castratie,
      chip en registratie voor eigenaarskatten bijgekomen.
    </Paragraph>
  ),
};

export default chaptersContent;
