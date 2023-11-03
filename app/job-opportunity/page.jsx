import React from "react";
import {
  AdsBanners,
  Footer,
  HeroHeader,
  JobSuggestion,
  NewJobs,
  TopMenu,
  SearchPart,
} from "../components/landingPage";
import HeroPartCv from "../components/cvPage/HeroPart";

function JobOpportunity() {
  return (
    <div className="min-h-screen   px-4">
      <TopMenu />
      {/* <HeroHeader /> */}
      {/* <SearchPart /> */}
      <JobSuggestion />
      {/* <AdsBanners /> */}
      <NewJobs />
      <div className="my-12">
        <HeroPartCv />
      </div>
      <Footer />
    </div>
  );
}

export default JobOpportunity;
