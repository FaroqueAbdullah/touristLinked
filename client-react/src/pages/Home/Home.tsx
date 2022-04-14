import ProfileSectionCompoment from '../../layout/ProfileSection/ProfileSection';
import TimelineSectionCompoment from '../../layout/TimelineSection/TimelineSection';
import EventSectionCompoment from '../../layout/EventSection/EventSection';

function HomeCompoment() {

  return (
    <div className="flex w-100 h-full">
      <ProfileSectionCompoment />
      <TimelineSectionCompoment />
      <EventSectionCompoment />
    </div>
  );
}

export default HomeCompoment;