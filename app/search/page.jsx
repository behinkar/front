import React from "react";
import SearchPart from "../components/searchPage/SearchPart";
import { Footer, TopMenu } from "../components/landingPage";
import ResultPart from "../components/searchPage/ResultPart";

function page() {
  return (
    <div className="px-4">
      <TopMenu />
      <SearchPart />
      <ResultPart/>
      <Footer />
    </div>
  );
}

export default page;
