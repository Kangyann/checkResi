import axios from "axios";
import WebStatusTable from "core/components/molecules/webStatusTable";
import ListKurirWidget from "core/components/widgets/listKurirWidget";
import useGetData from "core/hooks/httpRequest";
import { useState, useEffect } from "react";
const ContentComponent = () => {
  const [resi, setResi] = useState(null);
  const [message, setMessage] = useState(null);
  const [url, setUrl] = useState(null);
  const { data, error, loading } = useGetData(url);

  let resiSave;
  const inputValue = (e) => {
    resiSave = e.target.value;
  };
  const handleClick = () => {
    if (resiSave === "" || resiSave === undefined) {
      setMessage("Input tidakk osong");
    } else {
      const listKurirUrl = `https://api.binderbyte.com/v1/list_courier?api_key=${process.env.REACT_APP_API_KEY}`;
      setUrl(listKurirUrl);
      setResi(resiSave);
    }
  };
  let dataListKurir;

  if (data || loading || error) {
    dataListKurir = { data, error, loading };
  }
  // console.log(listKurirUrl);
  return (
    <>
      <div className="flex items-center min-h-96 mt-6">
        <div className="container max-w-screen-xl mx-auto">
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
                className="bg-base-200 py-1.5 px-3 rounded flex items-center justify-center gap-3"
                onClick={handleClick}
              >
                Tracking Sekarang
              </button>
              {message && (
                <p className="transition-all ease-in delay-150">{message}</p>
              )}
              {dataListKurir && (
                <ListKurirWidget {...dataListKurir} resi={resi} />
              )}
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
