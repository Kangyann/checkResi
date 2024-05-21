import { useState } from "react";
import CekResiWidget from "core/components/widgets/cekResiWidget";
import useGetData from "core/hooks/httpRequest";
const ListKurirWidget = ({ ...props }) => {
  const [url, setUrl] = useState(null);
  let endpoint;
  if (url === null) {
    endpoint = props.url;
  } else {
    endpoint = url;
  }

  console.log(endpoint);
  const { data, error, loading } = useGetData(endpoint);
  const colorClasses = [
    "btn-primary",
    "btn-secondary",
    "btn-accent",
    "btn-success",
    "btn-error",
    "btn-info",
    "btn-warning",
    "btn-neutral",
  ];

  const getRandomColorClass = () => {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
  };
  const getCourierCode = (e) => {
    const newCode = e.target.name;
    const url = `https://api.binderbyte.com/v1/track?api_key=e9714f6c00c20562cbf98cb88974434b989168734dee968bdabc329eb9c4ae69&courier=${newCode}&awb=${props.awb}`;
    console.log(url);
    setUrl(url);
    // setTimeout(() => {
    // setUrl(null);
    // }, 1000);
  };

  if (loading) {
    return (
      <span className="text-center gap-2 my-12">
        <i className="loading loading-lg loading-infinity"></i>
        <p>Sedang mengambil data</p>
      </span>
    );
  } else if (data) {
    return (
      <>
        {data.message && <CekResiWidget data={data} error={error} />}
        {!data.message && (
          <div className="my-6">
            <h3>Pilih kurir terlebih dahulu :</h3>
            <div className="flex flex-wrap gap-3 my-2">
              {data.map((val, index) => (
                <button
                  className={`btn ${getRandomColorClass()}`}
                  name={val.code}
                  key={`${val.code}-${index}`}
                  onClick={getCourierCode}
                >
                  {val.description}
                </button>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
  //   return (
  //     <>
  //         <></>
  //     </>
  //   );
  // }
};

export default ListKurirWidget;
