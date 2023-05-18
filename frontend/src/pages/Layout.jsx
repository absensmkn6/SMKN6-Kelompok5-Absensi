import React from "react";
import Sidebar from "../component/Sidebar";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.div

    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity:0 }}
    transition={{  duration: 2 }}
>
    <React.Fragment>
      {/* <Navbar /> */}
      <div className="columns" style={{ minHeight: "100vh" }}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
    </motion.div>
  );
};

export default Layout;
