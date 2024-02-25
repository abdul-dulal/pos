/* eslint-disable react/jsx-key */

import { BiHome } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdRefresh } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { GoScreenFull } from "react-icons/go";
const TopHeader = () => {
  return (
    <div>
      <nav className="flex flex-wrap  sm:space-x-4  gap-x-3 gap-y-3 py-3">
        {[
          ["Dashboard", <BiHome />],
          ["Hill Valley", <CiLocationOn />],
          ["Hold", <MdRefresh />],
          ["Logout", <LuLogOut />],
          [<GoScreenFull />],
        ].map(([title, icon]) => (
          <li
            key={title}
            className="flex gap-1 cursor-pointer bg-primary list-none items-center px-3 py-1 text-[15px] font-normal text-white  rounded-sm"
          >
            <span> {icon}</span> {title}
          </li>
        ))}
      </nav>
    </div>
  );
};

export default TopHeader;
