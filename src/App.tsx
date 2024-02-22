import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/login";
import SignUp from "./pages/Auth/signup";
import Error from "./error";
import PrivateRoute from "./components/shared/PrivateRoute";
import { useEffect } from "react";
import Profile from "./pages/Profile";
import Report from "./pages/Report";
import { useAppSelector } from "./redux/hooks";

function App() {
  const unParsedToken: any = window.localStorage.getItem("accessToken");
  const token = JSON.parse(unParsedToken);
  console.log("The token is", token);
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(
    (state: any) => state.rootReducer.login
  );

  useEffect(() => {
    if (location.pathname === "/") {
      return navigate("/login");
    }
  }, [navigate, location.pathname]);

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, []);

  useEffect(() => {
    if ((isAuthenticated || token) && location.pathname == "/login") {
      return navigate("/dashboard");
    } else if (token === null) {
      return navigate(location.pathname);
      //   return navigate(location.pathname);
    }
  }, [token, location.pathname, navigate]);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        {token && (
          <>
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Report />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<Error />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
