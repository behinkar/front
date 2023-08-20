import React from 'react'


const data=[
    '1-تکمیل اطلاعات اولیه ',
'2-سوابق تحصیلی',
'3-اطلاعات پژوهشی',
'4-دوره‌های آموزشی',
'5-افتخارات',
'6-سوابق کاری و کارآموزی',
'7-فعالیت‌های اجتماعی',
'8-مهارت‌های نرم‌افزاری و زبان‌های خارجی',
'9-شبکه‌های اجتماعی',
]
function ConstructionProcesses() {
  return (
    <div className="my-16 max-w-5xl mx-auto px-4 text-[#2C4875] font-bold">
        <p className="text-center   text-xl  ">
        مراحل ساخت رزومه با رزومه ساز
        </p>
        {data.map((item,index)=>(
            <p key={index} className="my-8">{item}</p>
        ))}
    </div>
  )
}

export default ConstructionProcesses