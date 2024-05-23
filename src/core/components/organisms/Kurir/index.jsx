import getRandomColorClass from "core/helpers/GetRandomColors";

const Kurir = ({ ...props }) => {
  console.log(props);
  return (
    <>
      <div className="my-6">
        <h3>Pilih kurir terlebih dahulu :</h3>
        <div className="flex flex-wrap gap-3 my-2">
          {props.data.map((val, index) => (
            <button
              className={`btn ${getRandomColorClass()}`}
              name={val.code}
              key={`${val.code}-${index}`}
              onClick={props.onClick}
            >
              {val.description}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Kurir;
