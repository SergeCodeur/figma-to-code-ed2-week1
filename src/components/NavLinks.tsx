import { Navlinks } from "@/constants/navLinks";

const NavLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav
      className={` ${
        isOpen ? "!translate-x-[0%]" : ""
      } max-lg:absolute max-lg:w-[492px] max-sm:w-[346px] max-lg:h-screen max-lg:bg-stone-500 max-lg:top-0 max-lg:right-0 max-lg:z-[4] max-lg:translate-x-full transition-transform duration-300 ease-linear`}
    >
      <ul className="lg:inline-flex flex max-lg:flex-col items-start gap-7 text-neutral-700 font-semibold max-lg:translate-y-[22%] p-[30px] max-sm:pl-10">
        {Navlinks.map((link, index) => (
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

export default NavLinks;
