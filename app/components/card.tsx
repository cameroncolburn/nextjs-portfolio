import Link from 'next/link'
import GlobeSvg from './globe-svg';
import GithubLogoSvg from './github-logo';

interface CardProps {
    title?: string;
    description?: string;
    category?: string;
    tags?: string[];
    weblink?: string;
    githublink?: string;
    className?: string;
}

export default function Card({title="Project Title", description="Description of project.", category="Website", tags=["HTML", "CSS", "Javascript"], weblink, githublink, className="relative bg-[url('/template-pic.jpg')] bg-cover bg-center bg-no-repeat min-h-[168px] rounded-tl-[5px] rounded-tr-[5px]"}: CardProps) {
    return (
<div className="w-sm bg-color7 rounded-lg transition-transform duration-150 hover:shadow-[_1px_2px_8px_rgb(23_23_23_/_0.6)] hover:scale-105">
    <div className={className}>
        {category && <span className="inline-block bg-yellow-300 text-blue-800 font-bold uppercase py-1 px-3 mt-3 rounded-r-full text-sm">{category}</span>}
    </div>

    <div className="py-0 px-2 text-sm">
        {title && <h5 className="text-[22px] font-semibold mt-4 mb-2 text-neutral-800">{title}</h5>}
        {description && <p className="mb-3 text-neutral-700">{description}
        </p>}
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
            {weblink && <Link href={weblink} target="_blank" rel="noreferrer" className="text-neutral-800 hover:text-emerald-600">
                <GlobeSvg width={24} height={24} className="inline-block ml-2"/>
            </Link>}
            {githublink && <Link href={githublink} target="_blank" rel="noreferrer" className="text-neutral-800 hover:text-emerald-600">
                <GithubLogoSvg width={28} height={28} className="inline-block ml-2"/>
            </Link>}
        </div>
    </div>
</div>

    );
}