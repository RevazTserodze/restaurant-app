import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NoneResponsiveNav = () => {
  return (
    <div
      className="bg-dark p-3"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img
        style={{ width: "65px" }}
        src="https://cdn-icons-png.flaticon.com/128/10508/10508623.png"
        alt="nav-logo"
      />
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginRight: "14px",
          cursor: "pointer",
          marginTop: "15px",
        }}
        className="text-white"
      >
        <motion.li
          whileHover={{ textDecoration: "underline", color: "yellowgreen" }}
          style={{
            transition: "text-decoration 0.3s, color 0.3s",
            fontSize: "20px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ textDecoration: "underline", color: "yellowgreen" }}
          style={{
            transition: "text-decoration 0.3s, color 0.3s",
            fontSize: "20px",
          }}
        >
          <Link
            to="/about-us"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About Us
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ textDecoration: "underline", color: "yellowgreen" }}
          style={{
            transition: "text-decoration 0.3s, color 0.3s",
            fontSize: "20px",
          }}
        >
          <Link to="/Form" style={{ textDecoration: "none", color: "inherit" }}>
            Comments
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default NoneResponsiveNav;
