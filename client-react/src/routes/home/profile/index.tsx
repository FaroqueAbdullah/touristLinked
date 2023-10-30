import PostCard from '@/components/molecules/PostCard';
import ProfileCard from '@/components/molecules/ProfileCard';
import ProfileMap from '@/components/molecules/WorldMap';
import withTimeLine from '@/hoc/withTimeLine';
import Grid from '@mui/material/Grid';

const PostTimeline = withTimeLine(() => {
  return <PostCard />;
});

const Profile = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ProfileCard />
      </Grid>
      <Grid item xs={6}>
        <ProfileMap />
        <PostTimeline data={[]} />
      </Grid>
      <Grid item xs={3}>
        {/* <EventTimeline /> */}
      </Grid>
    </Grid>
  );
};

export default Profile;
