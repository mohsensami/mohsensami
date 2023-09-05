import Logo from "../../Logo";
import MenuItem from "./MenuItem";

const menu = [
  { name: "Dashboard", icon: "dashboard", link: "/" },
  { name: "Profile", icon: "Profile", link: "/portfolio" },
];

const Sidebar = () => {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <Logo />
      <ul className="space-y-2 font-medium">
        <li>
          {menu.map((item) => (
            <MenuItem name={item.name} icon={item.icon} link={item.link} />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
