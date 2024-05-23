import WebStatusTable from "core/components/molecules/webStatusTable";
import useGetData from "core/hooks/httpRequest";
import { useState, useEffect, useRef } from "react";
import Kurir from "../Kurir";
import useDebounce from "core/helpers/Debounce";

const ContentComponent = () => {
  const inputResi = useRef(null);
  const [message, setMessage] = useState(null);
  const [url, setUrl] = useState(null);
  const { data, error, loading } = useGetData(url);

  const getCourierCode = (e) => {
    const params = {
      url: `https://api.binderbyte.com/v1/track?api_key=e9714f6c00c20562cbf98cb88974434b989168734dee968bdabc329eb9c4ae69&courier=${e.target.name}&awb=${inputResi.current.value}`,
    };
    return setUrl(params.url);
  };
  const handleClick = () => {
    let { value } = inputResi.current;
    if (value === "") {
      return setMessage(
        "Data tidak boleh kosong. Isi dengan Resi anda terelebih dahulu."
      );
    }
    const params = {
      url: `https://api.binderbyte.com/v1/list_courier?api_key=${process.env.REACT_APP_API_KEY}`,
    };
    setMessage("");
    setUrl(params.url);
    console.log(value);
  };
  return (
    <>
      <div className="flex items-center min-h-96 mt-6">
        <div className="container max-w-screen-xl mx-auto">
          <div className="flex justify-between gap-3">
            <div className="flex flex-col flex-[.9]">
              <h2 className="font-bold text-4xl mb-6">Resi Tracking Gratis</h2>
              <p className="mb-6">
                Belanja Serba Gampang, Cek Resi Hanya Di RETRA. <br /> Penyedia
                Berbagai Macam Jenis Paket Yang Bisa Anda Cek Langsung Di Sini
                Dengan Mudah Dan Akurat.
              </p>
              <input
                type="text"
                placeholder="Masukan resi anda disini"
                className="mb-4 py-1.5 px-3 rounded text-center placeholder:text-center"
                ref={inputResi}
              />
              <button
                className="btn bg-base-200 py-1.5 px-3 rounded flex items-center justify-center gap-3"
                onClick={handleClick}
              >
                Tracking Sekarang
              </button>
              {message && (
                <p className="text-center text-error mt-3">{message}</p>
              )}
              {loading && (
                <span className="text-center gap-2 my-12 flex flex-col items-center">
                  <i className="loading loading-lg loading-infinity"></i>
                  <p>Sedang mengambil data</p>
                </span>
              )}
              {error && (
                <>
                  <p className="text-center text-error mt-3">
                    Data tidak ditemukan. Periksa kembali Resi dan Kurir yang
                    anda gunakan.
                  </p>
                </>
              )}
              {data !== null && (
                <>
                  {data.message ? (
                    <>
                      <div className="">
                        <p className="text-success text-center my-3">
                          {data.message}
                        </p>
                        <div className="flex justify-between">
                          <div className="">
                            <p>Penerima : {data.data.detail.receiver}</p>
                            <p>Pengirim : {data.data.summary.courier}</p>
                          </div>
                          <div className="">
                            <p>{data.data.summary.awb}</p>
                            <p>{data.data.summary.status}</p>
                          </div>
                        </div>
                        <div className="mt-3 overflow-auto h-96">
                          <table className="table table-md">
                            <thead>
                              <tr>
                                <th>Tanggal</th>
                                <th>Deskripsi</th>
                                {data.data.history[0].location !== "" && (
                                  <th>Lokasi</th>
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {data.data.history.map((val, index) => (
                                <>
                                  <tr key={`history-${index}`}>
                                    <td>{val.date}</td>
                                    <td>{val.desc}</td>
                                    <td>{val.location && val.location}</td>
                                  </tr>
                                </>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Kurir data={data} onClick={getCourierCode} />
                      {/* <div className="my-6">
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
                      </div> */}
                    </>
                  )}
                </>
              )}
            </div>
            <WebStatusTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentComponent;
