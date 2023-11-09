import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    outline?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary_gray' | 'tertiary_orange' | 'tertiary_purple' | 'danger';
    shape?: 'square' | 'round';
    size?: 56 | 48 | 40 | 32;
}
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<unknown>>;
export {};
