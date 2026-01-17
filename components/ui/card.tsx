import Link from 'next/link'
import Image from 'next/image'
import GlobeSvg from '@/components/icons/globe-svg';
import GithubLogoSvg from '@/components/icons/github-logo';
import { CardProps } from '@/types';

export default function Card({
    title = "Project Title",
    description = "Description of project.",
    tags = ["HTML", "CSS", "Javascript"],
    weblink,
    githublink,
    image = "/template-pic.jpg"
}: CardProps) {
    return (
        <div className="w-sm h-full flex flex-col bg-surface border-2 border-neutral-300 rounded-lg transition-transform duration-150 hover:shadow-[_1px_2px_8px_rgb(23_23_23_/_0.6)] hover:scale-105 hover:border-neutral-100">
            <div className="relative min-h-44 rounded-t-md overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover object-center"
                />
            </div>

            <div className="flex-1 flex flex-col py-0 px-3 text-sm">
                {title && <h5 className="text-xl font-semibold mt-2 mb-1 text-neutral-800">{title}</h5>}
                <div className="mb-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] bg-emerald-200 text-dark-100 px-2 rounded-md inline-block m-1 font-bold"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {description && <p className="flex-1 mb-3 text-neutral-700">{description}</p>}
                <div className="flex justify-end items-center mb-3">
                    {weblink && (
                        <Link href={weblink} target="_blank" rel="noreferrer" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold h-8 px-2 rounded inline-flex items-center mx-1">
                            <GlobeSvg width={18} height={18} className="inline-block mr-1"/>
                            <span>Website</span>
                        </Link>
                    )}
                    {githublink && (
                        <Link href={githublink} target="_blank" rel="noreferrer" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold h-8 px-2 rounded inline-flex items-center mx-1">
                            <GithubLogoSvg width={22} height={22} className="inline-block mr-1"/>
                            <span>Github</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
