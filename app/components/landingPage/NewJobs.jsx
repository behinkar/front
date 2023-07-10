import React from 'react'
import { AiOutlineDown } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

function NewJobs() {
  return (
    <div class="rounded-lg relative flex flex-col justify-between p-4 shadow-md grow text-gray-700 bg-gray-50 my-4 max-h-[550px] overflow-hidden">
      <p className="font-black mb-6">جدیدترین فرصت های شغلی</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,index)=>(

      <AdsCard key={index} title='عنوان آگهی' />
        ))}
        
      </div>
      <div className="absolute bg-gray-100 flex items-center gap-4 cursor-pointer justify-center py-2 bottom-0 left-0 right-0 font-bold ">
        نمایش بیشتر 
        <AiOutlineDown
              size={15}
              className=' cursor-pointer hover:scale-105'
              color=""
              
            />
      </div>
    </div>
  )
}

export default NewJobs


function AdsCard({title}) {
  return (
    <>
      <div class="rounded-lg flex flex-col justify-between p-4 shadow-md grow text-gray-700 bg-gray-50 ">
        <div className="flex justify-between mb-8">
          <p className="p-2 text-xl">{title}</p>
          <BsBookmark
              size={25}
              className=' cursor-pointer hover:scale-105'
              color=""
              
            />

        </div>
        <div className="flex   items-center gap-4 ">
          <div className="inline-block  bg-gray-600 text-sm hover:bg-blue-600 text-white font-bold w-6 h-6 rounded focus:outline-none focus:shadow-outline transition duration-300"></div>
          <p className="">اسم شرکت</p>
        </div>
      </div>
    </>
  );
}