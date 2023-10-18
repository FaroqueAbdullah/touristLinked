

// This function takes a component...
function withTimeLine(WrappedComponent: React.ComponentType, url: string) {
  // ...and returns another component...
  return (props: object) => {



    return (
       <WrappedComponent {...props} />
    )
  }
}

export default withTimeLine;
