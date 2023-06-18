const Link = (props) => {
  const { title, ...rest } = props;

  return (
    <a
      {...rest}
      className="justify-self-end px-8 py-[0.8rem] font-Be-Vietnam-Pro font-bold text-very-light-gray text-[0.8rem] bg-bright-red rounded-3xl shadow-md shadow-bright-red transition-all duration-700 hover:bg-opacity-50 hover:shadow-xl hover:cursor-pointer"
    >
      {title}
    </a>
  );
};

export default Link;
