import Menu from "../Menu/Menu";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Link from "../ui/Link";

const Header = () => {
  return (
    <header className="relative pt-10 px-6 flex justify-between items-start lg:grid grid-cols-[repeat(3,minmax(0,_auto))] lg:pt-14 mr-auto ml-auto max-w-screen-1.5lg xl:px-0">
      <Logo className="w-28 pt-1 lg:w-36 lg:place-self-center" />
      <Menu />
      <div className="hidden lg:flex">
        <Link title="Get Started" href="#" />
      </div>
    </header>
  );
};

export default Header;
