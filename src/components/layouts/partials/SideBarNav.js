import { BsFillTelephoneFill, BsGithub, BsInstagram } from "react-icons/bs";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

const SidebarLinks = [
  {
    name: "From",
    content: "Vĩnh Phúc",
    path: "",
    linkOut: false,
    icon: <MdLocationPin />,
  },
  {
    name: "Phone",
    content: "0372891736",
    path: "",
    linkOut: false,
    icon: <BsFillTelephoneFill />,
  },
  {
    name: "Github",
    content: "https://github.com/nam08102003",
    path: "https://github.com/nam08102003",
    linkOut: true,
    icon: <BsGithub />,
  },
  {
    name: "FaceBook",
    content: "https://www.facebook.com/profile.php?id=100039457789193",
    path: "https://www.facebook.com/profile.php?id=100039457789193",
    linkOut: true,
    icon: <FaFacebookF />,
  },
  {
    name: "Instagram",
    content: "https://www.instagram.com/leducnam81003/",
    path: "https://www.instagram.com/leducnam81003/",
    linkOut: true,
    icon: <BsInstagram />,
  },
  {
    name: "Telegram",
    content: "@nam08102003",
    path: "",
    linkOut: false,
    icon: <FaTelegramPlane />,
  },
  {
    name: "Email",
    content: "ducnamle81003@gmail.com",
    path: "",
    linkOut: false,
    icon: <MdEmail />,
  },
];

export default SidebarLinks;
