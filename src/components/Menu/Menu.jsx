import { useEffect, useState } from "react";
import { ReactComponent as Hambur } from "../../assets/images/icon-hamburger.svg";
import { menu } from "../../store/menu";
import MobileNavigation from "./MobileMenu/MobileNavigation";
import { AnimatePresence } from "framer-motion";
import DesktopNavigation from "./DesktopMenu/DesktopNavigation";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    //load from server
    setMenuItems(menu);
  }, []);

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(true);
  };

  const handleCloseMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  return (
    <div className="lg:place-self-center">
      {!openMobileMenu && (
        <button
          aria-label="open menu"
          onClick={handleOpenMobileMenu}
          className="lg:hidden"
        >
          <Hambur focusable={false} aria-hidden={true} />
        </button>
      )}

      <AnimatePresence>
        {menuItems.length > 0 && openMobileMenu && (
          <MobileNavigation items={menuItems} onClose={handleCloseMobileMenu} />
        )}
      </AnimatePresence>

      {menuItems.length > 0 && <DesktopNavigation items={menuItems} />}
    </div>
  );
};

export default Menu;
