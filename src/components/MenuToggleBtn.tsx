import { Bars, Close } from "@/assets/icons";

const MenuToggleBtn = ({
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

export default MenuToggleBtn;
