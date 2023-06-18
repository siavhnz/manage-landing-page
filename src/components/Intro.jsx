import IntroImg from "../assets/images/illustration-intro.svg";
import Link from "./ui/Link";

const Intro = () => {
  return (
    <div className="pt-10 px-4 lg:grid lg:grid-cols-2  max-w-screen-1.5lg mr-auto ml-auto lg:pt-28 xl:px-0">
      <img
        src={IntroImg}
        className="mr-auto ml-auto lg:-mr-1"
        alt="introduction image"
      />
      <div className="pt-2 lg:-order-1 lg:pt-16 max-w-2xl mr-auto ml-auto">
        <h1 className="text-dark-blue font-Be-Vietnam-Pro font-bold text-4xl text-center leading-[1.41] lg:text-left lg:text-[3.2rem] lg:leading-[1.25]">
          Bring everyone together to build better products.
        </h1>
        <p className="font-Be-Vietnam-Pro text-dark-grayish-blue text-center px-5 font-normal leading-7 lg:text-left lg:px-0 lg:pt-7 lg:max-w-[22rem] lg:leading-6">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="pt-7 flex justify-center lg:justify-start lg:pt-11">
          <Link title="Get Started" href="#" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
