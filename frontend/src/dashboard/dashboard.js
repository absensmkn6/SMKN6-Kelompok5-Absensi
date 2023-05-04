import React from "react";
import avatar from '../images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faUser, faCalendarCheck,  faSignOutAlt,  } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    return(
        <div className="fixed left-0 top-0 bottom-0 bg-gray-900 text-white w-64 py-4">
            <div className="flex flex-col items-center mb-8">
                <img src={avatar} alt="Profile Picture" className="rounded-full mb-2" width="120" height="120"/>
                <p className="text-lg font-semibold">"Nama Lengkap"</p>
            </div>
            <ul className="text-sm">
                <li className="mb-4">
                    <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-800 rounded">
                        <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
                        <span className="ml-2">Dashboard</span>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="/profile" className="block px-4 py-2 hover:bg-gray-800 rounded">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    <span className="ml-2">Profile</span>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="/absen" className="block px-4 py-2 hover:bg-gray-800 rounded">
                    <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
                    <span className="ml-2">Absen</span>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="/logout" className="block px-4 py-2 hover:bg-gray-800 rounded">
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                    <span className="ml-2">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Dashboard;
