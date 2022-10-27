import contentTable from "./content-table";
import captersContent from "./chapters-content";
import Doc2Page from "../../components/doc2page";

const StrayCatsPage = () => {
  return (
    <Doc2Page contentTable={contentTable} captersContent={captersContent} />
  );
};

export default StrayCatsPage;
