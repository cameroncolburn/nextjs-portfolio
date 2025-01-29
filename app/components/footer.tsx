import Link from 'next/link'
import LogoBrandSvg from "./logo-brand-svg";

export default function FooterBar() {
    return (
        <footer className="bg-neutral-800">
        <div className="container flex flex-col items-center py-4 sm:py-8 mx-auto px-7 max-w-5xl sm:flex-row">
            <Link 
                href=""
                className="h-5 text-base group relative z-30 flex justify-center items-center space-x-1.5">
                <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">
                    <LogoBrandSvg width={16} height={16}/>
                </span>
                <span className="-translate-y-0.5"></span>
            </Link>
            <p className="sm:ml-4 sm:pl-4 sm:border-l-2 text-neutral-100">
            © 2024 Cameron Colburn</p>
            <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                <Link href="https://github.com/cameroncolburn/" target="_blank" className="text-neutral-100 hover:text-sky-300">
                    <span className="sr-only">Github</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                </Link>
                <Link href="https://www.linkedin.com/in/camcolburn" target="_blank" className="text-neutral-100 hover:text-sky-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M 19.679688 1.921875 L 4.320312 1.921875 C 2.996094 1.921875 1.921875 2.996094 1.921875 4.320312 L 1.921875 19.679688 C 1.921875 21.003906 2.996094 22.078125 4.320312 22.078125 L 19.679688 22.078125 C 21.003906 22.078125 22.078125 21.003906 22.078125 19.679688 L 22.078125 4.320312 C 22.078125 2.996094 21.003906 1.921875 19.679688 1.921875 Z M 8.160156 9.601562 L 8.160156 18.71875 L 5.28125 18.71875 L 5.28125 9.601562 Z M 5.28125 6.945312 C 5.28125 6.273438 5.855469 5.761719 6.71875 5.761719 C 7.585938 5.761719 8.125 6.273438 8.160156 6.945312 C 8.160156 7.617188 7.621094 8.160156 6.71875 8.160156 C 5.855469 8.160156 5.28125 7.617188 5.28125 6.945312 Z M 18.71875 18.71875 L 15.839844 18.71875 C 15.839844 18.71875 15.839844 14.273438 15.839844 13.921875 C 15.839844 12.960938 15.359375 12 14.160156 11.980469 L 14.121094 11.980469 C 12.960938 11.980469 12.480469 12.96875 12.480469 13.921875 C 12.480469 14.355469 12.480469 18.71875 12.480469 18.71875 L 9.601562 18.71875 L 9.601562 9.601562 L 12.480469 9.601562 L 12.480469 10.828125 C 12.480469 10.828125 13.40625 9.601562 15.269531 9.601562 C 17.175781 9.601562 18.71875 10.910156 18.71875 13.566406 Z M 18.71875 18.71875 "></path> </svg>
                </Link>
            </span>
        </div>
      </footer>
    );
  }