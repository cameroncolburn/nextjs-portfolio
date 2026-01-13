import Link from 'next/link'
import Image from 'next/image'
import GlobeSvg from '@/components/icons/globe-svg';
import GithubLogoSvg from '@/components/icons/github-logo';
import { CardProps } from '@/types';

export default function Card({
    title = "Project Title",
    description = "Description of project.",
    category = "Website",
    tags = ["HTML", "CSS", "Javascript"],
    weblink,
    githublink,
    image = "/template-pic.jpg"
}: CardProps) {
    return (
        <div className="w-sm bg-color7 rounded-lg transition-transform duration-150 hover:shadow-[_1px_2px_8px_rgb(23_23_23_/_0.6)] hover:scale-105">
            <div className="relative min-h-[168px] rounded-tl-[5px] rounded-tr-[5px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover object-center"
                />
                {category && (
                    <span className="absolute top-3 left-0 inline-block bg-yellow-300 text-blue-800 font-bold uppercase py-1 px-3 rounded-r-full text-sm z-10">
                        {category}
                    </span>
                )}
            </div>

            <div className="py-0 px-2 text-sm">
                {title && <h5 className="text-[22px] font-semibold mt-4 mb-2 text-neutral-800">{title}</h5>}
                {description && <p className="mb-3 text-neutral-700">{description}</p>}
                <div className="my-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs bg-emerald-500 text-neutral-100 px-[9px] py-[1px] rounded-[10px] inline-block m-[3px]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="text-right ml-2 mr-2 mb-3">
                    {weblink && (
                        <Link href={weblink} target="_blank" rel="noreferrer" className="text-neutral-800 hover:text-emerald-600">
                            <GlobeSvg width={24} height={24} className="inline-block ml-2"/>
                        </Link>
                    )}
                    {githublink && (
                        <Link href={githublink} target="_blank" rel="noreferrer" className="text-neutral-800 hover:text-emerald-600">
                            <GithubLogoSvg width={28} height={28} className="inline-block ml-2"/>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
