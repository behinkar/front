"use client";
import React from "react";
import data from "../../app/components/data/data.json";
function page() {
  function convert(dataIn) {
    const tenders = [];
    for (let tender of dataIn.gridModel) {
      const city = tender.operationCityName;
      const deadline = tender.proposalDeadlineDate;

      const province = tender.operationProvinceName;
      tenders.push({
        number: tender.number,
        title: tender.title,
        estimatePrice: tender.financialEstimatePrice,
        openingDate: tender.openingDate,
        deadline: deadline,
        organization: tender.organization.name,
        city: city,
        province: province,
      });
    }
    console.log("tenders", tenders);
    return tenders;
  }
  return (
    <>
      <div className="p-4 flex flex-col gap-4 bg-gray-100">
        {convert(data).map((item, index) => (
          <div key={index} className=" border p-4 rounded-md bg-blue-200">
            <p className="text-center"> {item.title}</p>
            <div className="">
              <p className="">{item.estimatePrice}</p>
              <p className="">{item.openingDate}</p>
              <p className="">{item.deadline}</p>
              <p className="">{item.organization}</p>
              <p className="">{item.city}</p>
              <p className="">{item.province}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default page;
