import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/login";
import SignUp from "./pages/Auth/signup";
import Error from "./error";
import PrivateRoute from "./components/shared/PrivateRoute";
import { useEffect } from "react";
import Profile from "./pages/Profile";
import { useAppSelector } from "./redux/hooks";
import ForgetPassword from "./pages/Auth/forget-password";
import ResetPassword from "./pages/Auth/reset-password";
import ChangePassword from "./pages/Auth/change-password";
import Dashboard from "./pages/Dashboard";
import Hospital from "./pages/Hospital";
import Doctor from "./pages/Doctor";
import User from "./pages/User";
import ViewUser from "./pages/User/ViewUser";
import SingleParamDetail from "./pages/User/ViewUser/SingleParam";

function App() {
  const unParsedToken: any = window.localStorage.getItem("accessToken");
  const token = JSON.parse(unParsedToken);
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(
    (state: any) => state.rootReducer.login
  );

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      return navigate("/login");
    }
  }, [navigate, location.pathname]);

  // useEffect(() => {
  //   if ((isAuthenticated || token) && location.pathname == "/reset-password") {
  //     return navigate("/dashboard");
  //   } else if (token === null) {
  //     return navigate(location.pathname);
  //     //   return navigate(location.pathname);
  //   }
  // }, [token, location.pathname, navigate]);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        {token && (
          <>
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/hospital" element={<Hospital />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/users" element={<User />} />
              <Route path="/users/:id" element={<ViewUser />} />
              <Route path="/user/:id" element={<SingleParamDetail />} />
            </Route>
            <Route path="*" element={<Error />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
