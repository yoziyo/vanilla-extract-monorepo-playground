import { Box, KPDSVars } from '@kpds/react';
import * as styles from '@/app/foundation/color/style.css';

const SET_COLOR_KEYS = ['main', 'text', 'backgroundSet'];

export default function Color() {
  const viewColors = Object.entries<string | object>(KPDSVars.color).filter(
    ([key]) => !SET_COLOR_KEYS.includes(key),
  ) as [string, string][];

  return (
    <Box className={styles.container}>
      <h1>Color Palette</h1>
      <Box className={styles.colorContainer}>
        {viewColors.map(([key, value]) => (
          <Box className={styles.colorBox} key={key}>
            <Box
              className={styles.colorViewer}
              style={{
                backgroundColor: value,
              }}
            />
            <p className={styles.colorKey}>{key}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
