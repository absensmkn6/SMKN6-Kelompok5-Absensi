import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMe } from "../features/authSlices";
import UpdateUser from "../component/EditUser";
import { motion } from "framer-motion";

const EditUser = () => {
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
      <UpdateUser />
    </Layout>
    </motion.div>
  );
};

export default EditUser;
