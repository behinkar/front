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
        <p className=" font-bold text-colorTitle text-center text-3xl my-20">
          خدمات اختصاصی برای کارفرمایان
        </p>
      </div>
    </>
  );
}

export default PageEmployer;
