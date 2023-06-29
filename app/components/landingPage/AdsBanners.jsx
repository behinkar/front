import React from "react";

function AdsBanners() {
  return (
    <div className="flex justify-center gap-4 max-w-5xl mx-auto">
      <Banner />
      <Banner />
    </div>
  );
}

export default AdsBanners;

// inner componnet

function Banner() {
  return (
    <>
      <div class="rounded-lg p-4 shadow-md grow bg-gray-50">
        hi dont have resume?//
        <div className="flex justify-end">
          <button className="inline-block mt-6 bg-gray-600 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300">
            ورود
          </button>
        </div>
      </div>
    </>
  );
}
