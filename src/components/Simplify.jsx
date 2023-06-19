import Link from "./ui/Link";

const Simplify = () => {
  return (
    <div className="py-24 bg-bright-red mt-14 lg:mt-48 lg:pt-14 lg:pb-16 bg-simplify-mobile-pattern lg:bg-simplify-desktop-pattern bg-no-repeat lg:bg-center">
      <div className="md:flex md:justify-around md:items-center max-w-screen-1.5lg mr-auto ml-auto lg:justify-between lg:px-6 xl:px-0">
        <h2 className="text-center font-Be-Vietnam-Pro text-4xl lg:text-[2.3rem] leading-[3.2rem] lg:leading-[3rem] font-bold px-8 md:px-0 text-white max-w-[28rem] mr-auto ml-auto md:m-0 md:text-left lg:pt-1">
          Simplify how your team works today.
        </h2>
        <div className="flex justify-center pt-5 lg:pt-0">
          <Link title="Get Started" href="#" reverse={true} />
        </div>
      </div>
    </div>
  );
};

export default Simplify;
