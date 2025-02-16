import Image from 'next/image';
import Link from 'next/link'
import GlobeSvg from './globe-svg';
import GithubLogoSvg from './github-logo';

export default function Card() {
    return (
<div className="max-w-sm bg-color7 rounded-lg transition-transform duration-150 hover:shadow-[_1px_2px_8px_rgb(23_23_23_/_0.6)] hover:scale-105">
    <div className="relative bg-[url('/profilesticker.png')] bg-cover bg-center bg-no-repeat min-h-[168px] rounded-tl-[5px] rounded-tr-[5px]">
        <span className="inline-block bg-yellow-300 text-blue-800 font-bold uppercase py-1 px-3 mt-3 rounded-r-full text-sm">Website</span>
    </div>

    <div className="py-0 px-2 text-sm">
        <h5 className="text-[22px] font-semibold mt-4 mb-2 text-neutral-800">Profile Sticker</h5>
        <p className="mb-3 text-neutral-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className="my-4">
        <span className="text-xs bg-emerald-500 text-neutral-100 px-[9px] py-[1px] rounded-[10px] inline-block m-[3px]">
        HTML</span>
        <span className="text-xs bg-emerald-500 text-neutral-100 px-[9px] py-[1px] rounded-[10px] inline-block m-[3px]">
        CSS</span>
        <span className="text-xs bg-emerald-500 text-neutral-100 px-[9px] py-[1px] rounded-[10px] inline-block m-[3px]">
        SCSS</span>
        <span className="text-xs bg-emerald-500 text-neutral-100 px-[9px] py-[1px] rounded-[10px] inline-block m-[3px]">
        JavaScript</span>
        <span className="text-xs bg-emerald-500 text-neutral-100 px-[9px] py-[1px] rounded-[10px] inline-block m-[3px]">
        Mustache.js</span>
        </div>
        <div className="text-right ml-2 mr-2 mb-3">
            <Link href="#" target="_blank" rel="noreferrer" className="text-neutral-800 hover:text-emerald-600">
                <GlobeSvg width={24} height={24} className="inline-block ml-2"/>
            </Link>
            <Link href="#" target="_blank" rel="noreferrer" className="text-neutral-800 hover:text-emerald-600">
                <GithubLogoSvg width={28} height={28} className="inline-block ml-2"/>
            </Link>
        </div>
    </div>
</div>

    );
}