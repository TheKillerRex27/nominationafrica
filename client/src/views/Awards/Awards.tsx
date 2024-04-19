import "react";
import AwardsList from "./components/AwardsList";
import PageHeader from "../../components/PageHeader";

const pageHeaderProps = {
  pageTitle: "Award Winners",
  pageDesc: "Most popular sites in the past week. Evaluation is closed.",
  pageCrumb: "Awards",
}

function Awards() {
  return (
    <>
      <PageHeader pageTitle={pageHeaderProps.pageTitle} pageDesc={pageHeaderProps.pageDesc} pageCrumb={pageHeaderProps.pageCrumb} />
      <AwardsList />
    </>
  );
}

export default Awards;
