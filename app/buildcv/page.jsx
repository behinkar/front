import React from "react";
import { TopMenu } from "../components/landingPage";
import ProgressPart from "../components/buildcv/ProgressPart";
import InfoCard from "../components/buildcv/InfoCard";

function page() {
  return (
    <>
      <TopMenu />
      <div className="grid grid-cols-[7fr,3fr] min-h-screen  gap-8 p-4">
        <div className=" h-full  p-4">
          <InfoCard />
        </div>
        <div className=" h-full border border-colorTitle rounded p-4">
          <ProgressPart />
        </div>
      </div>
    </>
  );
}

export default page;
