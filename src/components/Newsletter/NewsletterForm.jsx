import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

const NewsletterForm = () => {
  const [error, setError] = useState(false);
  const emailInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = emailInput.current.value;

    if (!emailInput || !validateEmail(emailValue)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  //https://stackoverflow.com/a/9204568
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const inputErrorClasses = error ? "text-bright-red border-bright-red" : "";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-x-3 font-Be-Vietnam-Pro"
    >
      <div className="flex-grow">
        <input
          type="email"
          aria-required={true}
          ref={emailInput}
          aria-invalid={error}
          aria-describedby="error"
          placeholder="Updates in your inbox..."
          className={`outline-none rounded-3xl h-11 w-full placeholder:text-dark-grayish-blue bg-white text-dark-blue border border-transparent px-6 text-sm ${inputErrorClasses}`}
        />
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: { duration: 0.5 },
              }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p
                className="text-bright-red text-sm pt-2 pl-3"
                aria-live="assertive"
                id="error"
              >
                Please insert a valid email
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        type="submit"
        className="rounded-3xl transition-all duration-700 text-white bg-bright-red hover:bg-[#d7ada3] px-7 xl:px-5 py-3 text-sm self-start"
      >
        Go
      </button>
    </form>
  );
};

export default NewsletterForm;
