import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/login";
import SignUp from "./pages/Auth/signup";
import Error from "./error";
import PrivateRoute from "./components/shared/PrivateRoute";
import { useEffect } from "react";
import DashboardLayout from "./components/ui/DashboardLayout";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      return navigate("/login");
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
