import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, TextField } from '../atoms';
import FormLayout from '@/layout/FormLayout';
import Stack from '@mui/material/Stack/Stack';
import Grid from '@mui/material/Grid/Grid';
import { EventIcon, LocationIcon, MediaIcon } from '../icons';
import { CardContent, IconButton, Tab, Tabs, Tooltip } from '@mui/material';



export default function CreatePostCard() {

  const onPostCreateHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
  }
 

  return (
    <Card sx={{ marginBottom: "1rem", padding:".5rem 0" }}>
      <CardContent>
        <Tabs value={0} onChange={() => null} sx={{ marginBottom: '1rem' }}>
          <Tab label="Crreate Post"></Tab>
          <Tab label="Create Event"></Tab>
        </Tabs>
        <Stack 
          spacing={1}
        >
          <TextField
            multiline
            rows={3}
            variant="outlined"
            label="What's on your mind?... "
          />
          <Grid container>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Tooltip title="Notification">
                <IconButton onClick={() => null} sx={{ paddingLeft: "10px" }}>
                  <MediaIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Tooltip title="Location">
                <IconButton onClick={() => null} sx={{ paddingLeft: "10px" }}>
                  <LocationIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}