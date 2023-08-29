import ProfileSectionCompoment from '../../layout/ProfileSection/ProfileSection';
import TimelineSectionCompoment from '../../layout/TimelineSection/TimelineSection';
import EventSectionCompoment from '../../layout/EventSection/EventSection';
import HomeTabSmallCompoment from '../../layout/HomeTabSmall/HomeTabSmall';

import { LayoutWrapper } from '@/components/StyledComponents/StyledComponents';
import { useState } from 'react';

function HomeCompoment() {
  const [currentTab, setCurrentTab] = useState('Newsfeed');

  var onSmallTabClick = (type: string) => {
    setCurrentTab(type);
  };

  return (
    <LayoutWrapper>
      <HomeTabSmallCompoment
        onTabClick={(type: string) => onSmallTabClick(type)}
        currentTab={currentTab}
      />
      <div className="flex h-[calc(100%-4rem)] w-full max-w-screen-laptop mobile:h-full">
        <div
          className={`w-full ${
            currentTab === 'Profile' ? '' : 'hidden'
          } p-4 mobile:block mobile:w-1/4`}
        >
          <ProfileSectionCompoment />
        </div>
        <div
          className={`w-full ${
            currentTab === 'Newsfeed' ? '' : 'hidden'
          } p-4 mobile:block mobile:w-2/4`}
        >
          <TimelineSectionCompoment />
        </div>
        <div
          className={`w-full ${
            currentTab === 'Event' ? '' : 'hidden'
          } p-4 mobile:block mobile:w-1/4`}
        >
          <EventSectionCompoment />
        </div>
      </div>
    </LayoutWrapper>
  );
}

export default HomeCompoment;
