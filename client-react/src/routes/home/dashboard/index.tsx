import EventCard from "@/components/molecules/EventCard";
import PostCard from "@/components/molecules/PostCard";
import ProfileCard from "@/components/molecules/ProfileCard";
import withTimeLine from "@/hoc/withTimeLine";
import Grid from "@mui/material/Grid";


const PostTimeline = (data: any) => {
  console.log("PostTimeline ", data)
  return <PostCard />
}

const CreatePostTimeLine = withTimeLine(PostTimeline)


const EventTimeline = (data: any) => {
  console.log("PostTimeline ", data)
  return <EventCard />
}

const CreateEventTimeLine = withTimeLine(EventTimeline)

const Dashboard = () => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ProfileCard />
      </Grid>
      <Grid item xs={6}>
        <CreatePostTimeLine />
      </Grid>
      <Grid item xs={3}>
        <CreateEventTimeLine />
      </Grid>
    </Grid>
  )
}

export default Dashboard;