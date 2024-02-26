import { Form, Formik } from "formik";
import { Button } from "../../components/shared/Button";
import PasswordInputField from "../../components/shared/PasswordInputField";
import AuthLayout from "../../components/ui/AuthLayout";
import * as Yup from "yup";
import Input from "../../components/shared/Input";
import { loginUser } from "../../redux/slice/auth/authAction";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

interface initValProps {
  email: string;
  password: string;
}

const Login = () => {
  const isPasswordResetString: string | null =
    window.localStorage.getItem("isPasswordReset");

  let isPasswordReset: any;

  if (isPasswordResetString !== null) {
    isPasswordReset = JSON.parse(isPasswordResetString);
    console.log("isPasswordreset", isPasswordReset);
  } else {
    console.error("Value for 'isPasswordReset' is null");
  }

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string()
      .email("*Please enter a valid email address")
      .required("*Email is required"),
    password: Yup.string().required("*Password is required"),
    // password: Yup.string().min(8,"Password must be 8 characters long").required("*Password is required"),
  });
  const initVal: initValProps = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values: initValProps) => {
    try {
      const res = await dispatch(loginUser(values));
      if (isPasswordReset || res?.payload?.data?.last_login) {
        navigate("/dashboard");
      } else {
        navigate("/reset-password");
      }
    } catch (err: any) {}
  };
  return (
    <AuthLayout>
      <div className="flex-1 p-4 lg:p-8  lg:px-16  h-full text-black  flex justify-center flex-col ">
        <div className="text-center">
          <h2 className="h2-medium mt-4">Login</h2>
          <p className=" my-2 p-medium-20">Welcome to Jeewan Jyoti</p>
        </div>
        <Formik
          initialValues={initVal}
          validationSchema={FORM_VALIDATION}
          onSubmit={handleSubmit}
        >
          {({ isValid, isSubmitting }) => (
            <Form>
              <div className="mt-4 ">
                <Input
                  name={"email"}
                  label={"Email"}
                  placeholder="Enter your email address"
                />
                <PasswordInputField
                  placeholder={"Enter Password"}
                  label={"Password"}
                  name="password"
                />
                <Button
                  disabled={!isValid}
                  type={"submit"}
                  className="mt-5"
                  text={isSubmitting ? "Logging..." : "Login"}
                  variant={"default"}
                />
              </div>
            </Form>
          )}
        </Formik>
        {/* <div>
          <p className="text-center mt-4">
            Don't Have an Account?{" "}
            <span
              className="text-secondary-500 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </div> */}
        <div className="flex justify-end">
          <p
            onClick={() => navigate("/forget-password")}
            className="text-center mt-4 text-secondary-500 cursor-pointer"
          >
            Forget Password?
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
