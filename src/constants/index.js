import { MdOutlineDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { CgStack } from "react-icons/cg";
import { RiCoupon5Line } from "react-icons/ri";
import { BsQuestionLg } from "react-icons/bs";

export const SidebarData = [
  {
    id: "1",
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
    path: "/dashboard",
  },
  {
    id: "2",
    name: "Analytics",
    icon: <FaUserTie />,
    path: "/analytics",
  },
  {
    id: "3",
    name: "Account Management",
    icon: <BiBriefcaseAlt2 />,
    path: "/account-management",
  },
  {
    id: "4",
    name: "Subcription & Events",
    icon: <CgStack />,
    path: "/subcription-events",
  },
  {
    id: "5",
    name: "Campaign Management",
    icon: <RiCoupon5Line />,
    path: "/campaign-management",
  },
  {
    id: "6",
    name: "Resource Management",
    icon: <BsQuestionLg />,
    path: "/resource-management",
  },
];
