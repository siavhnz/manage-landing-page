const Link = (props) => {
  const { title, reverse, ...rest } = props;

  let colors = reverse
    ? "bg-very-light-gray text-bright-red hover:text-opacity-50"
    : "text-very-light-gray bg-bright-red hover:bg-opacity-50";

  return (
    <a
      {...rest}
      className={`${colors} justify-self-end px-8 py-[0.8rem] font-Be-Vietnam-Pro font-bold text-[0.8rem] rounded-3xl shadow-md shadow-bright-red transition-all duration-700 hover:shadow-xl hover:cursor-pointer`}
    >
      {title}
    </a>
  );
};

export default Link;
