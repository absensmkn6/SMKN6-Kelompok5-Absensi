import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlices";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";
import CreateKelas from "../component/AddKelas";

const AddKelas = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      history.push("/login");
    }
    if (user && user.role !== "admin") {
      history.push("/dashboard");
    }
  }, [isError, user, history]);
  return (
    <motion.div

    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity:0 }}
    transition={{  duration: 2 }}
>
    <Layout>
      <CreateKelas />
    </Layout>
    </motion.div>
  );
};

export default AddKelas;