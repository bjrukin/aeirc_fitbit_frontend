import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute: any = () => {
  const navigate = useNavigate();
  const token: any = window.localStorage.getItem("accessToken");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return token ? <Outlet /> : null;
};
export default PrivateRoute;
