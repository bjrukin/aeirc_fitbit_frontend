import { Button } from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import PasswordInputField from "../../components/shared/PasswordInputField";
import AuthLayout from "../../components/ui/AuthLayout";
import * as Yup from "yup";
import { useAppDispatch } from "../../redux/hooks";
import { registerUser } from "../../redux/slice/register/registerAction";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

interface initValProps {
  email: string;
  password: string;
  name: string;
  phone?: string;
}
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    email: Yup.string().required("Name is required"),
    password: Yup.string().required("Password is required"),
  });
  const initVal: initValProps = {
    name: "",
    email: "",
    password: "",
    phone: "",
  };
  const handleSubmit = (values: initValProps) => {
    dispatch(registerUser(values));
  };
  return (
    <AuthLayout>
      <div className=" flex-1 p-4 lg:p-8 lg:px-16 h-full text-black  flex justify-center flex-col ">
        <div className="text-center">
          <h2 className="h2-medium mt-4">Register</h2>
        </div>
        <Formik
          initialValues={initVal}
          validationSchema={FORM_VALIDATION}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mt-4 ">
                <Input
                  label={"Full Name"}
                  name={"name"}
                  placeholder="Enter Your Full Name"
                />
                <Input
                  label={"Email"}
                  name={"email"}
                  placeholder="Enter Your Email Address"
                />

                <PasswordInputField
                  placeholder={"Enter Password"}
                  label={"Password"}
                  name="password"
                />
                <Input
                  name={"phone"}
                  label={"Mobile Number"}
                  placeholder="Enter Your Mobile Number"
                />
                <Button
                  className="mt-2"
                  text={"Register"}
                  variant={"default"}
                />
              </div>
            </Form>
          )}
        </Formik>
        <div>
          <p className="text-center mt-4">
            Already Have an Account?{" "}
            <span
              className="text-secondary-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
