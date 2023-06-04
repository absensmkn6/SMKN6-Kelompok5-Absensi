import { Fragment } from 'react'
import { ReactDOM } from 'react'
// import killua from '../../images/crop1.png'
// import banner from '../../images/2.webp'
import banner from '../images/2.webp'
import logo from '../images/LogoAbsen3.png'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Home = () => {
  return (
    <>
    <div className="navbar  bg-purple-900 dark:bg-gray-900">
      <div className="flex-1">
        <img src={logo}  width="80px" height="80px" className='ml-5'/>
        {/* <a className="btn btn-ghost normal-case text-xl">Absentra</a> */}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="">About</Link>
            <Link to="">Services</Link>
            <Link to="">Contact</Link>
            <Link to="/login" className="bg-purple-700 text-white">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
    {/* <div className="mx-auto max-w ">
    <div className="relative overflow-hidden">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Absen Kehadiranmu Sekarang
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className=" overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={banner}
                          alt=""
                          width="350px"
                          height="350px"
                          className="h- w- object-cover object-center"
                        />
                      </div>
                      </div>
                    </div>
                  </div>
               </div> 
               <Link to="/register"
                href="#"
                className="inline-block rounded-md border border-transparent bg-purple-700 px-8 py-3 text-center font-medium text-white hover:bg-purple-600"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>

    </div> */}
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Absentra</h1>
      <p className="py-6">Absentra adalah Website Absensi sederhana yang digunakan untuk Mengisi kehadiran Absen dengan Cepat dan Aman. Absentra menghadirkan User Interface dan Experiences yang Effective bagi User</p>
      <Link to="/register" className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
    </>
  )
}

export default Home