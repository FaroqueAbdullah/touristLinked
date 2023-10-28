import CreatePostCard from '@/components/molecules/CreateContentCard';
import EventCard from '@/components/molecules/EventCard';
import NotificationCard from '@/components/molecules/NotificationCard';
import ProfileCard from '@/components/molecules/ProfileCard';
import withTimeLine from '@/hoc/withTimeLine';
import Grid from '@mui/material/Grid';

const NotificationTimeline = withTimeLine((data: any) => {
  return (
    <>
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </>
  );
});

const EventTimeline = withTimeLine((data: any) => {
  return <EventCard />;
});

const Notifications = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ProfileCard />
      </Grid>
      <Grid item xs={6}>
        <NotificationTimeline />
      </Grid>
      <Grid item xs={3}>
        <EventTimeline />
      </Grid>
    </Grid>
  );
};

export default Notifications;
