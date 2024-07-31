import { useState } from "react";
import bars from "../../assets/icons/bars.svg";
import close from "../../assets/icons/close.svg";
import logo from "../../assets/images/logo.svg";

type Link = {
  label: string;
  href: string;
};

// Menu links
const links: Link[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Top Sales",
    href: "#",
  },
  {
    label: "Collections",
    href: "#",
  },
  {
    label: "Our blog",
    href: "#",
  },
  {
    label: "About us",
    href: "#",
  },
];

// Navigation links component
const NavLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav
      className={` ${
        isOpen ? "max-lg:translate-x-[0%]" : ""
      } max-lg:absolute max-lg:w-full max-lg:h-dvh max-lg:bg-white max-lg:top-0 max-lg:left-0 max-lg:z-[3] max-lg:-translate-x-full transition-transform`}
    >
      <ul className="lg:inline-flex flex max-lg:flex-col items-start gap-7 text-neutral-700 font-semibold max-lg:translate-y-[43%] p-[30px]">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Action buttons
const ActionButtons = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <span
      className={`${
        isOpen ? "max-lg:translate-x-[0] max-lg:pointer-events-auto" : ""
      } inline-flex gap-5 items-center max-lg:absolute z-[3] max-lg:translate-y-[461px] max-lg:-translate-x-[120%] transition-transform max-lg:pointer-events-none`}
    >
      <button className="border-r px-[26px] h-8 font-semibold text-neutral-800 border-neutral-800">
        SignUp
      </button>
      <button className="bg-neutral-800 text-white font-semibold px-[26px] py-2.5 rounded-[42px] text-base">
        Connect Wallet
      </button>
    </span>
  );
};

// Responsive menu toggle
const MenuToggle = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <span className="lg:hidden block relative z-[4]">
      <button
        className="bg-neutral-50 p-2 h-[30px] w-[30px] rounded-lg select-none"
        onClick={toggleMenu}
      >
        <img src={isOpen ? close : bars} alt="menu icon" />
      </button>
    </span>
  );
};

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <header className="container pt-3">
      <div className="flex justify-between items-center h-[76px]">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <NavLinks isOpen={menuIsOpen} />
        <ActionButtons isOpen={menuIsOpen} />
        <MenuToggle
          isOpen={menuIsOpen}
          toggleMenu={() => setMenuIsOpen(!menuIsOpen)}
        />
      </div>
    </header>
  );
};

export default Header;
