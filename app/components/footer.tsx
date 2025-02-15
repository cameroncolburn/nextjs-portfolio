import Link from 'next/link'
import LogoBrandSvg from "./logo-brand-svg";
import { getCurrentYear } from '../utils/dateUtils';
import GithubLogoSvg from './github-logo';
import LinkedinLogoSvg from './linkedin-logo';

export default function FooterBar() {
    return (
        // <footer className="bg-neutral-800">
        <footer className="bg-neutral-800">
        <div className="container flex flex-col items-center py-4 sm:py-6 mx-auto px-7 max-w-5xl sm:flex-row">
            <Link 
                href=""
                className="h-5 text-base group relative z-30 flex justify-center items-center space-x-1.5">
                <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">
                    <LogoBrandSvg width={16} height={16} fill="white" init1="black" init2="black"/>
                </span>
                <span className="-translate-y-0.5"></span>
            </Link>
            <p className="sm:ml-4 sm:pl-4 sm:border-l-2 text-neutral-100 font-semibold">
            &copy; {getCurrentYear()} Cameron Colburn</p>
            <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                <Link href="https://github.com/cameroncolburn/" target="_blank" className="text-neutral-100 hover:text-sky-300">
                    <span className="sr-only">Github</span>
                    <GithubLogoSvg width={24} height={24}/>
                </Link>
                <Link href="https://www.linkedin.com/in/camcolburn" target="_blank" className="text-neutral-100 hover:text-sky-300">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedinLogoSvg width={24} height={24}/>
                </Link>
            </span>
        </div>
      </footer>
    );
  }