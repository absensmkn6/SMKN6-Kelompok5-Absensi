import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { faHome, faUser, faCalendarCheck,  faSignOutAlt, faGraduationCap, faSchool, faUsers } from '@fortawesome/free-solid-svg-icons'

import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const DetailUser = () => {


  const {id} = useParams();
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [nohp, setnohp] = useState('')
  const [alamat, setalamat] = useState('')
  const [gender, setgender] = useState('')
  const [tanggal_lahir, settgl] = useState('')
  const [role, setRole] = useState('')
  const [user_kode, setUser_kode] = useState('')
  const [password, setPassword] = useState('')
  // const [confPassword, setconfPassword] = useState('')
  // const [ttl, setttl] = useState('')
  
  useEffect(()=>{
    getUserById();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.patch(`http://localhost:5000/user/${id}`, {
        nama, email, nohp, alamat, gender,  tanggal_lahir, role, user_kode, password
      });
  
      history.push('/admin/user');
   
    } catch (error) {
      console.log(error);
    }
  
  };
  
  const getUserById = async () => {
      const response = await axios.get(`http://localhost:5000/user/${id}`);
      setNama(response.data.nama);
      setEmail(response.data.email);
      setnohp(response.data.nohp);
      setalamat(response.data.alamat);
      setgender(response.data.gender);
      settgl(response.data.tanggal_lahir);
      setRole(response.data.role);
      setUser_kode(response.data.user_kode);
      setPassword(response.data.password);
      // setconfPassword(response.data.confPassword);
  
  }
  
  const history = useHistory();

  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
    <Sidebar/>
    <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
      <div class="bg-purple-700 dark:bg-gray-800 rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div class="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-tl from-red-600 to-orange-600 transition-all duration-300 transform group-hover:rotate-12">
        <FontAwesomeIcon icon={faUsers} className="w-7 h-7" />
        </div>
        <div class="text-right">
          <p class="text-2xl">Total Siswa</p>
          <span class="text-sm font-bold leading-normal text-emerald-500">150</span>
        </div>
      </div>
      <div class="bg-purple-700 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div class="flex justify-center items-center w-14 h-14 bg-gradient-to-tl from-emerald-500 to-teal-400 rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <FontAwesomeIcon icon={faSchool} className="w-7 h-7" />
          
        </div>
        <div class="text-right">
          <p class="text-2xl">Total Kelas</p>
          <span class="text-sm font-bold leading-normal text-emerald-500">8</span>

        </div>
      </div>
      <div class="bg-purple-700 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div class="flex justify-center items-center w-14 h-14 bg-gradient-to-tl from-orange-500 to-yellow-500 rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <FontAwesomeIcon icon={faUser} className="w-7 h-7" />

        </div>
        <div class="text-right">
          <p class="text-2xl">Total Guru</p>
          <span class="text-sm font-bold leading-normal text-emerald-500">40</span>
        </div>
      </div>
      <div class="bg-purple-700 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div class="flex justify-center items-center w-14 h-14 bg-gradient-to-tl from-blue-500 to-violet-500 rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <FontAwesomeIcon icon={faCalendarCheck} className="w-7 h-7" />

        </div>
        <div class="text-right">
          <p class="text-2xl">Absen Hari ini</p>
          <span class="text-sm font-bold leading-normal text-emerald-500">95 Murid</span>
        </div>
      </div>
    </div>
    <div>
    
    <div class="p-4 gap-4">
      <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
        <div class="rounded-t mb-0 px-0 border-0">
          <div class="flex flex-wrap items-center px-4 py-2">
            <div class="relative w-full max-w-full flex items-center grid grid-cols-6 gap-4">
              <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50 col-start-1 col-end-3">Detail Data User</h3>
            </div>
            
          </div>
          <div class="block w-full overflow-x-auto">
            
          <form>
                    <div class="card-body">
                        <div class="form-group">
                            <label>ID</label><br></br>
                            <input type="number" className="input input-bordered mt-2 input-primary w-full max-w" value={id} readOnly />
                        </div>
                        <div class="form-group">
                            <label>Nama</label><br></br>
                            <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" value={nama} readOnly />
                        </div>
                        <div class="form-group">
                            <label>Email</label><br></br>
                            <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" value={email} readOnly />
                        </div>
                        
                        <div class="form-group">
                            <label>No Hp</label><br></br>
                            <input type="number" className="input input-bordered mt-2 input-primary w-full max-w" value={nohp} readOnly  />
                        </div>
                        <div class="form-group">
                            <label>Alamat</label><br></br>
                            <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" value={alamat} readOnly />
                        </div>
                        <div class="form-group">
                            <label>Jenis Kelamin</label><br></br>
                            <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" value={gender} readOnly />
                        </div>
                        <div class="form-group">
                            <label>Tanggal Lahir</label><br></br>
                            <input type="date" className="input input-bordered mt-2 input-primary w-full max-w" value={tanggal_lahir} readOnly />
                        </div>
                        <div class="form-group">
                            <label>Role</label><br></br>
                            <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" value={role} readOnly />
                        </div>
                        
                        <div class="form-group">
                            <label>User Kode</label><br></br>
                            <input type="number" className="input input-bordered mt-2 input-primary w-full max-w" value={user_kode} readOnly  />
                        </div>

                        <div class="form-group">
                            <label>Password</label><br></br>
                            <input type="password" className="input input-bordered mt-2 input-primary w-full max-w" value={password} readOnly />
                        </div>
                    </div>

                <div class="card-footer ml-10">
                    <Link to="/admin/user" className="btn btn-primary btn-sm ml-5 mb-5 ">Oke</Link>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>

    </div>
    
  </div>
  )
}

export default DetailUser