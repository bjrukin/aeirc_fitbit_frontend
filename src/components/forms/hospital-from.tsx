import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../shared/Input";
import { Button } from "../shared/Button";
import { RxCross2 } from "react-icons/rx";
import { DefaultSelect } from "../shared/Select";
import Select from "react-select";
import { customStyles } from "../shared/CustomStyle";
interface initValProps {
  name: string;
  contact: number | null;
  email: string;
  province: string;
  district: string;
  ward: string;
}

interface HospitalFormProps {
  onClick: React.MouseEventHandler<HTMLButtonElement | SVGElement>;
}
const HospitalForm: React.FC<HospitalFormProps> = ({ onClick }) => {
  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string().required("*Name is required"),
    contact: Yup.number().required("*Contact is required"),
    email: Yup.string()
      .email("*Please enter a valid email address")
      .required("*Email is required"),
    province: Yup.string().required("*Province is required"),
    district: Yup.string().required("*District is required"),
    ward: Yup.string().required("*Ward is required"),
  });
  const initVal: initValProps = {
    name: "",
    contact: null,
    email: "",
    province: "",
    district: "",
    ward: "",
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
        <div className="flex items-center justify-between">
          <p className="p-semibold-20">Enter Hospital Details</p>
          <RxCross2 size={22} className="cursor-pointer" onClick={onClick} />
        </div>

        <Formik
          initialValues={initVal}
          l
          validationSchema={FORM_VALIDATION}
          onSubmit={handleSubmit}
        >
          {({ isValid, isSubmitting }) => (
            <Form className="h-full flex flex-col justify-between">
              <div className="mt-4 ">
                <div className="flex   w-full space-x-5">
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
                      name={"contact"}
                      label={"Contact Number"}
                      placeholder="+977 | Enter The Name Of Hospital"
                      labelClassName="font-bold text-lg"
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex   w-full space-x-5 mt-10 ">
                  <div className="w-full">
                    <Input
                      name={"email"}
                      labelClassName="font-bold text-lg"
                      label={"Email Address"}
                      required
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="w-full">
                    <Field
                      name="province"
                      className=""
                      options={[
                        { label: "aaa", value: "asdasd" },
                        { label: "aaa", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "Aaa", value: "asdasd" },
                      ]}
                      component={DefaultSelect}
                      isMulti={false}
                      placeholder="Select Hospital Province"
                      label="Hospital Province"
                      // defaultValue={EditItemsData?.modifiers?.map(
                      //   (item: any) => {
                      //     return {
                      //       label: item.name,
                      //       value: item.id,
                      //     };
                      //   }
                      // )}
                    />
                  </div>
                </div>
                <div className="flex   w-full space-x-5 mt-10 ">
                  <div className="w-full ">
                    <Field
                      name="district"
                      className=""
                      options={[
                        { label: "aaa", value: "asdasd" },
                        { label: "aaa", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "asas", value: "asdasd" },
                        { label: "Aaa", value: "asdasd" },
                      ]}
                      component={DefaultSelect}
                      isMulti={false}
                      placeholder="Select Hospital District"
                      label="Hospital District"
                      // defaultValue={EditItemsData?.modifiers?.map(
                      //   (item: any) => {
                      //     return {
                      //       label: item.name,
                      //       value: item.id,
                      //     };
                      //   }
                      // )}
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      type="string"
                      name={"ward"}
                      label={"Hospital Ward"}
                      placeholder="Enter Hospital Ward"
                      labelClassName="font-bold text-lg"
                      required={true}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center  mb-6 ">
                <Button
                  variant={"secondary"}
                  type={"click"}
                  className="w-fit"
                  text={"Back"}
                  onClick={onClick}
                />
                <Button
                  disabled={!isValid}
                  type={"submit"}
                  className="w-fit "
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
