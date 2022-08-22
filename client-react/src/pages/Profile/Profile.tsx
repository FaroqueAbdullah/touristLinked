import CountryMap from "@/components/MapComponent/CountryMap";
import { LayoutWrapper } from "@/components/StyledComponents/StyledComponents";
import ProfileSectionCompoment from "@/layout/ProfileSection/ProfileSection";

const ProfileCompoment = () => {

  return (
    <LayoutWrapper>
      <div className="flex mobile:h-full max-w-screen-laptop w-full">
        <div className="w-full p-4 mobile:w-1/4 mobile:block">
          <ProfileSectionCompoment />
        </div>
        <div className="w-full p-4 mobile:w-2/4 mobile:block">
          <CountryMap />
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default ProfileCompoment;
