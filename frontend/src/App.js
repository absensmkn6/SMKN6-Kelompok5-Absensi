import Login from "./login/Login";
// import Dashboard from "./dashboard/dashboard";
import Home from "./home/home";
import { BrowserRouter, Switch, Route, NavLink, Redirect, Link } from "react-router-dom"; 
import Register from "./login/Register";
import Admin from "./admin/dashboard";
import LoginAdmin from "./admin/login";
import Sidebar from "./sidebar/sidebarsiswa";
import Navbar from "./home/layout/navbar";

//SIDEBAR
import SidebarGuru from "./sidebar/sidebarguru";
import SidebarSiswa from "./sidebar/sidebarsiswa";
import SidebarAdmin from "./sidebar/sidebaradmin";


// SISWA
import DashboardSiswa from "./siswa/dashboard"
import ProfileSiswa from "./siswa/profile"
import AbsenSiswa from "./siswa/absen"
import LogoutSiswa from "./siswa/logout"

//GURU
import RekapGuru from "./guru/rekapguru"
import ProfileGuru from "./guru/profile"
import DashboardGuru from "./guru/dashboard"
import LogoutGuru from "./guru/logout"

//ADMIN
import DashboardAdmin from "./admin/dashboard";
import DataSiswa from "./admin/data/siswa";
import DataKelas from "./admin/data/kelas";
import DataGuru from "./admin/data/guru";
import RekapAdmin from "./admin/rekap";
import LogoutAdmin from "./admin/logout";
import CreateSiswa from "./admin/data/siswa/create";
import UpdateSiswa from "./admin/data/siswa/update";
import CreateKelas from "./admin/data/kelas/create";
import UpdateKelas from "./admin/data/kelas/update";
import CreateGuru from "./admin/data/guru/create";
import UpdateGuru from "./admin/data/guru/update";
import DataUser from "./admin/data/user";


function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          {/* <Route component={Navbar} path="/home/layout/navbar" /> */}


          {/* SISWA */}
          <Route component={DashboardSiswa} path="/siswa/dashboard" />
          <Route component={SidebarSiswa} path="/sidebar/sidebarsiswa" />
          <Route component={ProfileSiswa} path="/siswa/profile" />
          <Route component={AbsenSiswa} path="/siswa/absen" />
          <Route component={LogoutSiswa} path="/siswa/logout" />


          {/* GURU */}
          <Route component={SidebarGuru} path="/sidebar/sidebarguru" />
          <Route component={RekapGuru} path="/guru/rekapguru" />
          <Route component={ProfileGuru} path="/guru/profile" />
          <Route component={DashboardGuru} path="/guru/dashboard" />
          <Route component={LogoutGuru} path="/guru/logout" />


          {/* ADMIN */}
          <Route component={SidebarAdmin} path="/sidebar/sidebaradmin" />
          <Route component={DashboardAdmin} path="/admin/dashboard" />
          <Route component={DataSiswa} path="/admin/siswa" />
          <Route component={DataKelas} path="/admin/kelas" />
          <Route component={DataGuru} path="/admin/guru" />
          <Route component={DataUser} path="/admin/user" />
          <Route component={RekapAdmin} path="/admin/rekap" />
          <Route component={LogoutAdmin} path="/admin/logout" />
          <Route component={CreateSiswa} path="/create" />
          <Route component={UpdateSiswa} path="/edit/:nis" />
          <Route component={CreateKelas} path="/createk" />
          <Route component={UpdateKelas} path="/editKelas/:kode_kelas" />
          <Route component={CreateGuru} path="/createg" />
          <Route component={UpdateGuru} path="/updateg/:id_guru" />

        

        </Switch>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;