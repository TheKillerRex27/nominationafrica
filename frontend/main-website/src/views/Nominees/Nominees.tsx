import "react";
import NomineesList from "./components/NomineesList";
import PageHeader from "../../components/PageHeader";

const pageHeaderProps = {
  pageTitle: "Recent Nominees",
  pageDesc: "The latest sites that we offer to your liking. We need your votes!",
  pageCrumb: "Nominees",
}

function Nominees() {
  return (
    <>
      <PageHeader pageTitle={pageHeaderProps.pageTitle} pageDesc={pageHeaderProps.pageDesc} pageCrumb={pageHeaderProps.pageCrumb} />
      <NomineesList />
    </>
  );
}

export default Nominees;
