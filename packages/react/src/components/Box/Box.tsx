import { AllHTMLAttributes, createElement, ElementType, forwardRef } from 'react';
import * as styles from '@kpds/css/components/box.css';
import clsx from 'clsx';

type HTMLProperties = Omit<AllHTMLAttributes<HTMLElement>, 'className'>;

type Props = HTMLProperties & {
  className?: string;
};

export const Box = forwardRef<HTMLElement, Props>(({ className, ...props }: Props, ref) => {
  return <div {...props} className={clsx(styles.variants, className)} />;
});
