import { AllHTMLAttributes, createElement, ElementType, forwardRef } from 'react';
import * as styles from '@kpds/css/components/box.css';

type HTMLProperties = Omit<AllHTMLAttributes<HTMLElement>, 'className'>;

type Props = HTMLProperties & {
  className?: string;
};

export const Box = forwardRef<HTMLElement, Props>(({ className, ...props }: Props, ref) => {
  // TODO: 클래스 합쳐야함
  return <div {...props} className={styles.variants} />;
});
