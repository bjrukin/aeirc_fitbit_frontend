import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { MedicalPersonalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
import useLocationData from "../../../hooks/useLocationData";
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

const MedicalPersonAddressDetailForm: React.FC<
  MedicalPersonAddressDetailFormProps
> = ({ onClick, currentStep, setCurrentStep }) => {
  const FORM_VALIDATION = Yup.object().shape({
    maritalStatus: Yup.string().required("Marital status is required"),
    tempProvince: Yup.mixed().required("Temporary province is required"),
    tempDistrict: Yup.mixed().required("Temporary district is required"),
    permananentAddress: Yup.string().required("Permanent address is required"),
    permananetProvince: Yup.mixed().required("Permanent province is required"),
    permananetDistrict: Yup.mixed().required("Permanent district is required"),
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

  const {
    provinceOptions,
    districtOptions,
    selectedDistrict,
    handleProvinceChange,
    selectedProvince,
    handleDistrictChange,
  } = useLocationData();

  const MedicalPersonAddressDetailFormField = [
    [
      {
        name: "maritalStatus",
        type: "toggle",
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
        options: provinceOptions,
        onChange: handleProvinceChange,
      },
    ],
    [
      {
        name: "tempDistrict",
        type: "select",
        label: "Temporary District",
        placeholder: "Enter Temporary District",
        required: true,
        options: districtOptions,
        onChange: handleDistrictChange,
        value: selectedDistrict,
        disabled: !selectedProvince,
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
        options: provinceOptions,
        onChange: handleProvinceChange,
      },
      {
        name: "permananetDistrict",
        type: "select",
        label: "Permanent District",
        placeholder: "Enter Permanent District",
        required: true,
        options: districtOptions,
        onChange: handleDistrictChange,
        value: selectedDistrict,
        disabled: !selectedProvince,
      },
    ],
    [
      {
        name: "username",
        type: "input",
        label: "Username",
        placeholder: "Enter Username",
        required: true,
        inputType: "text",
      },
      {
        name: "password",
        type: "input",
        label: "Password",
        placeholder: "Enter Password",
        required: true,
        inputType: "text",
      },
    ],
  ];
  const handleSubmit = async (values: initValProps) => {
    console.log("The submitted values   of medixal person are", values);
    try {
    } catch (err) {
      console.log("err while adding medical person detail", err);
    }
  };

  return (
    <div className="flex space-x-4 h-full">
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
        currentStep={currentStep}
        totalStep={MedicalPersonalFormStep.length}
      />
    </div>
  );
};

export default MedicalPersonAddressDetailForm;
