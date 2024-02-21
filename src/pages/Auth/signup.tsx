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
  password2: string;
  // name: string;
  // phone?: string;
}
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("*Email is required"),
    password: Yup.string().required("*Password is required"),
    password2: Yup.string()
      .oneOf([Yup.ref("password")], "*Passwords must match")
      .required("*Confirm Password is required"),
  });
  const initVal: initValProps = {
    // name: "",
    email: "",
    password: "",
    password2: "",
    // phone: "",
  };
  const handleSubmit = (values: initValProps) => {
    console.log("The values", values);
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
          {({}) => (
            <Form>
              <div className="mt-4 ">
                {/* <Input
                  label={"Full Name"}
                  name={"name"}
                  placeholder="Enter Your Full Name"
                /> */}

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
                <PasswordInputField
                  placeholder={"Enter Password"}
                  label={"Confirm Password"}
                  name="password2"
                />
                {/* <Input
                  name={"phone"}
                  label={"Mobile Number"}
                  placeholder="Enter Your Mobile Number"
                /> */}
                <Button
                  type={"submit"}
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
