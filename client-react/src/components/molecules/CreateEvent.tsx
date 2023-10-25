import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, TextField } from '../atoms';
import FormLayout from '@/layout/FormLayout';
import Stack from '@mui/material/Stack/Stack';
import Grid from '@mui/material/Grid/Grid';



export default function CreateEventCard() {

  const onPostCreateHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
  }
 

  return (
        <Stack 
          spacing={1}
        >
          <TextField name="eventTitle" type="text" label="Event Title" onChange={() => null }/>
          <TextField name="eventLocation" type="text" label="Event Location" onChange={() => null }/>
          <TextField 
            name="eventStartDate" 
            type="date" 
            InputLabelProps={{ shrink: true, required: true }}
            label="Event Start" 
            onChange={() => null }
          />
          <TextField 
            name="eventEndDate" 
            type="date" 
            InputLabelProps={{ shrink: true, required: true }}
            label="Event End" 
            onChange={() => null }
          />
          <TextField name="eventTotalMember" type="number" label="Event Total Member" onChange={() => null }/>
          <TextField name="eventCost" type="text" label="Event Cost" onChange={() => null }/>
          <TextField name="eventCost" type="text" label="Event Cost" onChange={() => null }/>
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