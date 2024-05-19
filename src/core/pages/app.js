import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const createBrowserRoutes = ({data}) => {
  return (
    <BrowserRouter>
      <Routes>
        {data.map((val, key) => (
          <Route path={val.path} element={val.element} key={`r-${key}`}/>
        ))}
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default createBrowserRoutes;