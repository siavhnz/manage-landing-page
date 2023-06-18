import Menu from "../Menu/Menu";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="pt-10 px-6 flex justify-between items-start lg:grid grid-cols-[repeat(3,minmax(0,_auto))] lg:pt-14 mr-auto ml-auto max-w-[1110px] xl:px-0">
      <Logo className="w-28 pt-1 lg:w-36 lg:place-self-center" />
      <Menu />
      <a className="hidden justify-self-end lg:flex px-8 py-[0.8rem] font-Be-Vietnam-Pro font-bold text-very-light-gray text-[0.8rem] bg-bright-red rounded-3xl shadow-md shadow-bright-red transition-all duration-700 hover:bg-opacity-50 hover:shadow-xl hover:cursor-pointer">
        Get Started
      </a>
    </header>
  );
};

export default Header;
