import { useEffect, useState } from "react";

interface VisibilityProps {
  data: object[]
}

// This function takes a component...
function withTimeLineData<P>(
  WrappedComponent: React.ComponentType<P>, 
) {
  

  const ComponentWithTimeline = (props: P & VisibilityProps) => {
    const data = [{name: "faroque"}]
    return <WrappedComponent  {...props} data={data}/>
  }

  return ComponentWithTimeline
  
}

export default withTimeLineData;
