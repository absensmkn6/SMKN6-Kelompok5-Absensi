import axios from "axios"
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarCheck, faSchool, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";



const CreateKelas = () => {

const [kode_kelas, setKodeKelas] = useState('')
const [kelas, setKelas] = useState('')
const [jurusan, setJurusan] = useState('')
const [jumlah, setJumlah] = useState('')


const history = useHistory();

        // JANGAN DIHAPUS
const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    
      await axios.post('http://localhost:5000/kelas', {kelas, jurusan, jumlah});

      history.push('/admin/kelas');
   
    } catch (error) {
      console.log(error);
    }
  
}
// function handleSubmit(event) {
//     event.preventDefault();
//     axios.post('http://localhost:5000/siswa', { nama, kelas, jurusan,  alamat, gender, nohp}).then(res => {
//         console.log(res);
//         history.push('/admin/datas');
//     }).catch(err => console.log(err));
// }

    return(
        <>
        <motion.div

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity:0 }}
          transition={{  duration: 2 }}
          >
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Sidebar/>
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <div class="bg-indigo-500 dark:bg-gray-800 rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div class="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-tl from-red-600 to-orange-600 transition-all duration-300 transform group-hover:rotate-12">
          <FontAwesomeIcon icon={faUsers} className="w-7 h-7" />
          </div>
          <div class="text-right">
            <p class="text-2xl">Total Siswa</p>
            <span class="text-sm font-bold leading-normal text-gray-300 dark:text-emerald-500">100</span>
          </div>
        </div>
        <div class="bg-indigo-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div class="flex justify-center items-center w-14 h-14 bg-gradient-to-tl from-emerald-500 to-teal-400 rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <FontAwesomeIcon icon={faSchool} className="w-7 h-7" />
            
          </div>
          <div class="text-right">
            <p class="text-2xl">Total Kelas</p>
            <span class="text-sm font-bold leading-normal text-gray-300 dark:text-emerald-500">8</span>

          </div>
        </div>
        <div class="bg-indigo-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div class="flex justify-center items-center w-14 h-14 bg-gradient-to-tl from-orange-500 to-yellow-500 rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <FontAwesomeIcon icon={faUser} className="w-7 h-7" />

          </div>
          <div class="text-right">
            <p class="text-2xl">Total Guru</p>
            <span class="text-sm font-bold leading-normal text-gray-300 dark:text-emerald-500">40</span>
          </div>
        </div>
        <div class="bg-indigo-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div class="flex justify-center items-center w-14 h-14 bg-gradient-to-tl from-blue-500 to-violet-500 rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <FontAwesomeIcon icon={faCalendarCheck} className="w-7 h-7" />

          </div>
          <div class="text-right">
            <p class="text-2xl">Absen Hari ini</p>
            <span class="text-sm font-bold leading-normal text-gray-300 dark:text-emerald-500">95 Murid</span>
          </div>
        </div>
      </div>
        <div>
        
        <div class="p-4 gap-4">
          <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-indigo-500 dark:bg-gray-800 w-full shadow-lg rounded">
            <div class="rounded-t mb-0 px-0 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex items-center grid grid-cols-6 gap-4">
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50 col-start-1 col-end-3">Data Kelas</h3>
                  {/* <a href="/../create/siswa"  className="btn btn-primary btn-sm mr-2 col-end-7 " >+ Tambah Data</a> */}
                </div>
                
              </div>
              <div class="block w-full overflow-x-auto">
              <form onSubmit={handleSubmit}>
                        <div class="card-body">
                            {/* <div class="form-group">
                                <label>NIS</label><br></br>
                                <input type="number" className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan NIS Siswa" onChange={e => setnis(e.target.value)} name="nis" />
                            </div> */}
                            <div class="form-group">
                                <label>Kelas</label><br></br>
                                <select className="select select-primary w-full max-w mt-2" value={kelas} onChange={e => setKelas(e.target.value)}>
                                <option selected>Pilih Kelas</option>
                                    <option value="X">X</option>
                                    <option value="XI">XI</option>
                                    <option value="XII">XII</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Jurusan</label><br></br>
                                <select className="select select-primary w-full max-w mt-2" value={jurusan} onChange={e => setJurusan(e.target.value)}>
                                <option  selected>Pilih Jurusan</option>
                                    <option value="RPL">RPL</option>
                                    <option value="PPLG">PPLG</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Jumlah Murid</label><br></br>
                                <input type="number" className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Jumlah Murid" onChange={e => setJumlah(e.target.value)} />
                                    
                            </div>
                                
                                {/* <div class="form-group">
                                    <label>Username</label><br></br>
                                    <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Username" />
                                </div>
                                <div class="form-group">
                                    <label>Password</label><br></br>
                                    <input type="text" value={''} className="input input-bordered mt-2 input-primary w-full max-w" placeholder="Masukkan Password"/>
                                </div> */}
                        </div>

                    <div class="card-footer">
                    <button  class="btn btn-primary btn-sm ml-5 mb-5">ADD</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
      

      
        </div>
        </div>

        </div>
        
      </div>
      </motion.div>
</>
    )
}

export default CreateKelas