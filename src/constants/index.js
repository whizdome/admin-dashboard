import { MdOutlineDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { CgStack } from "react-icons/cg";
import { RiCoupon5Line } from "react-icons/ri";
import { BsQuestionLg } from "react-icons/bs";
import ApLogo from "../assets/images/apLogo.png";
import AccessBankLogo from "../assets/images/access.png";
import UBA from "../assets/images/uba.png";

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

export const users = [
  {
    id: "962761",
    name: "First Bank",
    email: "apems@firstbank.com",
    type: "Standard",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
  },
  {
    id: "962762",
    name: "United Bank of Africa",
    email: "apems@ubagroup.com",
    type: "Gold",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqD7xJ06XxrDssN7j68ZR963BpSb0K5k8WQ&usqp=CAU",
  },
  {
    id: "962763",
    name: "First Bank",
    email: "apems@firstbank.com",
    type: "Standard",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
  },
  {
    id: "962764",
    name: "United Bank of Africa",
    email: "apems@ubagroup.com",
    type: "Gold",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqD7xJ06XxrDssN7j68ZR963BpSb0K5k8WQ&usqp=CAU",
  },
  {
    id: "962765",
    name: "First Bank",
    email: "apems@firstbank.com",
    type: "Standard",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
  },
  {
    id: "962766",
    name: "United Bank of Africa",
    email: "apems@ubagroup.com",
    type: "Gold",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqD7xJ06XxrDssN7j68ZR963BpSb0K5k8WQ&usqp=CAU",
  },
  {
    id: "962767",
    name: "First Bank",
    email: "apems@firstbank.com",
    type: "Standard",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
  },
  {
    id: "962768",
    name: "United Bank of Africa",
    email: "apems@ubagroup.com",
    type: "Gold",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqD7xJ06XxrDssN7j68ZR963BpSb0K5k8WQ&usqp=CAU",
  },
  {
    id: "962769",
    name: "First Bank",
    email: "apems@firstbank.com",
    type: "Standard",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
  },
  {
    id: "962770",
    name: "United Bank of Africa",
    email: "apems@ubagroup.com",
    type: "Gold",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqD7xJ06XxrDssN7j68ZR963BpSb0K5k8WQ&usqp=CAU",
  },

  {
    id: "9627771",
    name: "First Bank",
    email: "apems@firstbank.com",
    type: "Standard",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
  },
  {
    id: "962772",
    name: "United Bank of Africa",
    email: "apems@ubagroup.com",
    type: "Gold",
    date: "25/11/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqD7xJ06XxrDssN7j68ZR963BpSb0K5k8WQ&usqp=CAU",
  },
];

export const headers = [
  "APEMS ID",
  "Company Name",
  "Email",
  "Subscription Type",
  "Expiration Date",
];

export const dashboardAttendeeLocation = [
  {
    id: "1",
    venue: "Lagos",
    attendees: "325,000",
    change: "+5000",
    color: "green",
  },
  {
    id: "2",
    venue: "Abia",
    attendees: "225,000",
    change: "+1000",
    color: "green",
  },
  {
    id: "3",
    venue: "Cross River",
    attendees: "125,000",
    change: "+1000",
    color: "green",
  },
  {
    id: "4",
    venue: "Ogun",
    attendees: "95,000",
    change: "+1000",
    color: "red",
  },
  {
    id: "5",
    venue: "Imo",
    attendees: "125,000",
    change: "+1000",
    color: "green",
  },
  {
    id: "6",
    venue: "Anambra",
    attendees: "125,000",
    change: "+1000",
    color: "green",
  },
  {
    id: "7",
    venue: "Rivers",
    attendees: "125,000",
  },
  {
    id: "8",
    venue: "Kogi",
    attendees: "125,000",
    change: "+1000",
    color: "green",
  },
  {
    id: "9",
    venue: "Enugu",
    attendees: "125,000",
    change: "+1000",
    color: "green",
  },
  {
    id: "10",
    venue: "Kaduna",
    attendees: "125,000",
    change: "-7000",
    color: "red",
  },
  {
    id: "11",
    venue: "Ebonyi",
    attendees: "125,000",
  },
  {
    id: "12",
    venue: "Kwara",
    attendees: "125,000",
  },
  {
    id: "13",
    venue: "Edo",
    attendees: "125,000",
  },
];

export const dashboardAttendeeEvents = [
  {
    id: "1",
    event: "Alat AGM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/ALAT_Logo.jpg",
    attendees: "5,000,000",
  },
  {
    id: "2",
    event: "Africaprudential",
    logo: ApLogo,
    attendees: "1,000,000",
  },
  {
    id: "3",
    event: "Access Bank Plc",
    logo: AccessBankLogo,
    attendees: "1,000,000",
  },
  {
    id: "4",
    event: "Nestle Plc",
    logo: "https://w7.pngwing.com/pngs/394/442/png-transparent-nestle-uk-business-logo-nestle-waters-business-blue-text-trademark.png",
    attendees: "1,000,000",
  },
  {
    id: "5",
    event: "UBA",
    logo: UBA,
    attendees: "1,000,000",
  },
  {
    id: "6",
    event: "Investment One",
    logo: "https://investment-one.com/stockbrokers/wp-content/uploads/2020/08/Investment-One-Logo-on-dark-bg.png",
    attendees: "1,000,000",
  },
  {
    id: "7",
    event: "First Bank Plc",
    logo: "https://pngroyale.com/wp-content/uploads/2021/08/pngroyale.com-First-Bank-Nigeria-Logo.png",
    attendees: "1,000,000",
  },
];
