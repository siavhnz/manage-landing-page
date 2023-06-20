import { useEffect, useState } from "react";
import BenefitItem from "./BenefitItem";
import benefits from "../../store/benefits.json";

const BenefitList = () => {
  const [data, setData] = useState({
    isLoading: true,
    benefits: {},
  });
  useEffect(() => {
    //load from server
    setData({
      isLoading: false,
      benefits,
    });
  }, []);

  if (data.isLoading) {
    return <div>loading ...</div>;
  }

  const items = data.benefits.items;
  const title = data.benefits.title;
  const desc = data.benefits.desc;

  return (
    <div className="pt-24 lg:pt-[7.75rem] lg:leading-[3rem] lg:grid lg:grid-cols-2 mr-auto ml-auto max-w-screen-1.5lg">
      <div className="lg:max-w-[26.5rem] lg:ml-auto lg:mr-auto xl:ml-0">
        <h2 className="text-dark-blue font-Be-Vietnam-Pro text-[1.9rem] font-bold text-center lg:text-left px-10 lg:px-4 xl:px-0 lg:text-[2.3rem] lg:font-bold">
          {title}
        </h2>
        <p className="text-dark-grayish-blue font-Be-Vietnam-Pro font-light text-center lg:text-left text-[0.92rem] px-8 pt-2 lg:px-4 xl:px-0 leading-7 lg:text-[1.1rem] lg:pt-5 xl:pr-14">
          {desc}
        </p>
      </div>
      <div className="pt-14 pl-4 lg:p-0">
        {items.map((item) => {
          return <BenefitItem key={item.number} {...item} />;
        })}
      </div>
    </div>
  );
};

export default BenefitList;
