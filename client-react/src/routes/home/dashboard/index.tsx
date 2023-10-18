import EventCard from "@/components/molecules/EventCard";
import PostCard from "@/components/molecules/PostCard";
import ProfileCard from "@/components/molecules/ProfileCard";
import Grid from "@mui/material/Grid";

const Dashboard = () => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ProfileCard />
      </Grid>
      <Grid item xs={6}>
        <PostCard />
        <PostCard />
        <PostCard />
      </Grid>
      <Grid item xs={3}>
        <EventCard />
        <EventCard />
        <EventCard />
      </Grid>
    </Grid>
  )
}

export default Dashboard;