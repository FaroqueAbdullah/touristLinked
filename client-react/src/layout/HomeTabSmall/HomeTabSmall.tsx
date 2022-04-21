function HomeTabSmallCompoment() {

  return (
    <div className="bg-green-secondary font-bold flex w-full justify-center block tablet:hidden">
      <div className="w-1/3 flex justify-center pb-2 text-white-secondary border-b-2 border-dark-primary">Profile</div>
      <div className="w-1/3 flex justify-center pb-2 text-white-secondary">Newsfeed</div>
      <div className="w-1/3 flex justify-center pb-2 text-white-secondary">Event</div>
    </div>
  );
}

export default HomeTabSmallCompoment;