import React, { useState } from "react";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "../../../constants";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="border-[1px] border-black p-1  rounded"
      >
        <RxHamburgerMenu size={28} />
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs bg-secondary-500  text-white"
              ref={ref}
            >
              <div className="flex items-center justify-end p-5 pb-10  ">
                <button
                  onClick={toggleSidebar}
                  className="border-[1px] p-2 rounded"
                >
                  <RxCross2 size={30} />
                </button>
              </div>
              <ul>
                {navItems.map((item, index) => {
                  const { title, path, icon } = item;
                  return (
                    <li key={title}>
                      <a
                        onClick={toggleSidebar}
                        href={path}
                        className="w-full flex items-center justify-between gap-5 p-6 transition-all border-b-[2px] hover:bg-border-zinc-800"
                      >
                        <motion.span
                          {...framerText(index)}
                          className="w-full flex items-center space-x-5 text-xl"
                        >
                          <span> {icon}</span>
                          <span> {title}</span>
                          {/* <motion.div {...framerIcon}>
                          {icon}
                          </motion.div> */}
                        </motion.span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.5 },
};

const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.5 },
};

const framerText = (delay: any) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.4,
      delay: 0.5 + delay / 10,
    },
  };
};

// const framerIcon = {
//   initial: { scale: 0 },
//   animate: { scale: 1 },
//   transition: {
//     type: "spring",
//     stiffness: 260,
//     damping: 20,
//     delay: 1.5,
//   },
// };
