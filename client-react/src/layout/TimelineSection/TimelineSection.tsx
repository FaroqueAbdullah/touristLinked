import BlogPostComponent from "../../components/Post/BlogPost";

import '../../utils/global.css';

function TimelineSectionCompoment() {
  return (
      <div className="h-full overflow-scroll no-scrollbar">
        <div>
          <BlogPostComponent 
            userImage="sadfsdf"
            userName="ABdullah"
            userPostImage="https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg"
            userPost="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections"
          />
          <BlogPostComponent 
            userImage="sadfsdf"
            userName="Faroque"
            userPost="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with laptop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <BlogPostComponent 
            userImage="sadfsdf"
            userName="ABdullah"
            userPostImage="https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg"
            userPost="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections"
          />
        </div>


        
        {/* <BlogPostComponent /> */}
        {/* <BlogPostComponent />  */}



    </div>
  );
}

export default TimelineSectionCompoment;