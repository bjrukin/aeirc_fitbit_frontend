import { Form, Formik } from "formik";
import { Button } from "../../components/shared/Button";
import PasswordInputField from "../../components/shared/PasswordInputField";
import AuthLayout from "../../components/ui/AuthLayout";
import * as Yup from "yup";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { FaCircleChevronLeft } from "react-icons/fa6";
import Service from "../../setup/Service";
import { toastAlert } from "../../lib/toastAlert";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface initValProps {
  current_password: string;
  new_password: string;
  confirm_pass: string;
}

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const FORM_VALIDATION = Yup.object().shape({
    current_password: Yup.string().required("*Password is required"),
    new_password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .required("*Password is required"),
    confirm_pass: Yup.string()
      .oneOf([Yup.ref("new_password")], "*Password must match")
      .required("*Confirm Password is required"),
  });
  const initVal: initValProps = {
    current_password: "",
    new_password: "",
    confirm_pass: "",
  };
  const handleSubmit = async (values: initValProps) => {
    // const [isPasswordReset, setIsPasswordReset] = useLocalStorage({
    //   key: "isPasswordReset",
    //   defaultValue: false,
    // });

    console.log("The values are", values);
    const payload = {
      current_password: values?.current_password,
      new_password: values?.new_password,
    };
    try {
      const res = await Service.post("/auth/password/change", payload);
      console.log("The res is", res);
      window.localStorage.setItem("isPasswordReset", JSON.stringify(true));
      toastAlert("success", "Password Successfully changed");
      navigate("/login");
    } catch (err: any) {
      console.log("Error while resetting password", err);
      toastAlert(
        "error",
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Error while resetting password"
      );
    }
  };
  return (
    <AuthLayout>
      <div className="flex-1 p-4 lg:p-8  lg:px-16  h-full text-black  flex justify-center flex-col ">
        <div className="">
          <FaCircleChevronLeft
            onClick={() => navigate(-1)}
            size={40}
            className="text-secondary-500 mb-3 cursor-pointer"
          />
        </div>
        <div className="text-left mb-4 ">
          <h2 className="h2-medium mt-4">Change Password</h2>
        </div>
        <Formik
          initialValues={initVal}
          validationSchema={FORM_VALIDATION}
          onSubmit={handleSubmit}
        >
          {({}) => (
            <Form>
              <div className="mt-4 ">
                <PasswordInputField
                  placeholder={"Enter Current Password"}
                  label={"Current Password"}
                  name="current_password"
                />
                <PasswordInputField
                  placeholder={"Enter New Password"}
                  label={"Password"}
                  name="new_password"
                />
                <PasswordInputField
                  placeholder={"Confirm New  Password"}
                  label={"Confirm Password"}
                  name="confirm_pass"
                />
                <Button
                  type={"submit"}
                  className="mt-5"
                  text={"Reset"}
                  variant={"default"}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default ChangePassword;
