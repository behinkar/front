import React from "react";

import TopMenuEmployer from "../components/share/TopMenuEmployer";
import { JobSuggestion } from "../components/landingPage";
import AdsPart from "../components/employer/AdsPart";

function PageEmployer() {
  return (
    <>
      <div className="">
        <TopMenuEmployer />
        <AdsPart />
        <JobSuggestion />
      </div>
    </>
  );
}

export default PageEmployer;
