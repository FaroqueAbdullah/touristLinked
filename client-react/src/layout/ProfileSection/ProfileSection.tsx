import { FaUser } from "react-icons/fa";

function ProfileSectionCompoment() {
  return (
    
      <div className="h-auto bg-white-primary rounded-lg p-3 flex flex-col items-center">
        <div className="border-2 rounded-full m-3 p-1 w-20 h-20 flex justify-center items-center text-5xl">
          <FaUser />
        </div>

        <div className="w-full flex justify-between mt-1"> <div className="font-bold pr-2">Total Country Visited </div> <div> 20 </div></div>
        <div className="w-full flex justify-between mt-1"> <div className="font-bold pr-2">Total City Visited </div> <div> 84 </div></div>
        <div className="w-full flex justify-between mt-1"> <div className="font-bold pr-2">Upcoming Event Date </div> <div> 2/2/22 </div></div>
        <div className="w-full flex justify-between mt-1"> <div className="font-bold pr-2">Upcoming Event Place </div> <div> India </div></div>
      </div>
    
  );
}

export default ProfileSectionCompoment;