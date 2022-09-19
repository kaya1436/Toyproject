import { menuList } from "./menuList";
import MenuItems from "./MenuItems";

function Navbar() {
  return (
    <nav>
      <ul className="menus">
        {menuList.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
}
export default Navbar;
