import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="relative mr-auto ml-auto -z-50 max-w-[133.75rem]">
        <div className="absolute top-0 right-0 bg-pattern-top w-full" />
      </div>
      <div className="-z-50 bg-pattern-middle-mobile absolute top-[30rem] right-0 w-full sm:hidden" />
      <div className="-z-50 bg-pattern-middle-desktop absolute top-[70rem] left-0 w-full hidden lg:block" />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
