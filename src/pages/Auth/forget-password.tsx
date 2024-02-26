import { Button } from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import PasswordInputField from "../../components/shared/PasswordInputField";
import AuthLayout from "../../components/ui/AuthLayout";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Service from "../../setup/Service";
import { toastAlert } from "../../lib/toastAlert";
import { FaCircleChevronLeft } from "react-icons/fa6";
import axios from "axios";

interface initValProps {
  email: string;
  // password: string;
  // password2: string;
  // name: string;
  // phone?: string;
}
const ForgetPassword = () => {
  const navigate = useNavigate();
  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("*Email is required"),
    // password: Yup.string().required("*Password is required"),
    // // password: Yup.string().min(8,"Password must be 8 characters long").required("*Password is required"),
    // password2: Yup.string()
    //   .oneOf([Yup.ref("password")], "*Passwords must match")
    //   .required("*Confirm Password is required"),
  });
  const initVal: initValProps = {
    email: "",
    // password: "",
    // password2: "",
  };
  const handleSubmit = async (values: initValProps) => {
    console.log("values are", values);
    console.log("sumit");
    try {
      const response = await axios.post("/auth/password/reset", values);
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
        <div className="">
          <FaCircleChevronLeft
            onClick={() => navigate(-1)}
            size={40}
            className="text-secondary-500 mb-3 cursor-pointer"
          />
        </div>
        <div className="text-left mb-4 ">
          <h2 className="h2-medium mt-4">Forget Password?</h2>
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

                  {/* <PasswordInputField
                    placeholder={"Enter Password"}
                    label={"Password"}
                    name="password"
                  />
                  <PasswordInputField
                    placeholder={"Enter Password"}
                    label={"Confirm Password"}
                    name="password2"
                  /> */}
                  <Button
                    disabled={!isValid}
                    type={"submit"}
                    className="mt-2"
                    text={"Next"}
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

export default ForgetPassword;
