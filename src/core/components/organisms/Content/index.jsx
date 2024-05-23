import WebStatusTable from "core/components/molecules/webStatusTable";
import useGetData from "core/hooks/httpRequest";
import { useState, useRef } from "react";
import Kurir from "../Kurir";
import LoadingComponent from "core/components/molecules/Loading";
import ErrorComponent from "core/components/molecules/Error";
import Details from "../Details";
import ButtonComponent from "core/components/molecules/Button";
import InputComponent from "core/components/molecules/Input";
import MessagePopupComponent from "core/components/molecules/MessagePopup";
import dataContent from "core/data/dataContent";
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
  };

  return (
    <>
      <div className="flex items-center  mt-6">
        <div className="container lg:max-w-screen-xl md:max-w-screen-sm mx-auto px-3">
          <div className="flex  justify-between gap-3">
            <div className="flex flex-col lg:flex-[.9]">
              <h2 className="font-bold text-4xl mb-6">
                {dataContent.Text.header}
              </h2>
              <span className="mb-6">
                <p>{dataContent.Text.description}</p>
                <p>{dataContent.Text.about}</p>
              </span>
              <InputComponent
                {...dataContent.Component.input}
                useRef={inputResi}
              />
              <ButtonComponent
                {...dataContent.Component.button}
                onClick={handleClick}
              />
              {message && <MessagePopupComponent text={message} />}
              {loading && <LoadingComponent text={dataContent.Text.loading} />}
              {error && <ErrorComponent text={dataContent.Text.error} />}
              {data !== null && (
                <>
                  {data.message ? (
                    <Details {...data} />
                  ) : (
                    <Kurir data={data} onClick={getCourierCode} />
                  )}
                </>
              )}
            </div>
            <div className="lg:block xl:block hidden">
              <WebStatusTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentComponent;
