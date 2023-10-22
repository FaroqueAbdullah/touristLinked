import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, TextField } from '../atoms';
import FormLayout from '@/layout/FormLayout';
import Stack from '@mui/material/Stack/Stack';
import Grid from '@mui/material/Grid/Grid';


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
          <Grid container spacing={3}>
            <Grid item xs={4}>asf</Grid>
            <Grid item xs={4}>asf</Grid>
            <Grid item xs={4}>asf</Grid>
          </Grid>
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