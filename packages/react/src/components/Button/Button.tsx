import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, Ref } from 'react';
import * as styles from '@kpds/css/components/button.css';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  outline?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary_gray' | 'tertiary_orange' | 'tertiary_purple' | 'danger';
  shape?: 'square' | 'round';
  size?: 56 | 48 | 40 | 32;
}

export const Button = forwardRef((props: ButtonProps, forwardedRef) => {
  return <button {...props} className={styles.variants} />;
});
