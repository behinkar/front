import React from "react";

import TopMenuEmployer from "../components/share/TopMenuEmployer";
import { Footer, JobSuggestion } from "../components/landingPage";
import AdsPart from "../components/employer/AdsPart";
import ServicePart from "../components/employer/ServicePart";
import InfoPart from "../components/employer/InfoPart";
import MoreInfoPart from "../components/employer/MoreInfoPart";
import OperationCardEmployer from "../components/employer/OperationCard";

function PageEmployer() {
  return (
    <>
      <div className="mx-2">
        <TopMenuEmployer />
        <AdsPart />
        <JobSuggestion />
        <p className="text-xl md:text-3xl font-bold text-colorTitle text-center  my-20">
          خدمات اختصاصی برای کارفرمایان
        </p>
        <ServicePart />
        <InfoPart />
        <MoreInfoPart />
        <OperationCardEmployer />

        <Footer />
      </div>
    </>
  );
}

export default PageEmployer;
