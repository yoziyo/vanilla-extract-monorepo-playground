import { forwardRef } from 'react';
import * as styles from '@kpds/css/components/box.css';

export const Text = forwardRef((props, forwardedRef) => {
  return <div {...props} className={styles.variants} />;
});
