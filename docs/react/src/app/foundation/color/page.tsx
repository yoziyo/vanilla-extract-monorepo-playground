import { Box, KPDSVars } from '@kpds/react';
import * as styles from '@/app/foundation/color/style.css';

export default function Color() {
  return (
    <Box className={styles.container}>
      <h1>Color Palette</h1>
      <Box className={styles.colorContainer}>
        {Object.entries<string>(KPDSVars.color).map(([key, value]) => (
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
