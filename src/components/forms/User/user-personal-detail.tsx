import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { UserFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../redux/slice/form/formSlice";
import { findLabelValuePair } from "../../../lib/utilis";
interface initValProps {
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: any;
  date_of_birth: Date | null;
  phone: number;
  email: string;
  emergency_contact_number: any;
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
  console.log("edit form data  in personal detail form is", formValues);
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

  const getValueOrDefault = (key: any, defaultValue: any = "") => {
    return formValues?.[key] || formValues?.user_info?.[key] || defaultValue;
  };

  const initVal: initValProps = {
    first_name: getValueOrDefault("first_name"),
    middle_name: getValueOrDefault("middle_name"),
    phone: getValueOrDefault("phone"),
    last_name: getValueOrDefault("last_name"),
    email: getValueOrDefault("email"),
    emergency_contact_number: getValueOrDefault("emergency_contact_number"),
    gender:
      formValues?.gender ||
      formValues?.user_info?.gender?.label ||
      getLabelValuePair(genderOptions, formValues?.user_info?.gender) ||
      "",
    date_of_birth: getValueOrDefault("date_of_birth", null),
  };

  const handleSubmit = async (values: initValProps) => {
    console.log("the submiited in user personal detail", values);
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
