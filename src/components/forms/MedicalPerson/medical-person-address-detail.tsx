import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { MedicalPersonalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
interface initValProps {
  maritalStatus: string;
  tempProvince: string;
  tempDistrict: string;
  permananentAddress: string;
  permananetProvince: string;
  permananetDistrict: string;
  username: any;
  password: any;
}

interface MedicalPersonAddressDetailFormProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
}

export const MedicalPersonAddressDetailFormField = [
  [
    {
      name: "maritalStatus",
      type: "select",
      label: "Marital Status",
      placeholder: "Select Marital Status",
      required: true,
    },
    {
      name: "tempProvince",
      type: "select",
      label: "Temporary Province",
      placeholder: "Enter Temporary Province",
      required: true,
      options: [{ label: "aaa", value: "asdasd" }],
    },
  ],
  [
    {
      name: "tempDistrict",
      type: "select",
      label: "Temporary District",
      placeholder: "Enter Temporary District",
      required: true,
      options: [{ label: "aaa", value: "asdasd" }],
    },
    {
      name: "permananentAddress",
      type: "input",
      label: "Permanent Address",
      placeholder: "Enter Permanent Address",
      required: true,
    },
  ],
  [
    {
      name: "permananetProvince",
      type: "select",
      label: "Permanent Province",
      placeholder: "Enter Permanent Province",
      required: true,
      options: [{ label: "aaa", value: "asdasd" }],
    },
    {
      name: "permananetDistrict",
      type: "select",
      label: "Permanent District",
      placeholder: "Enter Permanent District",
      required: true,
      options: [{ label: "aaa", value: "asdasd" }],
    },
  ],
  [
    {
      name: "username",
      type: "input",
      label: "Username",
      placeholder: "Enter Username",
      required: true,
      inputType:"text",
    },
    {
      name: "password",
      type: "input",
      label: "Password",
      placeholder: "Enter Password",
      required: true,
      inputType:"text",
    },
  ],
];

const MedicalPersonAddressDetailForm: React.FC<
  MedicalPersonAddressDetailFormProps
> = ({ onClick, currentStep, setCurrentStep }) => {
  const FORM_VALIDATION = Yup.object().shape({
    maritalStatus: Yup.string().required("Marital status is required"),
    tempProvince: Yup.string().required("Temporary province is required"),
    tempDistrict: Yup.string().required("Temporary district is required"),
    permananentAddress: Yup.string().required("Permanent address is required"),
    permananetProvince: Yup.string().required("Permanent province is required"),
    permananetDistrict: Yup.string().required("Permanent district is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
  const initVal: initValProps = {
    maritalStatus: "",
    tempProvince: "",
    tempDistrict: "",
    permananentAddress: "",
    permananetProvince: "",
    permananetDistrict: "",
    username: "",
    password: "",
  };

  const handleSubmit = async (values: initValProps) => {
    console.log("the values are", values);
    try {
    } catch (err) {
      console.log("err while adding medical person detail");
    }
  };

  return (
    <div className="flex space-x-4 h-[694px]">
      <Formheader
        title={"Add A New Medical Personal"}
        currentStep={currentStep}
        data={MedicalPersonalFormStep}
      />
      <DynamicForm
        title={"Address Details"}
        formFields={MedicalPersonAddressDetailFormField}
        formValidation={FORM_VALIDATION}
        onClick={() => setCurrentStep(currentStep - 1)}
        onCrossClick={onClick}
        initialValues={initVal}
        onSubmit={handleSubmit}
        submitButtonText="Create Medical Personal"
      />
    </div>
  );
};

export default MedicalPersonAddressDetailForm;
