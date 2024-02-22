import { Button } from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import PasswordInputField from "../../components/shared/PasswordInputField";
import AuthLayout from "../../components/ui/AuthLayout";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Service from "../../setup/Service";
import { toastAlert } from "../../lib/toastAlert";

interface initValProps {
  email: string;
  password: string;
  password2: string;
  // name: string;
  // phone?: string;
}
const SignUp = () => {
  const navigate = useNavigate();
  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("*Email is required"),
    password: Yup.string().required("*Password is required"),
      // password: Yup.string().min(8,"Password must be 8 characters long").required("*Password is required"),
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
  const handleSubmit = async (values: initValProps) => {
    try {
      const response = await Service.post("/auth/register", values);
      console.log("The response is", response);
      toastAlert("success", "User Successfully Registered.");
      navigate("/login");
    } catch (error: any) {
      toastAlert(
        "error",
        error?.response?.data?.message ?? "Something went wrong."
      );
      console.log("The err is", error);
    }
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
          {({ isValid, isSubmitting }) => {
            return (
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
                    disabled={!isValid}
                    type={"submit"}
                    className="mt-2"
                    text={isSubmitting ? "Submitting..." : "Register"}
                    variant={"default"}
                  />
                </div>
              </Form>
            );
          }}
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
