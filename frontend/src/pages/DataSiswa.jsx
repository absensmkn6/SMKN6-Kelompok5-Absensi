import React, { useEffect } from "react";
import Layout from "./Layout";
import DataSiswa from "../component/DataSiswa";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlices";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Siswa = () => {
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
    <Layout>
      <DataSiswa />
    </Layout>
  );
};

export default Siswa;
