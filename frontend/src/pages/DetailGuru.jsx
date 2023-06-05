import React, { useEffect } from "react";
import Layout from "./Layout";
import DataUser from "../component/DataUser";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlices";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";
import DetailSiswa from "../component/DetailSiswa";
import DetailGuru from "../component/DetailGuru";

const GuruDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isError } = useSelector((state) => state.auth);

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
      <DetailGuru />
    </Layout>
    </motion.div>
  );
};

export default GuruDetail;
