import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { MedicalPersonalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../redux/slice/form/formSlice";
import { findLabelValuePair } from "../../../lib/utilis";
interface initValProps {
  first_name: string;
  marital_status: string;
  middle_name: string;
  last_name: string;
  gender: any;
  date_of_birth: Date | null;
  blood_group: any;
}

interface PersonalDetailFormProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
  isEdit?: boolean;
}
const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Others", value: "others" },
];
const bloodGroupOptions = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

export const PersonalDetailFormField = [
  [
    {
      name: "first_name",
      type: "input",
      label: "First Name",
      placeholder: "Enter First Name",
      required: true,
      inputType: "text",
    },
    {
      name: "middle_name",
      type: "input",
      label: "Middle Name",
      placeholder: "Enter Midlle Name",
      required: false,
      inputType: "text",
    },
  ],
  [
    {
      name: "last_name",
      type: "input",
      label: "Last Name",
      placeholder: "Enter Last Name",
      required: true,
      inputType: "text",
    },
    {
      name: "gender",
      type: "select",
      label: "Select a Gender",
      placeholder: "Select Gender",
      required: true,
      options: genderOptions,
    },
  ],
  [
    {
      name: "date_of_birth",
      type: "input",
      label: "Date of Birth",
      placeholder: "YYYY-MM-DD",
      required: true,
      inputType: "date",
    },
    {
      name: "blood_group",
      type: "select",
      label: "Blood Group",
      options: bloodGroupOptions,
      required: true,
    },
  ],
  [
    {
      name: "marital_status",
      type: "toggle",
      label: "Marital Status",
      placeholder: "Select Marital Status",
      required: true,
    },
  ],
];

const getLabelValuePair = (option: any, value: any) =>
  option.find((option: any) => option.value === value);

const PersonalDetailForm: React.FC<PersonalDetailFormProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
  isEdit,
}) => {
  const formValues = useSelector((state: any) => state.rootReducer?.form);
  console.log(
    "edit form data  in personal detail form is",
    formValues,
    findLabelValuePair(formValues?.user_info?.gender)
  );
  const dispatch = useDispatch();
  const FORM_VALIDATION = Yup.object().shape({
    first_name: Yup.string()
      .min(3, "*First Name must be at least 3 character")
      .required("*First Name is required"),
    middle_name: Yup.string()
      .nullable()
      .min(3, "*Middle Name must be at least 3 character"),
    last_name: Yup.string()
      .min(3, "*Last Name must be at least 3 character")
      .required("*Last Name is required"),
    gender: Yup.mixed().required("*Gender is required"),
    blood_group: Yup.mixed().required("*Blood Group is required"),
    marital_status: Yup.string().required("Marital status is required"),
    date_of_birth: Yup.date()
      .max(new Date(), "*Date of birth cannot be in the future")
      .required("*Date of birth is required"),
  });
  // const initVal: initValProps =
  //   formValues && formValues?.isEdit
  //     ? {
  //         first_name: formValues?.first_name
  //           ? formValues?.first_name
  //           : formValues?.user_info?.first_name,
  //         last_name: formValues?.last_name
  //           ? formValues?.last_name
  //           : formValues?.user_info?.last_name,
  //         middle_name: formValues?.middle_name
  //           ? formValues?.middle_name
  //           : formValues?.user_info?.middle_name,
  //         gender: formValues?.gender
  //           ? formValues?.gender
  //           : formValues?.user_info?.gender?.label
  //           ? formValues?.user_info?.gender
  //           : getLabelValuePair(genderOptions, formValues?.user_info?.gender),
  //         blood_group: formValues?.blood_group
  //           ? formValues?.blood_group
  //           : formValues?.user_info?.blood_group?.label
  //           ? formValues?.user_info?.blood_group
  //           : getLabelValuePair(
  //               bloodGroupOptions,
  //               formValues?.user_info?.blood_group
  //             ),
  //         date_of_birth: formValues?.date_of_birth
  //           ? formValues?.date_of_birth
  //           : formValues?.user_info?.date_of_birth,
  //         marital_status: formValues?.marital_status
  //           ? formValues?.marital_status
  //           : formValues?.user_info?.marital_status,
  //       }
  //     : formValues && !isEdit
  //     ? formValues
  //     : {
  //         first_name: "",
  //         middle_name: "",
  //         last_name: "",
  //         gender: "",
  //         blood_group: "",
  //         date_of_birth: null,
  //         marital_status: "",
  //       };

  const initVal: initValProps = {
    first_name:
      formValues?.first_name || formValues?.user_info?.first_name || "",
    middle_name:
      formValues?.middle_name || formValues?.user_info?.middle_name || "",
    last_name: formValues?.last_name || formValues?.user_info?.last_name || "",
    gender:
      formValues?.gender ||
      formValues?.user_info?.gender?.label ||
      getLabelValuePair(genderOptions, formValues?.user_info?.gender) ||
      "",
    blood_group:
      formValues?.blood_group ||
      formValues?.user_info?.blood_group?.label ||
      getLabelValuePair(
        bloodGroupOptions,
        formValues?.user_info?.blood_group
      ) ||
      "",
    date_of_birth:
      formValues?.date_of_birth || formValues?.user_info?.date_of_birth || null,
    marital_status:
      formValues?.marital_status || formValues?.user_info?.marital_status || "",
  };

  const handleSubmit = async (values: initValProps) => {
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
        title={"Add A New Medical Personal"}
        currentStep={currentStep}
        data={MedicalPersonalFormStep}
      />
      <DynamicForm
        title={"Enter Personal Details"}
        formFields={PersonalDetailFormField}
        formValidation={FORM_VALIDATION}
        onClick={onClick}
        data={MedicalPersonalFormStep}
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

export default PersonalDetailForm;
