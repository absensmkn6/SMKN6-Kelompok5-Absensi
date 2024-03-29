import React, { useEffect } from "react";
import Layout from "./Layout";
import { getMe } from "../features/authSlices";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import RekapAdmin from "../component/Rekap";
import { motion } from "framer-motion";


const Rekap = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isError } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      history.push("/login");
    }
  }, [isError, history]);

  return (
    <motion.div

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity:0 }}
          transition={{  duration: 2 }}
      >
    <Layout>
      <RekapAdmin/>
    </Layout>
    </motion.div>
  );
};

export default Rekap;
