import React from "react";

interface BorderBottomSvgProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const BorderBottomSvg: React.FC<BorderBottomSvgProps> = ({
  className,
  ...props
}) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="relative block h-6 w-[calc(134%+1.3px)]" 
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
      {...props}
    >
    <path
        d="M985.66 92.83C906.67 72 823.78 31 743.84 14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84 11.73-114 31.07-172 41.86A600.21 600.21 0 0 1 0 27.35V120h1200V95.8c-67.81 23.12-144.29 15.51-214.34-2.97Z"
        className={className} />
    </svg>
);

export default BorderBottomSvg;