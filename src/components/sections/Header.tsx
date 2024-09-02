import logo from "@/assets/images/logo.svg";
import { useState } from "react";
import ActionButtons from "../ActionsBtn";
import MenuToggleBtn from "../MenuToggleBtn";
import NavLinks from "../NavLinks";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <header className="pt-3">
      <div className="flex justify-between items-center h-[76px] max-lg:h-[52px]">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <NavLinks isOpen={menuIsOpen} />
        <ActionButtons isOpen={menuIsOpen} />
        <MenuToggleBtn
          isOpen={menuIsOpen}
          toggleMenu={() => setMenuIsOpen(!menuIsOpen)}
        />
      </div>

      {/* Show overlay when menu is open */}
      {menuIsOpen && <div className="fixed inset-0 bg-black/25 z-[3]"></div>}
    </header>
  );
};

export default Header;
