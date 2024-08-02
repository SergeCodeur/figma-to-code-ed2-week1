import { Bars, Close } from "@/assets/icons";
import logo from "@/assets/images/logo.svg";
import { useState } from "react";

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
        isOpen ? "!translate-x-[0%]" : ""
      } max-lg:absolute max-lg:w-[492px] max-sm:w-[346px] max-lg:h-screen max-lg:bg-stone-500 max-lg:top-0 max-lg:right-0 max-lg:z-[4] max-lg:translate-x-full transition-transform duration-300 ease-linear`}
    >
      <ul className="lg:inline-flex flex max-lg:flex-col items-start gap-7 text-neutral-700 font-semibold max-lg:translate-y-[22%] p-[30px] max-sm:pl-10">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      {isOpen && (
        <>
          {/* Vertical line left */}
          <span className="absolute top-0 max-lg:right-[31px] w-[1px] h-full bg-neutral-50 z-[2] max-sm:right-[19px]"></span>
          {/* Vertical line bottom */}
          <span className="absolute left-0 h-[1px] w-full bg-neutral-50 z-[2] bottom-12"></span>
        </>
      )}
    </nav>
  );
};

// Action buttons
const ActionButtons = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <span
      className={`${
        isOpen ? "!translate-x-[0%] max-lg:pointer-events-auto" : ""
      } inline-flex gap-5 items-center max-lg:absolute z-[4] max-lg:translate-y-[360px] max-lg:translate-x-[150%] max-lg:right-[22%] max-sm:right-[6%] transition-transform duration-300 ease-linear max-lg:pointer-events-none`}
    >
      <button className="border-r px-[26px] max-sm:px-5 text-base max-sm:text-sm h-8 font-semibold text-neutral-800 border-neutral-800">
        SignUp
      </button>
      <button className="bg-neutral-800 text-white font-semibold px-[26px] max-sm:px-5 py-2.5 rounded-[42px] text-base max-sm:text-sm">
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
        className="bg-neutral-50 p-2 h-[30px] w-[30px] rounded-lg select-none flex justify-center items-center"
        onClick={toggleMenu}
      >
        {isOpen ? <Close /> : <Bars />}
      </button>
    </span>
  );
};

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
        <MenuToggle
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
