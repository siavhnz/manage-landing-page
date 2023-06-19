const BenefitItem = ({ number, title, desc }) => {
  return (
    <div className="mb-12 lg:mb-10 lg:ml-4 lg:grid lg:grid-cols-[repeat(2,minmax(6rem,auto))] lg:grid-rows-[repeat(2,minmax(0,auto))]">
      <div className="flex bg-bright-red bg-opacity-10 rounded-l-3xl gap-x-4 lg:gap-x-8 lg:bg-inherit lg:row-start-1 lg:col-start-1 lg:row-span-1 col-span-full">
        <div className="w-16 lg:h-9 py-2 rounded-3xl bg-bright-red text-white font-Be-Vietnam-Pro font-medium flex justify-center items-center">
          {number}
        </div>
        <h3 className="flex-grow text-dark-blue font-Be-Vietnam-Pro font-bold self-center lg:-mt-2 text-[0.92rem]">
          {title}
        </h3>
      </div>
      <p className="font-Be-Vietnam-Pro font-light text-[0.85rem] lg:text-[0.97rem] lg:leading-[1.6rem] leading-7 text-dark-grayish-blue pr-2 lg:pr-4 pt-2 lg:row-start-2 lg:col-start-2 lg:col-end-3">
        {desc}
      </p>
    </div>
  );
};

export default BenefitItem;
