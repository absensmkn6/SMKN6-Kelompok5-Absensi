import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faSignOutAlt,
  faEnvelope,
  faStethoscope,
  faClipboardQuestion,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import SidebarGuru from "../sidebar/sidebarguru";

const DashboardGuru = () => {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <SidebarGuru />
      <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div class="bg-blue-400 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-gradient-to-tl from-orange-500 to-yellow-500 rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <FontAwesomeIcon icon={faCalendarCheck} className="w-7 h-7" />
            </div>
            <div class="text-right">
              <p class="text-2xl">Rekap Siswa</p>
              <span class="text-sm font-bold leading-normal text-white-700">
                Penjelasan
              </span>
            </div>
          </div>
          <div class="bg-blue-400 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-gradient-to-tl from-blue-500 to-violet-500 rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <FontAwesomeIcon icon={faSignOutAlt} className="w-7 h-7" />
            </div>
            <div class="text-right">
              <p class="text-2xl">Logout</p>
              <span class="text-sm font-bold leading-normal text-white-700">
                Penjelasan
              </span>
            </div>
          </div>
        </div>
        <div>
          <div class="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div class="rounded-t mb-0 px-0 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">
                    Aktivitas
                  </h3>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
                <div class="bg-purple-500 dark:bg-gray-800 rounded-md flex items-center justify-between p-3 border-b-4 border-purple-800 dark:border-gray-600 text-white font-medium group">
                  <div class="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-tl from-pink-600 to-pink-400 transition-all duration-300 transform group-hover:rotate-12">
                    <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7" />
                  </div>
                  <div class="text-right">
                    <p class="text-2xl">Siswa Izin</p>
                    <span class="text-sm font-bold leading-normal text-white-500">
                      Detail
                    </span>
                    <div class="flex items-center">
                      <span class="mr-2">30%</span>
                      <div class="relative w-full">
                        <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                          <div
                            style={{ width: "30%" }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-yellow-500 dark:bg-gray-800 rounded-md flex items-center justify-between p-3 border-b-4 border-orange-600 dark:border-gray-600 text-white font-medium group">
                  <div class="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-tl from-red-600 to-orange-600 transition-all duration-300 transform group-hover:rotate-12">
                    <FontAwesomeIcon icon={faStethoscope} className="w-7 h-7" />
                  </div>
                  <div class="text-right">
                    <p class="text-2xl">Siswa Sakit</p>
                    <span class="text-sm font-bold leading-normal text-white-500">
                      Detail
                    </span>
                    <div class="flex items-center">
                      <span class="mr-2">10%</span>
                      <div class="relative w-full">
                        <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                          <div
                            style={{ width: "10%" }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-700"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-red-500 dark:bg-gray-800 rounded-md flex items-center justify-between p-3 border-b-4 border-red-700 dark:border-gray-600 text-white font-medium group">
                  <div class="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-tl from-yellow-600 to-yellow-400 transition-all duration-300 transform group-hover:rotate-12">
                    <FontAwesomeIcon
                      icon={faClipboardQuestion}
                      className="w-7 h-7"
                    />
                  </div>
                  <div class="text-right">
                    <p class="text-2xl">Siswa Alfa</p>
                    <span class="text-sm font-bold leading-normal text-white-500">
                      Detail
                    </span>
                    <div class="flex items-center">
                      <span class="mr-2">0%</span>
                      <div class="relative w-full">
                        <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                          <div
                            style={{ width: "0%" }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-green-500 dark:bg-gray-800 rounded-md flex items-center justify-between p-3 border-b-4 border-green-700 dark:border-gray-600 text-white font-medium group">
                  <div class="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-tl from-blue-600 to-blue-400 transition-all duration-300 transform group-hover:rotate-12">
                    <FontAwesomeIcon icon={faCheckSquare} className="w-7 h-7" />
                  </div>
                  <div class="text-right">
                    <p class="text-2xl">Siswa Hadir</p>
                    <span class="text-sm font-bold leading-normal text-white-500">
                      Detail
                    </span>
                    <div class="flex items-center">
                      <span class="mr-2">60%</span>
                      <div class="relative w-full">
                        <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                          <div
                            style={{ width: "60%" }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="block w-full">
                <div class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></div>
                <ul class="my-1">
                  <li class="flex px-4">
                    <div class="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                      <svg
                        class="w-9 h-9 fill-current text-indigo-50"
                        viewBox="0 0 36 36"
                      >
                        <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                      <div class="flex-grow flex justify-between items-center">
                        <div class="self-center">
                          <a
                            class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                            href="#0"
                          ></a>{" "}
                          Buat Pengumuman
                        </div>
                        <div class="flex-shrink-0 ml-2">
                          <a
                            class="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                            href="#0"
                          >
                            Buat
                            <span>
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="transform transition-transform duration-500 ease-in-out"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></div>
                <ul class="my-1">
                  <li class="flex px-4">
                    <div class="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3">
                      <svg
                        class="w-9 h-9 fill-current text-light-blue-50"
                        viewBox="0 0 36 36"
                      >
                        <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                      <div class="flex-grow flex justify-between items-center">
                        <div class="self-center">
                          <a
                            class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                            href="#0"
                          >
                            Update terbaru
                          </a>
                        </div>
                        <div class="flex-shrink-0 ml-2">
                          <a
                            class="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                            href="#0"
                          >
                            Tambahkan
                            <span>
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="transform transition-transform duration-500 ease-in-out"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGuru;
