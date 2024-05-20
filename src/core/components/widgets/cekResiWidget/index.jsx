const CekResiWidget = ({ ...props }) => {
  const { data, error, loading } = props;
  console.log(props);
  if (loading) {
    return (
      <span className="text-center gap-2 my-12">
        <i className="loading loading-lg loading-infinity"></i>
        <p>Sedang mengambil data</p>
      </span>
    );
  } else if (data !== null) {
    return (
      <div className="">
        <p className="text-success text-center my-3">{data.message}</p>
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
                {data.data.history[0].location !== "" && <th>Lokasi</th>}
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
    );
  } else if (error !== null) {
    return (
      <p className="text-error text-center my-6">
        Resi anda tidak valid. Mohon periksa kembali
      </p>
    );
  }
};

export default CekResiWidget;
