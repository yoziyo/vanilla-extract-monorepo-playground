import { createTheme } from '@vanilla-extract/css';
import { Colors } from '@kpds/tokens';

export const [kurlyTheme, vars] = createTheme({
  color: {
    ...Colors,
  },
});
