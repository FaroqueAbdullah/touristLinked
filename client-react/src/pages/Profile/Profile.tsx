import CountryMap from "@/components/MapContainer/CountryMap";
import { LayoutWrapper } from "@/components/StyledComponents/StyledComponents";
import ProfileSectionCompoment from "@/layout/ProfileSection/ProfileSection";

const ProfileCompoment = () => {

  return (
    <LayoutWrapper>
      <div className="flex tablet:h-full max-w-screen-desktop w-full">
        <div className="w-full p-4 tablet:w-1/4 tablet:block">
          <ProfileSectionCompoment />
        </div>
        <div className="w-full p-4 tablet:w-2/4 tablet:block">
          <CountryMap />
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default ProfileCompoment;
