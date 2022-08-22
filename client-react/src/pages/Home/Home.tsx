import ProfileSectionCompoment from '../../layout/ProfileSection/ProfileSection';
import TimelineSectionCompoment from '../../layout/TimelineSection/TimelineSection';
import EventSectionCompoment from '../../layout/EventSection/EventSection';
import HomeTabSmallCompoment from '../../layout/HomeTabSmall/HomeTabSmall';

import { LayoutWrapper } from '@/components/StyledComponents/StyledComponents';
import { useState } from 'react';

function HomeCompoment() {
  const [currentTab, setCurrentTab] = useState('Newsfeed');

  var onSmallTabClick = (type: string) => {
    setCurrentTab(type)
  }

  return (
    <LayoutWrapper>
      <HomeTabSmallCompoment 
        onTabClick = {(type: string) => onSmallTabClick(type)}
        currentTab = {currentTab}
      />
      <div className='flex h-[calc(100%-2rem)] mobile:h-full max-w-screen-laptop w-full'>
        <div className={`w-full ${currentTab === 'Profile' ? '' : 'hidden'} p-4 mobile:w-1/4 mobile:block`}>
          <ProfileSectionCompoment />
        </div>
        <div className={`w-full ${currentTab === 'Newsfeed' ? '' : 'hidden'} p-4 mobile:w-2/4 mobile:block`}>
          <TimelineSectionCompoment />
        </div>
        <div className={`w-full ${currentTab === 'Event' ? '' : 'hidden'} p-4 mobile:w-1/4 mobile:block`}>
          <EventSectionCompoment />
        </div>
      </div>
    </LayoutWrapper>
  );
}

export default HomeCompoment;