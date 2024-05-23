const Details = ({ ...props }) => {
  return (
    <>
        <p className="text-success text-center my-3">{props.message}</p>
        <div className="flex justify-between">
          <div className="">
            <p>Penerima : {props.data.detail.receiver}</p>
            <p>Pengirim : {props.data.summary.courier}</p>
          </div>
          <div className="">
            <p>{props.data.summary.awb}</p>
            <p>{props.data.summary.status}</p>
          </div>
        </div>
        <div className="mt-3 overflow-auto h-96">
          <table className="table lg:table-md md:table-md table-sm">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Deskripsi</th>
                {props.data.history[0].location !== "" && <th>Lokasi</th>}
              </tr>
            </thead>
            <tbody>
              {props.data.history.map((val, index) => (
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
    </>
  );
};

export default Details;
