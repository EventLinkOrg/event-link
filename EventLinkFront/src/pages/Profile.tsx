import { Field, Form } from "react-final-form";
import { Sidebar, SidebarItem, SidebarProps } from "../components/Sidebar";
import { BiAddToQueue } from "react-icons/bi";
import { BsFillTicketFill } from "react-icons/bs";
import { BsCalendar3EventFill } from "react-icons/bs";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { Outlet } from "react-router-dom";

const SIDEBAR_MENU: SidebarItem[] = [
  {
    name: "Events",
    icon: <BsCalendar3EventFill />,
    path: "user-events",
  },
  {
    name: "Tickets",
    icon: <BsFillTicketFill />,
    path: "tickets",
  },
  {
    name: "Add Event",
    icon: <HiOutlineViewGridAdd />,
    path: "add-event",
  },
];

const Profile = () => {
  return (
    <div className="flex flex-row">
      <Sidebar items={SIDEBAR_MENU} />
      <div className="card-body w-screen">
        <div className="navbar rounded-md ">
          <div className="card-body">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile };
