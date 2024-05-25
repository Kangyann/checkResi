import ButtonComponent from "core/components/molecules/Button";
import getRandomColorClass from "core/helpers/GetRandomColors";

const Kurir = ({ ...props }) => {
  return (
    <>
      <div className="my-6">
        <h3>Pilih kurir terlebih dahulu :</h3>
        <div className="flex flex-wrap gap-3 my-2">
          {props.data.map((val, index) => (
            <ButtonComponent
              className={`btn ${getRandomColorClass()}`}
              name={val.code}
              key={`${val.code}-${index}`}
              onClick={props.onClick}
              text={val.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Kurir;
