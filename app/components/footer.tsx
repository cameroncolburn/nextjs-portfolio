import Link from 'next/link'
import LogoBrandSvg from "./logo-brand-svg";
import { getCurrentYear } from '../utils/dateUtils';
import GithubLogoSvg from './github-logo';
import LinkedinLogoSvg from './linkedin-logo';

export default function FooterBar() {
    return (
        // <footer className="bg-neutral-800">
        <footer className="bg-neutral-800">
        <div className="container flex flex-col items-center py-8 sm:py-6 mx-auto px-7 max-w-5xl sm:flex-row">
            <span className="flex justify-center items-center order-last sm:order-first">
                <Link 
                    href="#home"
                    className="h-5 text-base group relative z-30  space-x-1.5">
                    <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">
                        <LogoBrandSvg width={16} height={16} fill="white" init1="black" init2="black"/>
                    </span>
                    <span className="-translate-y-0.5"></span>
                </Link>
                <p className="ml-4 pl-4 border-l-2 text-neutral-100">
                &copy; {getCurrentYear()} Cameron Colburn</p>
            </span>
            <span className="flex justify-center mt-0 mb-6 space-x-5 ml-0 sm:mb-0 sm:ml-auto">
                <Link href="https://github.com/cameroncolburn/" target="_blank" className="text-neutral-100 hover:text-sky-300">
                    <span className="sr-only">Github</span>
                    {/* <GithubLogoSvg width={24} height={24}/> */}
                    <GithubLogoSvg className="w-[45px] h-[45px] sm:w-[24px] sm:h-[24px]"/>
                </Link>
                <Link href="https://www.linkedin.com/in/camcolburn" target="_blank" className="text-neutral-100 hover:text-sky-300">
                    <span className="sr-only">LinkedIn</span>
                    {/* <LinkedinLogoSvg width={24} height={24}/> */}
                    <LinkedinLogoSvg className="w-[45px] h-[45px] sm:w-[24px] sm:h-[24px]"/>
                </Link>
            </span>
        </div>
      </footer>
    );
  }