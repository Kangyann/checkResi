const ButtonComponent = ({text, ...props }) => {
  return <button {...props}>{text}</button>;
};

export default ButtonComponent;
