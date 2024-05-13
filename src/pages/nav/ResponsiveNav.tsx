import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResponsiveNav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className="bg-dark p-3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <button
            onClick={() => setToggle(!toggle)}
            style={{ borderRadius: "150%" }}
          >
            <img
              style={{ width: "70px" }}
              src="https://cdn-icons-png.flaticon.com/128/10092/10092593.png"
              alt="hamburger-icon"
            />
          </button>
        </div>
        <img
          style={{ width: "65px", marginRight: "30px" }}
          src="https://cdn-icons-png.flaticon.com/128/10508/10508623.png"
          alt="nav-logo"
        />
      </div>
      <AnimatePresence>
        {toggle && (
          <div className="bg-dark p-1" style={{ marginTop: "-0.7px" }}>
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                overflow: "hidden",
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                marginRight: "14px",
                cursor: "pointer",
              }}
              className="text-white"
            >
              <motion.li
                whileHover={{
                  textDecoration: "underline",
                  color: "yellowgreen",
                }}
                style={{ transition: "text-decoration 0.3s, color 0.3s" }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                whileHover={{
                  textDecoration: "underline",
                  color: "yellowgreen",
                }}
                style={{ transition: "text-decoration 0.3s, color 0.3s" }}
              >
                <Link
                  to="/about-us"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About Us
                </Link>
              </motion.li>
              <motion.li
                whileHover={{
                  textDecoration: "underline",
                  color: "yellowgreen",
                }}
                style={{ transition: "text-decoration 0.3s, color 0.3s" }}
              >
                <Link
                  to="/Form"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Comments
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveNav;
