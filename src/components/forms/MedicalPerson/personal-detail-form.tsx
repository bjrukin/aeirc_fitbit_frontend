import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { MedicalPersonalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
interface initValProps {
  fname: string;
  mname: string;
  lname: string;
  gender: string;
  dateofBirth: Date | null;
  bloodGroup: string;
}

interface PersonalDetailFormProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
}

export const PersonalDetailFormField = [
  [
    {
      name: "fname",
      type: "input",
      label: "First Name",
      placeholder: "Enter First Name",
      required: true,
      inputType:"text",
    },
    {
      name: "mname",
      type: "input",
      label: "Middle Name",
      placeholder: "Enter Midlle Name",
      required: false,
      inputType:"text",
    },
  ],
  [
    {
      name: "lname",
      type: "input",
      label: "Last Name",
      placeholder: "Enter Last Name",
      required: true,
      inputType:"text",
    },
    {
      name: "gender",
      type: "select",
      label: "Select a Gender",
      placeholder: "Select Gender",
      required: true,
      options: [
        { label: "Male", value: "1" },
        { label: "Female", value: "2" },
        { label: "Others", value: "3" },
      ],
    },
  ],
  [
    {
      name: "dateofBirth",
      type: "input",
      label: "Date of Birth",
      placeholder: "YYYY-MM-DD",
      required: true,
      inputType:"date",

    },
    {
      name: "bloodGroup",
      type: "select",
      label: "Blood Group",
      options: [
        { value: "A+", label: "A+" },
        { value: "A-", label: "A-" },
        { value: "B+", label: "B+" },
        { value: "B-", label: "B-" },
        { value: "AB+", label: "AB+" },
        { value: "AB-", label: "AB-" },
        { value: "O+", label: "O+" },
        { value: "O-", label: "O-" },
      ],
      required: true,
    }
  ],
];

const PersonalDetailForm: React.FC<PersonalDetailFormProps> = ({
  onClick,
  currentStep,
}) => {
  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string()
      .min(3, "*First Name must be at least 3 character")
      .required("*First Name is required"),
    mname: Yup.string().min(3, "*Middle Name must be at least 3 character"),
    lname: Yup.string()
      .min(3, "*Last Name must be at least 3 character")
      .required("*Last Name is required"),
    gender: Yup.string().required("*Gender is required"),
    bloodGroup: Yup.string().required("*Blood Group is required"),
    dateOfBirth: Yup.date()
      .max(new Date(), "*Date of birth cannot be in the future")
      .required("*Date of birth is required"),
  });
  const initVal: initValProps = {
    fname: "",
    mname: "",
    lname: "",
    gender: "",
    bloodGroup: "",
    dateofBirth: null,
  };

  const handleSubmit = async (values: initValProps) => {
    console.log("the values are", values);
    try {
    } catch (err) {
      console.log("err while adding medical person detail");
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
        title={"Enter Personal Details"}
        formFields={PersonalDetailFormField}
        formValidation={FORM_VALIDATION}
        onClick={onClick}
        onCrossClick={onClick}
        initialValues={initVal}
        onSubmit={handleSubmit}
        submitButtonText="Create Medical Personal"
      />
    </div>
  );
};

export default PersonalDetailForm;
