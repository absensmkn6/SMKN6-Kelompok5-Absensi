import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMe } from "../features/authSlices";
import UpdateUser from "../component/EditUser";

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
    <Layout>
      <UpdateUser />
    </Layout>
  );
};

export default EditUser;
