import { Box, Button } from '@kpds/react';
import Link from 'next/link';

export default function Home() {
  return (
    <Box>
      <h1>Foundation</h1>
      <Link href={'/foundation/color'}>color palette</Link>
      <h1>component</h1>
      <Link href={'/component/button'}>Button</Link>
    </Box>
  );
}
