import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMe } from "../features/authSlices";
import UpdateSiswa from "../component/EditSiswa";
import { motion } from "framer-motion";
import UpdateKelas from "../component/EditKelas";

const EditKelas = () => {
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
      <UpdateKelas />
    </Layout>
    </motion.div>
  );
};

export default EditKelas;
