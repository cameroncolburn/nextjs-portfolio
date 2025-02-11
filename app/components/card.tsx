import Image from 'next/image';
import Link from 'next/link'
import GlobeSvg from './globe-svg';
import GithubLogoSvg from './github-logo';

export default function Card() {
    return (
<div className="max-w-sm bg-color7 rounded-lg shadow-sm">
    <div className="relative bg-[url('/profilesticker.png')] bg-cover bg-center bg-no-repeat min-h-[168px] rounded-tl-[5px] rounded-tr-[5px]">
        {/* <Image src={"/profilesticker.png"} width={385} height={168} alt={"Profile Sticker"} className="rounded-tr-lg rounded-tl-lg"/> */}
        <span>Website</span>
    </div>

    <div className="py-0 px-2 text-sm">
        <h5 className="text-[22px] font-normal mt-4 mb-2 text-color1">Profile Sticker</h5>
        <p className="mb-3 font-normal text-color1">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className="my-4">
        <span className="text-sm bg-color10 text-color7 px-[9px] py-[1px] rounded-[10px] inline-block m-[3px] font-thin">
        HTML</span>
        <span className="text-sm bg-color10 text-color7 px-[9px] py-[1px] rounded-[10px] inline-block m-[3px] font-thin">
        CSS</span>
        <span className="text-sm bg-color10 text-color7 px-[9px] py-[1px] rounded-[10px] inline-block m-[3px] font-thin">
        SCSS</span>
        <span className="text-sm bg-color10 text-color7 px-[9px] py-[1px] rounded-[10px] inline-block m-[3px] font-thin">
        JavaScript</span>
        <span className="text-sm bg-color10 text-color7 px-[9px] py-[1px] rounded-[10px] inline-block m-[3px] font-thin">
        Mustache.js</span>
        </div>
        <div className="text-right ml-2 mr-2 mb-3">
            <Link href="#" target="_blank" rel="noreferrer" className="text-color1 hover:text-color2">
                <GlobeSvg width={24} height={24} className="inline-block ml-2"/>
            </Link>
            <Link href="#" target="_blank" rel="noreferrer" className="text-color1 hover:text-color2">
                <GithubLogoSvg width={28} height={28} className="inline-block ml-2"/>
            </Link>
        </div>
    </div>
</div>

    );
}