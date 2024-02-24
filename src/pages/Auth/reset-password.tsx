import { Form, Formik } from "formik";
import { Button } from "../../components/shared/Button";
import PasswordInputField from "../../components/shared/PasswordInputField";
import AuthLayout from "../../components/ui/AuthLayout";
import * as Yup from "yup";
import { loginUser } from "../../redux/slice/auth/authAction";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { FaCircleChevronLeft } from "react-icons/fa6";

interface initValProps {
  password: string;
  password1: string;
  password2: string;
}

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string()
      .email("*Please enter a valid email address")
      .required("*Email is required"),
    password: Yup.string().required("*Password is required"),
    password1: Yup.string()
      .min(8, "Password must be 8 characters long")
      .required("*Password is required"),
    password2: Yup.string()
      .oneOf([Yup.ref("password1")], "*Password must match")
      .required("*Confirm Password is required"),
  });
  const initVal: initValProps = {
    password: "",
    password1: "",
    password2: "",
  };
  const handleSubmit = async (values: initValProps) => {
    dispatch(loginUser(values));
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
          <h2 className="h2-medium mt-4">Reset Password</h2>
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
                  name="password"
                />
                <PasswordInputField
                  placeholder={"Enter New Password"}
                  label={"Password"}
                  name="password1"
                />
                <PasswordInputField
                  placeholder={"Confirm New  Password"}
                  label={"Confirm Password"}
                  name="password2"
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

export default ResetPassword;
