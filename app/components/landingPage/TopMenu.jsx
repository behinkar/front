import Link from "next/link";
import React from "react";

function TopMenu() {
  return (
    <div className="flex p-6 px-8 justify-between">
      <div className="flex items-center gap-6">
        <Link href="/#">خانه</Link>
        <Link href="/#">فرصت های شغلی</Link>
        <Link href="/#">آکادمی</Link>
        <Link href="/#">رزومه ساز</Link>
        <Link href="/#">جستجو مشاغل</Link>
      </div>
      <div className="flex">
        <div className=""></div>
        <div className="font-black text-colorTitle text-xl">بهین کار</div>
      </div>
    </div>
  );
}

export default TopMenu;
