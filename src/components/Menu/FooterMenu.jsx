import { useEffect, useState } from "react";
import { footerMenu } from "../../store/menu";
import FooterMenuItem from "./FooterMenuItem";

const FooterMenu = () => {
  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    //load from server
    setMenuItems(footerMenu);
  }, []);

  if (Object.keys(menuItems).length === 0) {
    return <div>loading ...</div>;
  }

  return (
    <div className="flex justify-between">
      <FooterMenuItem items={menuItems.left} />
      <div className="xl:pl-16">
        <FooterMenuItem items={menuItems.right} />
      </div>
    </div>
  );
};

export default FooterMenu;
