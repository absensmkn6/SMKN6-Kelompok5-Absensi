import Login from "./login/Login";
import Home from "./home/home";
import { BrowserRouter, Switch, Route, NavLink, Redirect, Link } from "react-router-dom"; 
import Register from "./login/Register";
import LogoutSiswa from "./siswa/logout"

import Logout from "./admin/logout";
import Dashboard from "./pages/Dashboard";
import AddSiswa from "./pages/AddSiswa";
import Siswa from "./pages/DataSiswa";
import User from "./pages/DataUser";
import AddUser from "./pages/AddUser";
import EditSiswa from "./pages/EditSiswa";
import Rekap from "./pages/Rekap";
import Profile from "./pages/Profile";
import Absen from "./pages/AbsenSiswa";

import { AnimatePresence } from "framer-motion";
import EditUser from "./pages/EditUser";
import AddKelas from "./pages/AddKelas";
import DaftarRekap from "./component/DaftarRekapAdmin";
import DaftarRekapAdmin from "./pages/DaftarRekapAdmin";
import DetailUser from "./component/DetailUser";
import DetailSiswa from "./pages/DetailSiswa";
import SiswaDetail from "./pages/DetailSiswa";
import Guru from "./pages/DataGuru";
import AddGuru from "./pages/AddGuru";
import GuruDetail from "./pages/DetailGuru";
import EditGuru from "./pages/EditGuru";
import EditKelas from "./pages/EditKelas";
import GuruRekap from "./pages/GuruRekapKelas";
import RekapGuru from "./pages/GuruRekapKelas";


function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          {/* <Route component={Navbar} path="/home/layout/navbar" /> */}


          {/* SISWA */}
          <Route component={LogoutSiswa} path="/siswa/logout" />




          {/* GURU */}
          {/* <Route component={SidebarGuru} path="/sidebar/sidebarguru" />
          <Route component={RekapGuru} path="/guru/rekapguru" />
          <Route component={ProfileGuru} path="/guru/profile" />
          <Route component={DashboardGuru} path="/guru/dashboard" />
          <Route component={LogoutGuru} path="/guru/logout" /> */}


          {/* ADMIN */}
          {/* <Route component={DataKelas} path="/admin/kelas" />
          <Route component={DataGuru} path="/admin/guru" /> */}
          <Route component={Logout} path="/logout" />
          
          {/* <Route component={CreateKelas} path="/createk" />
          <Route component={UpdateKelas} path="/editKelas/:kode_kelas" />
          <Route component={CreateGuru} path="/createg" />
          <Route component={UpdateGuru} path="/updateg/:id_guru" /> */}

        {/* BARU */}
        <Route component={Dashboard} path="/dashboard"/>
        <Route component={Siswa} path="/admin/siswa" />
        <Route component={User} path="/admin/user" />
        <Route component={Guru} path="/admin/guru" />
        <Route component={Logout} path="/logout" />
        <Route component={AddSiswa} path="/create/siswa" />
        <Route component={AddGuru} path="/create/guru" />
        <Route component={AddUser} path="/create/user" />
        <Route component={AddKelas} path="/create/kelas" />
        <Route component={DaftarRekapAdmin} path="/rekap/:id" />
        <Route component={EditSiswa} path="/edit/siswa/:nis" />
        <Route component={EditUser} path="/edit/user/:id" />
        <Route component={EditGuru} path="/edit/guru/:id" />
        <Route component={EditKelas} path="/edit/kelas/:id" />
        <Route component={Profile} path="/siswa/profile" />
        <Route component={Rekap} path="/admin/kelas" />
        <Route component={Absen} path="/siswa/absen" />
        <Route component={DetailUser} path="/detail/user/:id" />
        <Route component={GuruDetail} path="/detail/guru/:id" />
        <Route component={SiswaDetail} path="/detail/siswa/:nis" />
        <Route component={RekapGuru} path="/guru/rekap" />
        <Route path="*" component={<div>Page Not Found</div>}/>
        

        </Switch>
        </AnimatePresence>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;