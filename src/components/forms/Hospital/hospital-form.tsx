import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { HospitalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
import useLocationData from "../../../hooks/useLocationData";
import { findLabelValuePair } from "../../../lib/utilis";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../redux/slice/form/formSlice";

interface LabelValuePair {
  label?: string;
  value: string | number;
}
interface initValProps {
  name: string;
  address: string;
  phone: number | null;
  email: string;
  province: any;
  district: any;
  mnu_vdc: any;
}

interface HospitalFormProps {
  onClick?: () => void;
  currentStep?: number;
  setCurrentStep?: any;
  isEdit?: boolean;
}

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .min(3, "*Name must be at least 3 character")
    .required("*Name is required"),
  phone: Yup.number()
    .required("*Contact is required")
    .test(
      "len",
      "*Contact number must be exactly 10 digits",
      (val: any) => val && val.toString().length === 10
    ),
  email: Yup.string()
    .email("*Please enter a valid email address")
    .required("*Email is required"),
  province: Yup.mixed().required("*Province is required"),
  address: Yup.string().required("*Address is required"),
  district: Yup.mixed().required("*District is required"),
  mnu_vdc: Yup.mixed().required("*Municipality/VDC is required"),
});
const HospitalForm: React.FC<HospitalFormProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
  isEdit,
}) => {
  const dispatch = useDispatch();
  const formValues = useSelector((state: any) => state.rootReducer.form);
  const initVal: initValProps =
    formValues && formValues?.isEdit
      ? {
          name: formValues?.name,
          phone: formValues?.phone,
          mnu_vdc: formValues?.mnu_vdc.label
            ? formValues?.mnu_vdc
            : findLabelValuePair(formValues?.mnu_vdc),
          email: formValues?.email,
          province: formValues?.province.label
            ? formValues?.province
            : findLabelValuePair(formValues?.province),
          district: formValues?.district.label
            ? formValues?.district
            : findLabelValuePair(formValues?.district),
          address: formValues?.address,
        }
      : formValues && !isEdit
      ? formValues
      : {
          name: "",
          phone: null,
          mnu_vdc: "",
          email: "",
          province: "",
          district: "",
          address: "",
        };
  const {
    provinceOptions,
    districtOptions,
    selectedDistrict,
    municiplaityOptions,
    handleProvinceChange,
    selectedProvince,
    handleDistrictChange,
    selectedMnu,
    handleMunicipalityChange,
  } = useLocationData("");

  const HospitalFormField = [
    [
      {
        name: "name",
        type: "input",
        label: "Name Of Hospital",
        placeholder: "Enter The Name Of Hospital",
        required: true,
        inputType: "text",
      },
      {
        name: "phone",
        type: "input",
        label: "Contact Number",
        placeholder: "+977 | Enter The Contact Number",
        required: true,
        inputType: "number",
      },
    ],
    [
      {
        name: "email",
        type: "input",
        label: "Email Address",
        placeholder: "Enter Email Address",
        required: true,
        inputType: "text",
      },
      {
        name: "province",
        type: "select",
        label: "Hospital Province",
        placeholder: "Select Hospital Province",
        required: true,
        options: provinceOptions,
        onChange: handleProvinceChange,
      },
    ],
    [
      {
        name: "district",
        type: "select",
        label: "Hospital District",
        placeholder: "Select Hospital District",
        required: true,
        options: districtOptions,
        onChange: handleDistrictChange,
        value: selectedDistrict,
        disabled: !selectedProvince,
      },
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
    ],
    [
      {
        name: "address",
        type: "input",
        label: "Hospital Address",
        placeholder: "Enter Hospital Address",
        required: true,
        inputType: "text",
      },
    ],
  ];

 
  const handleSubmit = async (values: initValProps) => {
    console.log("The submitted are", values);
    try {
      dispatch(updateFormData(values));
      if (currentStep != undefined) {
        setCurrentStep(currentStep + 1);
      }
    } catch (err) {
      console.log("err while adding personal  detail", err);
    }
  };
  return (
    <div className="flex space-x-0 xl:space-x-4 h-full lg:h-[580px] 2xl:h-[700px] overflow-auto  ">
      <Formheader
        title={"Create A New Hospital"}
        currentStep={currentStep}
        data={HospitalFormStep}
      />

      <DynamicForm
        title={"Enter Hospital Details"}
        formFields={HospitalFormField}
        data={HospitalFormStep}
        formValidation={FORM_VALIDATION}
        onClick={onClick}
        onCrossClick={onClick}
        initialValues={initVal}
        onSubmit={handleSubmit}
        currentStep={currentStep}
        totalStep={HospitalFormStep.length}
        submitButtonText="Create Hospital"
      />
    </div>
  );
};

export default HospitalForm;
