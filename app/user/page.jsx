import React from "react";
import { JobSuggestion, SearchPart, TopMenu } from "../components/landingPage";
import CardUser from "../components/user/CardUser";
import OperationCard from "../components/user/OperationCard";

function page() {
  return (
    <>
      <div className="">
        <TopMenu />
        {/* <SearchPart /> */}
        {/* <JobSuggestion /> */}
        <CardUser />
        <OperationCard />
      </div>
    </>
  );
}

export default page;
