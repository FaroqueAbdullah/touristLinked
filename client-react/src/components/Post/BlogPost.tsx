import { FaCommentDots, FaEllipsisH, FaShare, FaThumbsUp, FaUser } from "react-icons/fa";

interface BlogPostProps {
  userImage: string,
  userName: string;
  userPost: string;
  userPostImage?: string;
}

function BlogPostComponent ({
  userImage,
  userName,
  userPost,
  userPostImage
}: BlogPostProps) {

  return (
    <div className="w-full bg-white-primary rounded-lg mb-2 h-auto">

      <div className="w-full justify-between flex p-3 ">
        <div className="flex justify-start items-center">
          <div className="border-2 rounded-full p-1"><FaUser /> </div>
          <div className="pl-2 font-bold">{ userName }</div>
        </div>
        <div className="flex justify-end"><FaEllipsisH /></div>
      </div>
      <div className="w-full pr-3 pl-3 text-justify">{ userPost }</div>

      { userPostImage ? 
        <div className="p-3">
          <img src={userPostImage} className="w-full h-auto" />
        </div>
        
        : 
        null 
      }

      <div className="w-full flex justify-between p-3">
        <div className="flex items-center cursor-pointer text-sm"><div className="pl-1">10 Likes</div> </div>
        <div className="flex items-center cursor-pointer text-sm"><div className="pl-1">15 Comments</div>  </div>
        {/* <div  className="flex items-center cursor-pointer text-sm"><div className="pl-1">2 Share</div>  </div> */}
      </div>
      <div className="w-full flex justify-between p-3 border-t-2 border-white-secondary">
        <div className="flex items-center cursor-pointer"><FaThumbsUp /> <div className="pl-1">Like</div> </div>
        <div className="flex items-center cursor-pointer"><FaCommentDots /> <div className="pl-1">Comment</div>  </div>
        <div  className="flex items-center cursor-pointer"><FaShare /> <div className="pl-1">Share</div>  </div>
      </div>
          
    </div>
  )
}

export default BlogPostComponent;