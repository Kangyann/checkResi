import axios from "axios";
import WebStatusTable from "core/components/molecules/webStatusTable";
import ListKurirWidget from "core/components/widgets/listKurirWidget";
import useGetData from "core/hooks/httpRequest";
import { useState, useEffect } from "react";
const ContentComponent = () => {
  const [message, setMessage] = useState(null);
  const [data, setData] = useState(null);
  // const { data, error, loading } = useGetData(url);

  let saveResi;
  const inputValue = (e) => {
    if (e.target.value.length >= 1) {
      return (saveResi = e.target.value);
    }
    return (saveResi = null);
  };
  const handleClick = () => {
    console.log(saveResi);
    if (saveResi == undefined || saveResi == null) {
      // setData({ url: "" });
      return setMessage(
        "Data tidak boleh kosong. Masukan Resi anda terlebih dahulu."
      );
    }
    const params = {
      url: `https://api.binderbyte.com/v1/list_courier?api_key=${process.env.REACT_APP_API_KEY}`,
      awb: saveResi,
    };
    setMessage(null);
    return setData(params);
  };

  return (
    <>
      <div className="flex items-center min-h-96 mt-6">
        <div className="container max-w-screen-xl mx-auto">
          <p>SPXID041453874823</p>
          <div className="flex justify-between gap-3">
            <div className="flex flex-col flex-[.9]">
              <h2 className="font-bold text-4xl mb-6">
                Tracks All Packet Here
              </h2>
              <p className="mb-6">
                Belanja Serba Gampang, Cek Resi Hanya Di Kangyann. Penyedia
                Berbagai Macam Jenis Paket Bisa Di Cek Di Sini Dengan Mudah Dan
                Akurat.
              </p>
              <input
                type="text"
                placeholder="Masukan resi anda disini"
                className="mb-4 py-1.5 px-3 rounded placeholder:text-center"
                onChange={inputValue}
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
              <ListKurirWidget {...data} />
            </div>
            {/*  */}
            <WebStatusTable />
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default ContentComponent;
