import { Route, Routes } from "react-router-dom";
import App from "@/App";
import Dashboard from "@/pages/Dashboard";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};
