import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  const { data } = { ...props };
  return (
    <>
      <div className="container lg:max-w-screen-xl md:max-w-screen-sm flex items-center mx-auto p-3">
        <div className="">
          <Link to={"/"} className="font-bold text-2xl">
            RETRA
          </Link>
        </div>
        <div className="ms-6 flex-none">
          {data.map((val, index) => (
            <Link to={val.to} className="mx-3" key={`${val.name}-${index}`}>
              {val.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
