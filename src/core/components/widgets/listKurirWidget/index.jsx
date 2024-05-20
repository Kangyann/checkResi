import { useState } from "react";
import CekResiWidget from "core/components/widgets/cekResiWidget";
import useGetData from "core/hooks/httpRequest";
const ListKurirWidget = ({ ...props }) => {
  const {
    data: dataKurir,
    error: errorKurir,
    loading: loadingKurir,
    resi,
  } = props;

  const [url, setUrl] = useState(null);
  const { data, error, loading } = useGetData(url);
  const colorClasses = [
    "btn-primary",
    "btn-secondary",
    "btn-accent",
    "btn-success",
    "btn-error",
    "btn-info",
    "btn-warning",
    "btn-neutral",
  ]; // Daftar kelas warna

  const getRandomColorClass = () => {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
  };
  const getCourierCode = (e) => {
    const newCode = e.target.name;
    const url = `https://api.binderbyte.com/v1/track?api_key=e9714f6c00c20562cbf98cb88974434b989168734dee968bdabc329eb9c4ae69&courier=${newCode}&awb=${resi}`;
    setUrl(url);
  };
  let dataListResi;
  if (data || error || loading) {
    dataListResi = { data, error, loading };
  }
  if (loading) {
    return (
      <span className="text-center gap-2 my-12">
        <i className="loading loading-lg loading-infinity"></i>
        <p>Sedang mengambil data</p>
      </span>
    );
  } else if (dataKurir !== null) {
    return (
      <>
        <div className="my-6">
          <h3>Pilih kurir terlebih dahulu :</h3>
          <div className="flex flex-wrap gap-3 my-2">
            {dataKurir.map((val, index) => (
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
        {/*  */}
      </>
    );
  } else if (dataListResi !== null) {
    return <>{dataListResi && <CekResiWidget {...dataListResi} />} </>;
  }
};

export default ListKurirWidget;
