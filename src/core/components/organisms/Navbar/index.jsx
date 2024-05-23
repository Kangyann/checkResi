import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  const { data } = { ...props };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="container max-w-screen-xl mx-auto">
          <Link className="font-bold text-2xl">RETRA</Link>
          <div className="ms-6 flex-none">
            {data.map((val, index) => (
              <>
                <Link to={val.to} className="mx-3" key={`${val.name}-${index}`}>
                  {val.name}
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
