import * as React from 'react';
import { Button, LinearProgress, TextField } from '../atoms';
import Stack from '@mui/material/Stack/Stack';
import Grid from '@mui/material/Grid/Grid';
import { LocationIcon, MediaIcon } from '../icons';
import { IconButton, Tooltip } from '@mui/material';
import FormLayout from '@/layout/FormLayout';
import { useState } from 'react';
import PostService from '@/services/http/post';
import ErrorText from '../atoms/ErrorField';

export default function CreatePostCard() {
  const [postData, setPostData] = useState({
    content: '',
    image: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setLoading] = useState(false);


  const onPostCreateHandler = (e: React.SyntheticEvent) => {
      e.preventDefault();
      setLoading(true);

      PostService.createPost(postData)
       .then(() => {
        setLoading(false);
        setPostData({
          content: '',
          image: ''
        });
       })
       .catch((error) => {
        setLoading(false);
        setErrorMsg(error.message);
       });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setPostData((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  return (
    <FormLayout onSubmit={onPostCreateHandler}>
      <Stack spacing={1}>
        <TextField
          multiline
          value={postData.content}
          name="content"
          rows={3}
          variant="outlined"
          label="What's on your mind?... "
          onChange={onChangeHandler}
        />
        <Grid container>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Tooltip title="File Upload">
              <IconButton onClick={() => null} sx={{ paddingLeft: '10px' }}>
                <MediaIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Tooltip title="Location">
              <IconButton onClick={() => null} sx={{ paddingLeft: '10px' }}>
                <LocationIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        {
          isLoading ? <LinearProgress /> : <ErrorText errorText={errorMsg} />
        }
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </Stack>
    </FormLayout>
  );
}
