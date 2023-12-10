import { RiDashboardLine, RiLogoutCircleRLine, RiSettings5Line } from "react-icons/ri";
import { BsBookmarkStar, BsList } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Menus = [
    { title: "Dashboard", icon: <RiDashboardLine/> },
    { title: "Categories",  icon: <BsList />, submenu: true,
        submenuItems: [
            {title: "Submenu 1"},
            {title: "Submenu 2"},
            {title: "Submenu 3"},
        ],
    },
    {title: "Wishlist",  icon: <BsBookmarkStar /> },
    {title: "Contact",  icon: <AiTwotoneMail /> },
    {title: "Settings", spacing: true, icon: <RiSettings5Line /> },
    {title: "Logout",  icon: <RiLogoutCircleRLine />}
];

export default Menus;