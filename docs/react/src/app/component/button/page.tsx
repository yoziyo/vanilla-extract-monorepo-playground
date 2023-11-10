import { Box, Button } from '@kpds/react';

export default function ButtonPage() {
  return (
    <Box>
      <Button variant={'fill'}>primary</Button>
      <Button variant={'stroke'}>primary</Button>
      <Button variant={'tender'}>primary</Button>
      <br />
      <Button variant={'fill'} color={'secondary'}>
        secondary
      </Button>
      <Button variant={'stroke'} color={'secondary'}>
        secondary
      </Button>
      <Button variant={'tender'} color={'secondary'}>
        secondary
      </Button>
      <br />
      <Button variant={'fill'} color={'tertiary'}>
        tertiary
      </Button>
      <Button variant={'stroke'} color={'tertiary'}>
        tertiary
      </Button>
      <Button variant={'tender'} color={'tertiary'}>
        tertiary
      </Button>
      <br />
      <Button variant={'fill'} color={'danger'}>
        danger
      </Button>
      <Button variant={'stroke'} color={'danger'}>
        danger
      </Button>
      <Button variant={'tender'} color={'danger'}>
        danger
      </Button>
    </Box>
  );
}
