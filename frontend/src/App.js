import Login from "./login/Login";
// import Dashboard from "./dashboard/dashboard";
import Home from "./home/home";
import { BrowserRouter, Switch, Route, NavLink, Redirect, Link } from "react-router-dom"; 
import Register from "./login/Register";
// import Sidebar from "./sidebar/sidebarsiswa";

//SIDEBAR
// import SidebarGuru from "./sidebar/sidebarguru";
// import SidebarSiswa from "./sidebar/sidebarsiswa";
// import SidebarAdmin from "./sidebar/sidebaradmin";


// // SISWA
// import DashboardSiswa from "./siswa/dashboard"
// import ProfileSiswa from "./siswa/profile"
// import AbsenSiswa from "./siswa/absen"
import LogoutSiswa from "./siswa/logout"

//GURU
// import RekapGuru from "./guru/rekapguru"
// import ProfileGuru from "./guru/profile"
// import DashboardGuru from "./guru/dashboard"
// import LogoutGuru from "./guru/logout"

//ADMIN
// import DataSiswa from "./admin/data/siswa";
// import DataKelas from "./admin/data/kelas";
// import DataGuru from "./admin/data/guru";
// import RekapAdmin from "./admin/rekap";
import Logout from "./admin/logout";
// import CreateSiswa from "./admin/data/siswa/create";
// import UpdateSiswa from "./admin/data/siswa/update";
// import CreateKelas from "./admin/data/kelas/create";
// import UpdateKelas from "./admin/data/kelas/update";
// import CreateGuru from "./admin/data/guru/create";
// import UpdateGuru from "./admin/data/guru/update";
// import DataUser from "./admin/data/user";
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
        <Route component={Logout} path="/logout" />
        <Route component={AddSiswa} path="/createSiswa" />
        <Route component={AddUser} path="/createUser" />
        <Route component={AddKelas} path="/createKelas" />
        <Route component={DaftarRekapAdmin} path="/rekap/:id" />
        <Route component={EditSiswa} path="/editSiswa/:nis" />
        <Route component={EditUser} path="/editUser/:id" />
        <Route component={Profile} path="/siswa/profile" />
        <Route component={Rekap} path="/admin/kelas" />
        <Route component={Absen} path="/siswa/absen" />
        <Route component={DetailUser} path="/detailuser" />
        
        

        </Switch>
        </AnimatePresence>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;