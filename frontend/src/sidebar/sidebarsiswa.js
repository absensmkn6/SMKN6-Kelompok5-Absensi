import React, { useState, useEffect } from "react";
import avatar from '../images/avatar.png';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faUser, faCalendarCheck,  faSignOutAlt,  } from '@fortawesome/free-solid-svg-icons'


const SidebarSiswa = () => {
  const countdownDate = new Date("2023-07-01T00:00:00Z").getTime();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
    return(
        <div>
        <div class="fixed w-full flex items-center justify-between h-14 text-white z-10">
        <div class="flex items-center justify-start md:justify-center w-full md:w-64 h-14 bg-purple-900 dark:bg-gray-900 border-none">
        <b><p class="text-1xl ml-1">SISWA</p></b>
        </div>
  <div class="flex justify-between items-center flex-grow h-14 bg-purple-900 dark:bg-gray-900 header-right">
  <nav class = "flex px-5 py-3 text-gray-700  rounded-lg bg-opacity-50 bg-gray-50 dark:bg-[#1E293B] " aria-label="Breadcrumb">
            <ol class = "inline-flex items-center space-x-1 md:space-x-3">
                <li class = "inline-flex items-center">
                    <a href="../siswa/dashboard" class = "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        <svg class = "w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        Siswa
                    </a>
                </li>
            </ol>
        </nav>
    <ul class="flex items-center">
    <li>
    <Countdown date={countdownDate} />
    </li>
      <li className="mr-4">
    
      <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{date.toLocaleDateString()}</span>
          <span className="text-info">don't forget to be absent today</span>
          <div className="card-actions">
            <Link to="/siswa/absen">
            <button className="btn btn-primary btn-block">Absen</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
      </li>
    </ul>
  </div>
</div>
      <div class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-purple-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul class="flex flex-col py-4 space-y-1">
          
          <li>
              <div className="flex flex-col items-center mr-5">
                <div className="text-center items-center">
                  <img src={avatar} alt="Profile Picture" className="rounded-full mb-2 mt-4 hidden md:block" width="120" height="120"/>
                  <p className="text-lg font-semibold hidden md:block">Nama Siswa</p>

                </div>
              </div>
            </li>
            
          <li>
          <li class="px-5 hidden md:block">
            <div class="flex flex-row items-center h-8">
              <div class="text-sm font-light tracking-wide text-gray-400 ">Menu</div>
            </div>
          </li>
            <a href="../siswa/dashboard" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6 active">
              <span class="inline-flex justify-center items-center ml-4">
              <FontAwesomeIcon icon={faTachometerAlt} className="w-5 h-5" />
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="../siswa/profile" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
              <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
            </a>
          </li>
          <li>
            <a href="../siswa/absen" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
              <FontAwesomeIcon icon={faCalendarCheck} className="w-5 h-5" />
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Absen</span>
            </a>
          </li>
          <li>
            <a href="../siswa/logout" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
              <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5" />
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Logout</span>
            </a>
          </li>
        </ul>
        <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2023</p>
      </div>
    </div>
    </div>
    )
};

export default SidebarSiswa;