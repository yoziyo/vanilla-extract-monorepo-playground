import { createTheme } from '@vanilla-extract/css';
import { Colors } from '@kpds/tokens';

export const [KPDSTheme, KPDSVars] = createTheme({
  color: {
    ...Colors,
  },
});
