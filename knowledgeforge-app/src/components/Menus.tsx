import { RiDashboardLine, RiLogoutCircleRLine, RiSettings5Line } from "react-icons/ri";
import { BsBookmarkStar, BsList, BsPerson } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Menus = [
    { title: "Dashboard", icon: <RiDashboardLine/> },
    { title: "Categories",  icon: <BsList />, submenu: true,
        submenuItems: [
            {title: "Programming"},
            {title: "Machine Learning"},
            {title: "Cybersecurity"},
        ],
    },
    {title: "Wishlist",  icon: <BsBookmarkStar /> },
    {title: "Profile",  icon: <BsPerson /> },
    {title: "Contact",  icon: <AiTwotoneMail /> },
    {title: "Settings", spacing: true, icon: <RiSettings5Line /> },
    {title: "Logout",  icon: <RiLogoutCircleRLine />}
];

export default Menus;