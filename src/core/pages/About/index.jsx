import useGetData from 'core/hooks/httpRequest';
import React, { useState } from 'react';
const MyComponent = () => {
  const [url, setUrl] = useState(null);
  const { data, error, loading } = useGetData(url);

  const handleClick = () => {
    // Mengatur URL baru untuk memicu pemanggilan useGetData
    setUrl("https://api.binderbyte.com/v1/track?api_key=e9714f6c00c20562cbf98cb88974434b989168734dee968bdabc329eb9c4ae69&courier=spx&awb=SPXID041453874823");
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <h1>Data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
