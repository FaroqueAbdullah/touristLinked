import { FaCommentDots, FaEllipsisH, FaShare, FaThumbsUp, FaUser } from "react-icons/fa";

function TimelineSectionCompoment() {
  return (
      <div className="h-full">


        <div className="w-full bg-white-primary rounded-lg">

          <div className="w-full justify-between flex p-2 ">
            <div className="flex justify-start items-center">
              <div className="border-2 rounded-full p-1"><FaUser /> </div>
              <div className="pl-2 font-bold">Faroque Abdullah</div>
            </div>
            <div className="flex justify-end"><FaEllipsisH /></div>
          </div>
          <div className="p-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </div>
          <div className="flex justify-between p-2 border-t-2 border-white-secondary">
            <div className="flex items-center cursor-pointer"><FaThumbsUp /> <div className="pl-1">Like</div> </div>
            <div className="flex items-center cursor-pointer"><FaCommentDots /> <div className="pl-1">Comment</div>  </div>
            <div  className="flex items-center cursor-pointer"><FaShare /> <div className="pl-1">Share</div>  </div>
          </div>
          
        </div>



    </div>
  );
}

export default TimelineSectionCompoment;