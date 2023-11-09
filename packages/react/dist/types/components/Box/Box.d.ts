import { AllHTMLAttributes } from 'react';
type HTMLProperties = Omit<AllHTMLAttributes<HTMLElement>, 'className'>;
export declare const Box: import("react").ForwardRefExoticComponent<HTMLProperties & {
    className?: string | undefined;
} & import("react").RefAttributes<HTMLElement>>;
export {};
