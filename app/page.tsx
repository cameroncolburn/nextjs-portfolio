import Image from 'next/link';
import Link from 'next/link';
import Border from './components/border';
import LogoColor from './components/logo-color';
import LaptopCircle from './components/laptop-circle';

export default function Home() {
  return (
    <div className="bg-color6 left-0 leading-none top-0 overflow-hidden w-full sticky">
      <Border />
        <nav className="bg-color6">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link 
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <LogoColor width='40px' height='40px'/>
            </Link>

            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <a href="#" className="block py-2 px-3 text-neutral-900 rounded md:bg-transparent md:text-neutral-950 md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-neutral-900 rounded md:bg-transparent md:text-neutral-950 md:p-0">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-neutral-900 rounded md:bg-transparent md:text-neutral-950 md:p-0">Portfolio</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* about me */}
        <section className="bg-color6" id="about">
            <div className="flex gap-5 flex-row justify-center pb-32 pt-32">
                <div className="self-center max-w-2xl p-4 order-1 z-2">
                    <h1 className="mb-2">Hi, I'm Cam.</h1>
                    <h2 className="text-color5 mb-2">My mission is to write code that creates positive experiences.</h2>
                    <p className="leading-7 mb-4">
                        I'm a second year student at Mohawk College in Hamilton studying Software Development. I have a
                        background in computer networking and have spent several years developing front end applications for
                        the web.
                    </p>
                    <p className="leading-7 mb-4">
                        Computer applications are a tool to help an end user perform a task and hopefully make their
                        lives easier in the process. I approach my applications from the users perspective, and work hard to
                        try and make their experience a positive one.
                    </p>
                </div>
                <div className="self-center min-w-52 max-w-80 p-8 relative top-0 order-2 z-4">
                    {/* <img src="img/self-img.jpg" className="about_me_img" alt="picture of me"> */}
                    <LaptopCircle width='100%' height='100%'/>
                </div>
            </div>
        </section>








    </div>
  );
}
