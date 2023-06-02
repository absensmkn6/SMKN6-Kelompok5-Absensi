import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCalendarCheck,  faSignOutAlt, faGraduationCap, faSchool, faUsers } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom/cjs/react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import axios from "axios";


const DaftarRekap = () => {

  const[DataRekap, setDataRekap] = useState([]);
  const { kelas } = useSelector((state) => state.auth);
  
  
  useEffect(()=>{
    getKelas();
  }, []);
  
  const getKelas = async () =>{
    const response = await axios.get('http://localhost:5000/kelas');
    setDataRekap(response.data)
  };
  
  const deleteKelas = async (id) =>{
    try{
      await axios.delete(`http://localhost:5000/kelas/${id}`);
      getKelas();
    } catch (error){
      console.log(error);
    }
  }


  

    const data = [
      { id: 1, nama: 'ADITYA HARISAPUTRO' },
      { id: 2, nama: 'AGNES CHRISFANDIKA CESARSARI' },
      { id: 3, nama: 'AIRA DESTA SETYAWAN' },
      { id: 4, nama: 'ALYA CHEVA AZAHRA' },
      { id: 5, nama: 'ANISA RAMADANI' },
      { id: 6, nama: 'ARDIANSYAH ICHWAN PUTRA' },
      { id: 7, nama: 'ARZAKI MUHAMAD FADIL' },
      { id: 8, nama: 'BARIK OCTAVIA ADITAMA PUTRA' },
      { id: 9, nama: 'DESHEA NICO MAULANA' },
      { id: 10, nama: 'DEWI SEPTIANI' },
      { id: 11, nama: 'DIDAN DERMAWAN' },
      { id: 12, nama: 'DIMAS ULUNG SEPTIAJI' },
      { id: 13, nama: 'FRANCISCO DESTALIANO PUTRA SADEWA' },
      { id: 14, nama: 'GABRIEL HANDARA PUTRA NUGRAHA' },
      { id: 15, nama: 'ILHAN NUGROHO' },
      { id: 16, nama: 'INDAR DWI PRAMESTHI' },
      { id: 17, nama: 'JESSYCHA DEVI RUDISTA' },
      { id: 18, nama: 'KAYLA RANIAHASNA ARYADEWI' },
      { id: 19, nama: 'MAISYA FARADILLA' },
      { id: 21, nama: 'MENTARI DWI PRASTIWI' },
      { id: 22, nama: 'MERZY ANJANI RATNA GANADI' },
      { id: 23, nama: 'MUSTOFA ALI' },
      { id: 24, nama: 'RADITYA ABDEE PRATAMA' },
      { id: 25, nama: 'RAJENDRA AGRA FARERL M' },
      { id: 26, nama: 'REYVAN YOAN GISAVANA' },
      { id: 27, nama: 'RIYO PRADANA NAVIGASI F' },
      { id: 28, nama: 'RUNA AULIA SUCI N' },
      { id: 29, nama: 'ASAHARTIAN IRMA RAHMARANI' },
      { id: 30, nama: 'SHIFA NURKHOLIS AZIZ' },
      { id: 32, nama: 'SHOFIYYAH AMALILLIA NAFIAH' },
      { id: 33, nama: 'THORIQ MUHAMMAD HANIF R' },
      { id: 34, nama: 'WIDYA PUJI ASTUTI' },
      { id: 35, nama: 'YUSUF MUHAMMAD FARREL' },
      { id: 36, nama: 'ZASKIA AYU INAYAH' },
    ];
  
    const [currentPage, setCurrentPage] = useState(1);
    const dataPerPage = 6;
    const totalV = 31;
    const totalPages = Math.ceil(data.length / dataPerPage);
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);
  
    const paginate = (pageNumber) => {
      if (pageNumber === -1) {
        setCurrentPage((prevPage) => prevPage - 1);
      } else if (pageNumber === +1) {
        setCurrentPage((prevPage) => prevPage + 1);
      } else {
        setCurrentPage(pageNumber);
      }
    };
  
  

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
        
        <div class="grid p-4 gap-4">
            <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                <div class="rounded-t mb-0 px-0 border-0">
                <div class="flex flex-wrap items-center px-4 py-2">
                    <div class="relative w-full max-w-full flex-grow flex-1">
                    <h3 class="text-xl text-white mb-3 mt-2">Januari</h3>
                    </div>
                </div>
 <div className="block w-full overflow-x-auto"> 
 <table className="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No</th>
            <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Nama</th>
            {Array.from({ length: totalV }, (_, index) => (
              <th key={index} className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">{index + 1}</th>
            ))}
            <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{indexOfFirstData + index + 1}</td>
              <td>{item.nama}</td>
              {Array.from({ length: totalV }, (_, vIndex) => (
                <td key={vIndex} className="border-t-0 px-4 py-2">v</td>
              ))}
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <div className="relative w-full">
                    <Link to="#" className="btn btn-outline btn-info btn-sm mr-2" htmlFor="modalDetail">Lihat Rekap</Link>
                    <Link to="#" className="btn btn-outline btn-warning btn-sm mr-2">Edit</Link>
                    <button className="btn btn-outline btn-error btn-sm mr-2" onClick={e => deleteKelas(kelas.id)}>Hapus</button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
        {/* Pagination */}
            <div className="join flex justify-center mt-4 ">
            <nav className="block bg-gray-200">
            <ul className="flex pl-0 rounded list-none flex-wrap">
              <li>
                <button
                  className={`dark:bg-gray-600 text-black hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-l-md ${
                    currentPage === -1 ? 'btn-disabled' : ''
                  }`}
                  onClick={() => paginate(-1)}
                  disabled={currentPage === -1}
                >
                  Prev
                </button>
              </li>
              {[1, 2, 3].map((pageNumber) => (
                <li key={pageNumber}>
                  <button
                    className={`dark:bg-gray-600 text-black hover:bg-gray-300 hover:text-gray-900 px-3 py-2 ${
                      currentPage === pageNumber ? 'btn-disabled' : ''
                    }`}
                    onClick={() => paginate(pageNumber)}
                    disabled={currentPage === pageNumber}
                  >
                    {pageNumber}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={`dark:bg-gray-600 text-black hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-l-md ${
                    currentPage === totalPages ? 'btn-disabled' : ''
                  }`}
                  onClick={() => paginate(+1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
          </div>
      </div>
                </div>
               
            </div>
            </div>
        </div>

        </div>
        
      </div>
    
  );

};

export default DaftarRekap;
