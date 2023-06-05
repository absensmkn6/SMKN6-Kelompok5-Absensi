import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCalendarCheck,  faSignOutAlt, faGraduationCap, faSchool, faUsers } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';
import { Link } from "react-router-dom/cjs/react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import axios from "axios";


const RekapAdmin = () => {

  const[DataKelas, setDataKelas] = useState([]);
  const { kelas } = useSelector((state) => state.auth);
  
  
  useEffect(()=>{
    getKelas();
  }, []);
  
  const getKelas = async () =>{
    const response = await axios.get('http://localhost:5000/kelas');
    setDataKelas(response.data)
  };
  
  const deleteKelas = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kelas/${id}`);
      getKelas();
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleDelete = (id) => {
    swal({
      title: "Apakah anda yakin?",
      text: "Data kelas akan dihapus permanen!",
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancel",
          value: null,
          visible: true,
        },
        confirm: {
          text: "Delete",
          value: true,
          visible: true,
          className: "btn-danger",
        }
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteKelas(id).then(() => {
          swal("Sukses! Data Kelas telah dihapus", {
            icon: "success",
          });
        }).catch((error) => {
          console.log(error);
          swal("Oops! Something went wrong.", {
            icon: "error",
          });
        });
      } else {
        swal("Data kelas dipulihkan!");
      }
    });
  };

  return (
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
          <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div class="rounded-t mb-0 px-0 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex items-center grid grid-cols-6 gap-4">
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50 col-start-1 col-end-3">Pilih Kelas</h3>
                  <a href="/create/kelas" htmlFor="modalTambah" className="btn btn-primary btn-sm mr-2 col-end-7 " >+ Tambah Data</a>
                </div>
                
              </div>
              <div class="block w-full overflow-x-auto">
              <table class="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Kelas</th>
                      {/* <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">TTL</th> */}
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Jurusan</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Jumlah Murid</th>
                      <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                  {
                    DataKelas.map((kelas, index)=>(
                      <tr key={kelas.id} class="text-gray-700 dark:text-gray-100">
                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{index+1}</td>
                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{kelas.kelas}</td>
                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{kelas.jurusan}</td>
                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{kelas.jumlah}</td>
                        <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div class="flex items-center">
                            <div class="relative w-full">
                              <Link to={`/rekap/${kelas.id}`} className="btn btn-outline btn-info btn-sm mr-2" htmlFor="modalDetail">Lihat Rekap</Link>
                              <Link to={`/edit/kelas/${kelas.id}`} className="btn btn-outline btn-warning btn-sm mr-2">Edit</Link>
                              <button className="btn btn-outline btn-error btn-sm mr-2" onClick={() => handleDelete(kelas.id)}>Hapus</button>
                            </div>
                          </div>
                        </td>
                    </tr>
                    ))}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>

        </div>
        
      </div>
    
  );

};

export default RekapAdmin;
