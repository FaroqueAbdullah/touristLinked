import ProfileSectionCompoment from '../../layout/ProfileSection/ProfileSection';
import TimelineSectionCompoment from '../../layout/TimelineSection/TimelineSection';
import EventSectionCompoment from '../../layout/EventSection/EventSection';
import HomeTabSmallCompoment from '../../layout/HomeTabSmall/HomeTabSmall';

function HomeCompoment() {

  return (
    <div className="flex flex-col w-100 h-full bg-green-tertiary items-center justify-center">
      <HomeTabSmallCompoment />
      <div className='flex h-full max-w-screen-desktop w-full'>
        <ProfileSectionCompoment />
        <TimelineSectionCompoment />
        <EventSectionCompoment />
      </div>
    </div>
  );
}

export default HomeCompoment;