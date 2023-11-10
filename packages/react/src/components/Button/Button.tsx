import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, Ref } from 'react';
import * as styles from '@kpds/css/components/button.css';
import clsx from 'clsx';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  shape?: 'square' | 'rounded';
  size?: 'extraLarge' | 'large' | 'medium' | 'small';
  variant?: 'fill' | 'stroke' | 'tender';
}

export const Button = forwardRef(({ className, size, color, shape, variant, ...props }: ButtonProps, forwardedRef) => {
  return (
    <button
      {...props}
      className={clsx(
        styles.variants({
          size,
          color,
          shape,
          variant,
        }),
        className,
      )}
    />
  );
});
