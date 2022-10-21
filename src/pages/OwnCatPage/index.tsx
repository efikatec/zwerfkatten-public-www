import { List } from "@mui/material";
import {
  IChapterTitle,
  IChapterContent,
  Paragraph,
  DocListItem,
  Doc,
} from "../../components/Doc";

export const chapterTitles: IChapterTitle[] = [
  {
    id: "d8bfcabf-91c0-4ac3-a984-0b9b5439b762",
    title: "Waarom katten steriliseren ?",
  },
  {
    id: "f3047dd6-a785-4378-952c-7b1a21451f88",
    title: "Is uw kat al gecastreerd ?",
  },
];

const chapterContents: IChapterContent = {
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
};

const OwnCatPage = () => {
  return (
    <Doc
      title="Weetjes over katten"
      chapterTitles={chapterTitles}
      chapterContents={chapterContents}
    />
  );
};

export default OwnCatPage;
