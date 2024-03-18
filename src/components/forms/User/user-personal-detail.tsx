import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { MedicalPersonalFormStep, UserFormStep } from "../../../constants";
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
      name: "email",
      type: "input",
      label: "Email Address",
      placeholder: "Enter Email Address",
      required: true,
      inputType: "text",
    },
  ],
  [
    {
      name: "phone",
      type: "input",
      label: "phone Number",
      placeholder: "Enter phone Number",
      required: true,
      inputType: "number",
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
      name: "emergency_contact_number",
      type: "input",
      label: "Emergency phone",
      placeholder: "Enter Emergency phone",
      required: true,
      inputType: "number",
    },
    {
      name: "date_of_birth",
      type: "input",
      label: "Date of Birth",
      placeholder: "YYYY-MM-DD",
      required: true,
      inputType: "date",
    },
  ],
];

const getLabelValuePair = (option: any, value: any) =>
  option.find((option: any) => option.value === value);

const UserPersonalDetail: React.FC<PersonalDetailFormProps> = ({
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
    phone: Yup.number()
      .required("*phone is required")
      .test(
        "len",
        "*phone number must be exactly 10 digits",
        (val: any) => val && val.toString().length === 10
      ),
    email: Yup.string()
      .email("*Please enter  valid email address")
      .required("Email is required"),
    gender: Yup.mixed().required("*Gender is required"),
    date_of_birth: Yup.date()
      .max(new Date(), "*Date of birth cannot be in the future")
      .required("*Date of birth is required"),
    emergency_contact_number: Yup.number()
      .required("*Emergency phone is required")
      .test(
        "len",
        "*phone number must be exactly 10 digits",
        (val: any) => val && val.toString().length === 10
      ),
  });

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
    <div className="flex space-x-0 xl:space-x-4 h-[800px] lg:h-[580px] 2xl:h-[700px] overflow-auto  ">
      <Formheader
        title={"Add A New User"}
        currentStep={currentStep}
        data={UserFormStep}
      />
      <DynamicForm
        title={"Enter Personal Details"}
        formFields={PersonalDetailFormField}
        formValidation={FORM_VALIDATION}
        onClick={onClick}
        data={UserFormStep}
        onCrossClick={onClick}
        initialValues={initVal}
        onSubmit={handleSubmit}
        submitButtonText="Create User"
        currentStep={currentStep}
        totalStep={UserFormStep.length}
      />
    </div>
  );
};

export default UserPersonalDetail;
