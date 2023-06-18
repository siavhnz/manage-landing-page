const DesktopNavigation = ({ items }) => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-x-8">
        {items.map((item) => {
          return (
            <li key={item}>
              <a
                href="#"
                className="text-dark-blue text-[0.78rem] font-Be-Vietnam-Pro font-normal transition-all duration-700 hover:text-dark-grayish-blue"
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
