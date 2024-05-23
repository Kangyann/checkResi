const InputComponent = ({useRef, ...props }) => {
  return <input {...props} ref={useRef} />;
};

export default InputComponent;
