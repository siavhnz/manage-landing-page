const Slide = ({ avatar, name, quote }) => {
  return (
    <div className="mb-10 pt-24 lg:pt-28">
      <div className="bg-very-light-gray py-12 px-6 relative">
        <img
          src={avatar}
          alt={name}
          className="w-[4.5rem] absolute -top-9 right-1/2 translate-x-1/2"
        />
        <h3 className="pt-4 lg:pt-3 text-center font-Be-Vietnam-Pro text-dark-blue">
          {name}
        </h3>
        <blockquote className="pt-5 text-center text-dark-grayish-blue leading-[1.6rem] text-[0.9rem] font-light px-2 xs:px-4 lg:text-[1.07rem]">
          “{quote}”
        </blockquote>
      </div>
    </div>
  );
};

export default Slide;
