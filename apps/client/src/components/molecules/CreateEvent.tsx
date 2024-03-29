import { Button, DatePicker, TextField } from '../atoms';
import Stack from '@mui/material/Stack/Stack';
import Box from '@mui/material/Box/Box';

export default function CreateEventCard() {
  return (
    <Stack spacing={2}>
      <TextField
        name="eventTitle"
        type="text"
        label="Event Title"
        onChange={() => null}
      />
      <TextField
        name="eventLocation"
        type="text"
        label="Event Location"
        onChange={() => null}
      />
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <DatePicker label="Event Start" onDateChange={() => null} />
        <DatePicker label="Event End" onDateChange={() => null} />
        <TextField
          name="eventTotalMember"
          type="number"
          label="Event Total Member"
          onChange={() => null}
        />
        <TextField
          name="eventCost"
          type="text"
          label="Event Cost"
          onChange={() => null}
        />
      </Box>
      <TextField
        multiline
        rows={2}
        variant="outlined"
        name="eventInfo"
        label="Additional Info"
      />
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </Stack>
  );
}
