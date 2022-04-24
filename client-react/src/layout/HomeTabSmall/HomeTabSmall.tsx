interface HomeTabSmallCompomentProps {
  onTabClick: (type:string) => void;
  currentTab: string;
}

function HomeTabSmallCompoment({onTabClick, currentTab} : HomeTabSmallCompomentProps) {

  return (
    <div className="bg-green-secondary font-bold flex w-full justify-center block tablet:hidden">
      <div 
        onClick={() => onTabClick('Profile')} 
        className={`w-1/3 flex justify-center cursor-pointer pb-2 text-white-secondary ${currentTab === 'Profile' ? 'border-b-2 border-dark-primary' : ''} `}
      >
        Profile
      </div>
      <div 
        onClick={() => onTabClick('Newsfeed')} 
        className={`w-1/3 flex justify-center cursor-pointer pb-2 text-white-secondary ${currentTab === 'Newsfeed' ? 'border-b-2 border-dark-primary' : ''} `}
      >
        Newsfeed
      </div>
      <div 
        onClick={() => onTabClick('Event')} 
        className={`w-1/3 flex justify-center cursor-pointer pb-2 text-white-secondary ${currentTab === 'Event' ? 'border-b-2 border-dark-primary' : ''} `}
      >
        Event
      </div>
    </div>
  );
}

export default HomeTabSmallCompoment;