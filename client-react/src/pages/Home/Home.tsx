import ProfileSectionCompoment from '../../layout/ProfileSection/ProfileSection';
import TimelineSectionCompoment from '../../layout/TimelineSection/TimelineSection';
import EventSectionCompoment from '../../layout/EventSection/EventSection';
import HomeTabSmallCompoment from '../../layout/HomeTabSmall/HomeTabSmall';
import { useState } from 'react';

function HomeCompoment() {
  const [currentTab, setCurrentTab] = useState('Newsfeed');

  var onSmallTabClick = (type: string) => {
    setCurrentTab(type)
  }

  return (
    <div className="flex flex-col w-100 h-full bg-green-tertiary items-center justify-center">
      <HomeTabSmallCompoment 
        onTabClick = {(type: string) => onSmallTabClick(type)}
        currentTab = {currentTab}
      />
      <div className='flex h-full max-w-screen-desktop w-full'>
        <div className={`w-full h-full ${currentTab === 'Profile' ? '' : 'hidden'} p-4 tablet:w-1/4 tablet:block`}>
          <ProfileSectionCompoment />
        </div>
        <div className={`w-full h-full ${currentTab === 'Newsfeed' ? '' : 'hidden'} p-4 tablet:w-2/4 tablet:block`}>
          <TimelineSectionCompoment />
        </div>
        <div className={`w-full h-full ${currentTab === 'Event' ? '' : 'hidden'} p-4 tablet:w-1/4 tablet:block`}>
          <EventSectionCompoment />
        </div>
      </div>
    </div>
  );
}

export default HomeCompoment;