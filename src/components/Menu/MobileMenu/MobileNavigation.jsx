import { ReactComponent as Close } from "../../../assets/images/icon-close.svg";
import { motion } from "framer-motion";
const MobileNavigation = ({ items, onClose }) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
      className="fixed right-0 left-0 bottom-0 top-0 bg-black bg-opacity-10 px-6 pt-10 flex flex-col gap-y-10 overflow-hidden lg:hidden"
    >
      <button aria-label="close menu" onClick={onClose} className="self-end">
        <Close focusable={false} aria-hidden={true} />
      </button>
      <ul className="bg-white rounded-md py-10 flex flex-col gap-y-6 items-center self-end w-full max-w-md">
        {items.map((item) => {
          return (
            <li key={item}>
              <a
                href="#"
                className="text-dark-blue font-Be-Vietnam-Pro font-bold text-[0.95rem] leading-3"
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default MobileNavigation;
