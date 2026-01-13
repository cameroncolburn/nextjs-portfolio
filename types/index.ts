import { SVGProps } from 'react';

/**
 * Base props for SVG icon components
 * Extends React's SVGProps for full SVG attribute support
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
    width?: string | number;
    height?: string | number;
    className?: string;
    fill?: string;
}

/**
 * Props for the LogoBrand SVG component
 * Includes gradient customization options
 */
export interface LogoBrandProps extends IconProps {
    init1?: string;
    init2?: string;
    gradDark?: string;
    gradMed?: string;
    gradLight?: string;
}

/**
 * Props for the LaptopCircle SVG component
 * Includes color customization for circle elements
 */
export interface LaptopCircleProps extends SVGProps<SVGSVGElement> {
    className?: string;
    outerCircle?: string;
    innerHighlight?: string;
}

/**
 * Props for project Card component
 */
export interface CardProps {
    title?: string;
    description?: string;
    category?: string;
    tags?: string[];
    weblink?: string;
    githublink?: string;
    image?: string;
}
