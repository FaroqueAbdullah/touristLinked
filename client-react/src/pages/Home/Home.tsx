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
    <div className="flex h-full flex-col w-100 bg-green-tertiary items-center justify-center">
      <HomeTabSmallCompoment 
        onTabClick = {(type: string) => onSmallTabClick(type)}
        currentTab = {currentTab}
      />
      <div className='flex h-[calc(100%-2rem)] tablet:h-full max-w-screen-desktop w-full'>
        <div className={`w-full ${currentTab === 'Profile' ? '' : 'hidden'} p-4 tablet:w-1/4 tablet:block`}>
          <ProfileSectionCompoment />
        </div>
        <div className={`w-full ${currentTab === 'Newsfeed' ? '' : 'hidden'} p-4 tablet:w-2/4 tablet:block`}>
          <TimelineSectionCompoment />
        </div>
        <div className={`w-full ${currentTab === 'Event' ? '' : 'hidden'} p-4 tablet:w-1/4 tablet:block`}>
          <EventSectionCompoment />
        </div>
      </div>
    </div>
  );
}

export default HomeCompoment;