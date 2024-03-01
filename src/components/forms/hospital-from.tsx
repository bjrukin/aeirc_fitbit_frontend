import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../shared/Input";
import { Button } from "../shared/Button";
interface initValProps {
  email: string;
  password: string;
}

const HospitalForm = () => {
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
    } catch (err: any) {}
  };
  return (
    <div className="flex space-x-4 h-full">
      <div className="bg-white w-[350px] rounded-lg px-4 py-6">
        <p className="p-semibold-20">Create A New Hospital</p>
        <p className="p-semibold-16 text-tertiary-800 mt-6 ">
          Fields Marked <span className="text-warning">*</span> Are Required And
          Can't Be Left Empty
        </p>
      </div>
      <div className="bg-white flex-1 rounded-lg p-6 h-full">
        <p className="p-semibold-20">Enter Hospital Details</p>
        <Formik
          initialValues={initVal}
          validationSchema={FORM_VALIDATION}
          onSubmit={handleSubmit}
        >
          {({ isValid, isSubmitting }) => (
            <Form className="h-full flex flex-col justify-between">
              <div className="mt-4 ">
                <div className="flex items-center  w-full space-x-5">
                  <div className="w-full">
                    <Input
                      name={"name"}
                      labelClassName="font-bold text-lg"
                      label={"Name Of Hospital"}
                      required
                      placeholder="Enter The Name Of Hospital"
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      type="string"
                      name={"email"}
                      label={"Contact Number"}
                      placeholder="+977 | Enter The Name Of Hospital"
                      labelClassName="font-bold text-lg"
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex items-center  w-full space-x-5 mt-10">
                  <div className="w-full">
                    <Input
                      name={"name"}
                      labelClassName="font-bold text-lg"
                      label={"Email Address"}
                      required
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      type="string"
                      name={"email"}
                      label={"Hospital Province"}
                      placeholder="Select Hospital Province"
                      labelClassName="font-bold text-lg"
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex items-center  w-full space-x-5 mt-10">
                  <div className="w-full">
                    <Input
                      name={"name"}
                      labelClassName="font-bold text-lg"
                      label={"Hospital District"}
                      required
                      placeholder="Select Hospital District"
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      type="string"
                      name={"email"}
                      label={"Hospital Ward"}
                      placeholder="Enter Hospital Ward"
                      labelClassName="font-bold text-lg"
                      required={true}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center  mb-6 ">
                <button>asd</button>
                <Button
                  disabled={!isValid}
                  type={"submit"}
                  className="mt-5 w-fit "
                  text={isSubmitting ? "..." : "Create Hospital"}
                  variant={"outline"}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default HospitalForm;
