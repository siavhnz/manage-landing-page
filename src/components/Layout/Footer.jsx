import FooterMenu from "../Menu/FooterMenu";
import NewsletterForm from "../Newsletter/NewsletterForm";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Facebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../../assets/images/icon-youtube.svg";
import { ReactComponent as Instagram } from "../../assets/images/icon-instagram.svg";
import { ReactComponent as Twitter } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="bg-very-dark-blue">
      <div className="px-6 xl:px-0 pt-[3.25rem] xl:pt-[3.75rem] pb-14 md:grid md:grid-cols-2 xl:max-w-screen-1.5lg mr-auto ml-auto xl:grid-cols-[17.75rem,auto,auto] xl:grid-rows-[minmax(8.25rem,auto)]">
        <div className="max-w-xs xl:max-w-none mr-auto ml-auto md:mt-32 xl:mt-0 xl:row-start-1 xl:col-start-3 xl:mr-0">
          <NewsletterForm />
        </div>
        <div className="mt-14 px-9 max-w-xs mr-auto ml-auto md:row-start-1 md:col-start-2 md:mt-0 md:w-full xl:max-w-none xl:px-0">
          <FooterMenu />
        </div>
        <div className="px-4 xl:px-2 mt-11 max-w-xs xl:max-w-none mr-auto ml-auto md:row-start-1 md:col-start-1 md:w-full md:mt-0 xl:flex xl:flex-col">
          <div className="flex justify-between xl:justify-start xl:gap-x-3 xl:mt-auto xl:mb-1">
            <a href="#" aria-label="go to our facebook">
              <Facebook
                focusable="false"
                className="w-8 h-8 text-white hover:text-bright-red transition-all duration-700 xl:w-5 xl:h-5"
              />
            </a>
            <a href="#" aria-label="go to our youtube">
              <Youtube
                focusable="false"
                className="w-8 h-8 text-white hover:text-bright-red transition-all duration-700 xl:w-5 xl:h-5"
              />
            </a>
            <a href="#" aria-label="go to our twitter">
              <Twitter
                focusable="false"
                className="w-8 h-8 text-white hover:text-bright-red transition-all duration-700 xl:w-5 xl:h-5"
              />
            </a>
            <a href="#" aria-label="go to our pinterest">
              <Pinterest
                focusable="false"
                className="w-8 h-8 text-white hover:text-bright-red transition-all duration-700 xl:w-5 xl:h-5"
              />
            </a>
            <a href="#" aria-label="go to our instagram">
              <Instagram
                focusable="false"
                className="w-8 h-8 text-white hover:text-bright-red transition-all duration-700 xl:w-5 xl:h-5"
              />
            </a>
          </div>
          <div className="flex justify-center mt-14 xl:mt-0 xl:-order-1 xl:justify-start">
            <Logo className="w-40 text-white xl:w-36" />
          </div>
        </div>
        <div className="capitalize text-center text-dark-grayish-blue text-xs mt-14 md:mt-32 xl:mt-0 xl:mb-1 xl:place-self-end xl:row-start-1 xl:col-start-3">
          copyright 2020. all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
