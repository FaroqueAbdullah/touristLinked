import EventCard from '@/components/molecules/EventCard';
import NotificationCard from '@/components/molecules/NotificationCard';
import ProfileCard from '@/components/molecules/ProfileCard';
import withTimeLine from '@/hoc/withTimeLine';
import Grid from '@mui/material/Grid';

const NotificationTimeline = withTimeLine(() => {
  return (
    <>
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </>
  );
});

const EventTimeline = withTimeLine(() => {
  return <EventCard />;
});

const Notifications = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ProfileCard />
      </Grid>
      <Grid item xs={6}>
        <NotificationTimeline data={[]} />
      </Grid>
      <Grid item xs={3}>
        <EventTimeline data={[]} />
      </Grid>
    </Grid>
  );
};

export default Notifications;
