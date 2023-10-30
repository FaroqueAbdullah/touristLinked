import CreatePostCard from '@/components/molecules/CreateContentCard';
import EventCard from '@/components/molecules/EventCard';
import PostCard from '@/components/molecules/PostCard';
import ProfileCard from '@/components/molecules/ProfileCard';
import withTimeLine from '@/hoc/withTimeLine';
import Grid from '@mui/material/Grid';

const PostTimeline = withTimeLine(() => {
  return (
    <>
      <PostCard />
      <PostCard />
    </>
  );
});

const EventTimeline = withTimeLine(() => {
  return <EventCard />;
});

const Feed = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ProfileCard />
      </Grid>
      <Grid item xs={6}>
        <CreatePostCard />
        <PostTimeline data={[]} />
      </Grid>
      <Grid item xs={3}>
        <EventTimeline data={[]} />
      </Grid>
    </Grid>
  );
};

export default Feed;
