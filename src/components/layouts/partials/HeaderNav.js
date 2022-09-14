import { AiFillHome, AiFillDatabase } from "react-icons/ai";
import { BsFillFileCodeFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";

const NavLinks = [
  { name: "Home", path: "/", icon: <AiFillHome /> },
  { name: "About Me", path: "/aboutme", icon: <FaBookReader /> },
  { name: "Project", path: "/project", icon: <AiFillDatabase /> },
  { name: "Education", path: "/education", icon: <MdCastForEducation /> },
  { name: "Skill", path: "/skill", icon: <BsFillFileCodeFill /> },
];

export default NavLinks;
