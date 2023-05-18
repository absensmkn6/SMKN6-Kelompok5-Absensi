import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlices";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CreateSiswa from "../component/AddSiswa";
import CreateUser from "../component/AddUser";

const AddUser = () => {
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
    <Layout>
      <CreateUser />
    </Layout>
  );
};

export default AddUser;