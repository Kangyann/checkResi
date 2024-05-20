const WebStatusTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table class="table table-md">
          <thead>
            <tr>
              <th>Info</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Status Web</td>
              <td className="badge badge-xs badge-success mt-2">Online</td>
            </tr>
            <tr>
              <td>API</td>
              <td className="badge badge-xs badge-error mt-2">Offline</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>2024-03-17 10:09:10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WebStatusTable;
