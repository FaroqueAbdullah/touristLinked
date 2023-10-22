import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, TextField } from '../atoms';
import CardContent from '@mui/material/CardContent/CardContent';
import FormLayout from '@/layout/FormLayout';
import Stack from '@mui/material/Stack/Stack';





export default function CreatePostCard() {

  const onPostCreateHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
  }
 

  return (
    <Card sx={{ marginBottom: "1rem", padding:".5rem 0" }}>
      <FormLayout onSubmit={onPostCreateHandler}>
        <Stack 
          spacing={2}
        >
          <TextField
          multiline
          rows={3}
          variant="outlined"
          label="What's on your mind?... "
        />
          
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Stack>
      </FormLayout>
      {/* <CardContent>
    
      </CardContent> */}
    </Card>
  );
}