import { Form, Formik } from "formik";
import { Button } from "../../components/shared/Button";
import PasswordInputField from "../../components/shared/PasswordInputField";
import AuthLayout from "../../components/ui/AuthLayout";
import * as Yup from "yup";
import Input from "../../components/shared/Input";
import { loginUser } from "../../redux/slice/login/loginAction";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

interface initValProps {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string()
      .email("*Please enter a valid email address")
      .required("*Email is required"),
    password: Yup.string().required("*Password is required"),
  });
  const initVal: initValProps = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values: initValProps) => {
    dispatch(loginUser(values));
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
          {({}) => (
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
                  type={"submit"}
                  className="mt-5"
                  text={"Login"}
                  variant={"default"}
                />
              </div>
            </Form>
          )}
        </Formik>
        <div>
          <p className="text-center mt-4">
            Don't Have an Account?{" "}
            <span
              className="text-secondary-500 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
