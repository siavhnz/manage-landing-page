const FooterMenuItem = ({ items }) => {
  return (
    <ul className="flex flex-col gap-y-3">
      {items.map((item) => {
        return (
          <li key={item}>
            <a
              href="#"
              className="text-white text-sm font-Be-Vietnam-Pro font-light transition-all duration-700 hover:text-bright-red"
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterMenuItem;
