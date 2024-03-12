import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { MedicalPersonalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
import useLocationData from "../../../hooks/useLocationData";
interface initValProps {
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
    handleMunicipalityChange,
    municiplaityOptions,
    selectedMnu,
  } = useLocationData();

  const MedicalPersonAddressDetailFormField = [
    [
      {
        name: "tempProvince",
        type: "select",
        label: "Temporary Province",
        placeholder: "Enter Temporary Province",
        required: true,
        options: provinceOptions,
        onChange: handleProvinceChange,
      },
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
    ],
    [
      {
        name: "mnu_vdc",
        type: "select",
        label: "Municipality/VDC",
        placeholder: "Enter Hospital Ward",
        required: true,
        onChange: handleMunicipalityChange,
        options: municiplaityOptions,
        value: selectedMnu,
        disabled: !selectedProvince || !selectedDistrict,
      },

      {
        name: "tempAddress",
        type: "input",
        label: "Temporary Address",
        placeholder: "Enter Temporary Address",
        required: true,
      },
    ],
    [
      {
        name: "tempWard",
        type: "input",
        label: "Temporary Ward",
        placeholder: "Enter Temporary Ward",
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
        name: "mnu_vdc",
        type: "select",
        label: "Municipality/VDC",
        placeholder: "Enter Hospital Ward",
        required: true,
        onChange: handleMunicipalityChange,
        options: municiplaityOptions,
        value: selectedMnu,
        disabled: !selectedProvince || !selectedDistrict,
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
        name: "permananentWard",
        type: "input",
        label: "Permanent Ward",
        placeholder: "Enter Permanent Ward",
        required: true,
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
    <div className="flex space-x-0 xl:space-x-4 h-[800px] lg:h-[570px] 2xl:h-[700px] overflow-auto  ">
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
