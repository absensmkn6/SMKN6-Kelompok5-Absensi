import axios from "axios"
import React, { useState } from "react"
// import { BrowserRouter as UseNavigate } from "react-router-dom"
// import useNavigate from "react-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCalendarCheck,  faSignOutAlt, faGraduationCap, faSchool, faUsers } from '@fortawesome/free-solid-svg-icons'
import SidebarAdmin from "../../../sidebar/sidebaradmin";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



const CreateKelas = () => {

const [nama, setnamakelas] = useState('')
// const [jurusan, setjurusan] = useState('')
const [jumlah, setjumlah] = useState('')


const history = useHistory();

        // JANGAN DIHAPUS
const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    
      await axios.post('http://localhost:5000/kelas', {nama, jumlah});

      history.push('/admin/kelas');
   
    } catch (error) {
      console.log(error);
    }
  
}

    return(
        <>
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <SidebarAdmin/>
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
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50 col-start-1 col-end-3">Data Kelas</h3>
                  <Link to="/create" htmlFor="modalTambah" className="btn btn-primary btn-sm mr-2 col-end-7 " >+ Tambah Data</Link>
                </div>
                
              </div>
              <div class="block w-full overflow-x-auto">
              <form onSubmit={handleSubmit}>
                        <div class="card-body">
                            <div class="form-group">
                                <label>Kelas</label><br></br>
                                <input type="text" className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Kelas" onChange={e => setnamakelas(e.target.value)} name="nama_kelas" />
                            </div>
                            <div class="form-group">
                                <label>Jumlah Murid</label><br></br>
                                <input type="number" className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Jumlah Murid" onChange={e => setjumlah(e.target.value)}/>
                                
                            </div>
                        </div>

                    <div class="card-footer">
                    <button  class="btn btn-primary btn-sm ml-8 mb-5">ADD</button>
                    <Link to="admin/kelas"  class="btn btn-error btn-sm ml-5 mb-5">Cancel</Link>
                    </div>
                </form>
              </div>
            </div>
          </div>
      

      
        </div>
        </div>

        </div>
        
      </div>
</>
    )
}

export default CreateKelas