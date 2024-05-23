const LoadingComponent = ({ text }) => {
  return (
    <>
      <span className="text-center gap-2 my-12 flex flex-col items-center">
        <i className="loading loading-lg loading-infinity"></i>
        <p>{text}</p>
      </span>
    </>
  );
};

export default LoadingComponent;
