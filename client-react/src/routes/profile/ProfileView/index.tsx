import EventCard from "@/components/molecules/EventCard";
import PostCard from "@/components/molecules/PostCard";
import ProfileCard from "@/components/molecules/ProfileCard";
import withTimeLine from "@/hoc/withTimeLine";
import Grid from "@mui/material/Grid";


const PostTimeline = withTimeLine((data: any) => {
  return <PostCard />
})


const EventTimeline = withTimeLine((data: any) => {
  return <EventCard />
})


const ProfileView = () => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ProfileCard />
      </Grid>
      <Grid item xs={6}>
        <PostTimeline />
      </Grid>
      <Grid item xs={3}>
        <EventTimeline />
      </Grid>
    </Grid>
  )
}

export default ProfileView;