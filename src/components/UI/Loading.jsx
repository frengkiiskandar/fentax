const Loading = () => {
  return (
    <>
       <div className="flex w-screen lg:w-full flex-col gap-4">
            <div className="skeleton h-40 lg:h-[400px] w-full"></div>
            <div className="skeleton h-4 max-w-96"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    </>
  )
}

export default Loading
