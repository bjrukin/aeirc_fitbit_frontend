import { Button } from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import AuthLayout from "../../components/ui/AuthLayout";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Service from "../../setup/Service";
import { toastAlert } from "../../lib/toastAlert";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { useState } from "react";
import { AuthSkeleton } from "../../components/shared/skeleton/authSkeleton";

interface initValProps {
  email: any;
}
const ForgetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("*Email is required"),
  });
  const initVal: initValProps = {
    email: "",
  };
  const handleSubmit = async (values: initValProps) => {
    setIsLoading(true);
    try {
      await Service.post("/auth/password/reset", values);
      navigate("/login");
      toastAlert("success", "Reset Link Sent Successfully.");
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      toastAlert(
        "error",
        error?.response?.data?.message ?? "Something went wrong."
      );
      console.log("The err is", error);
    }
  };
  return (
    <AuthLayout>
      {isLoading ? (
        <AuthSkeleton />
      ) : (
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
            {({ isValid }) => {
              return (
                <Form>
                  <div className="mt-4 ">
                    <Input
                      name={"email"}
                      label={"Email"}
                      placeholder="Enter your email address"
                    />
                    <Button
                      disabled={!isValid}
                      type={"submit"}
                      className="mt-2 w-full"
                      text={"Next"}
                      variant={"default"}
                    />
                    {/* <Dialog>
                  <DialogTrigger className=" w-full">
                  </DialogTrigger>
                  <DialogContent className="p-0 bg-[white] sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="bg-secondary-500 text-white font-medium  text-xl p-4">
                        Forgot Password
                      </DialogTitle>
                      <DialogClose className=" border-[0px] " />
                    </DialogHeader>
                    <DialogDescription className="text-base p-4 p-6">
                      If the given user exists,an email with the reset link
                      will be sent to the provided email address.
                    </DialogDescription>
                    <div className="flex justify-end ">
                      {" "}
                      <DialogFooter className="p-4 w-fit  ">
                        <Button
                          type="submit"
                          text="OK"
                          className="px-[16px]"
                        />
                      </DialogFooter>
                    </div>
                  </DialogContent>
                </Dialog>{" "} */}
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
      )}
    </AuthLayout>
  );
};

export default ForgetPassword;
