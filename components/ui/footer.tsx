import Link from 'next/link'
import LogoBrandSvg from "@/components/icons/logo-brand-svg";
import { getCurrentYear } from '@/app/utils/dateUtils';

export default function FooterBar() {
    return (
        <footer className="bg-neutral-800">
        <div className="container flex flex-col justify-center items-center py-6 sm:py-6 mx-auto px-7 max-w-5xl sm:flex-row">
            <span className="flex justify-center items-center order-last sm:order-first">
                <Link
                    href="#home"
                    className="h-5 text-base group relative z-30  space-x-1.5">
                    <span className="inline-block text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] transition-transform ease-in-out duration-300">
                        <LogoBrandSvg width={16} height={16} fill="white" init1="black" init2="black"/>
                    </span>
                    <span className="-translate-y-0.5"></span>
                </Link>
                <p className="ml-4 pl-4 border-l-2 text-neutral-100">
                &copy; {getCurrentYear()} Cameron Colburn</p>
            </span>
        </div>
      </footer>
    );
  }
