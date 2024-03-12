import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { MedicalPersonalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../redux/slice/form/formSlice";
interface initValProps {
  first_name: string;
  maritalStatus: string;
  middle_name: string;
  last_name: string;
  gender: string;
  date_of_birth: Date | null;
  blood_group: string;
}

interface PersonalDetailFormProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
  isEdit?: boolean;
}

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
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Others", value: "others" },
      ],
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
    },
  ],
  [
    {
      name: "maritalStatus",
      type: "toggle",
      label: "Marital Status",
      placeholder: "Select Marital Status",
      required: true,
    },
  ],
];

const PersonalDetailForm: React.FC<PersonalDetailFormProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
  isEdit,
}) => {
  const formData = useSelector((state: any) => state.rootReducer?.form);
  const dispatch = useDispatch();
  const FORM_VALIDATION = Yup.object().shape({
    first_name: Yup.string()
      .min(3, "*First Name must be at least 3 character")
      .required("*First Name is required"),
    middle_name: Yup.string().min(
      3,
      "*Middle Name must be at least 3 character"
    ),
    last_name: Yup.string()
      .min(3, "*Last Name must be at least 3 character")
      .required("*Last Name is required"),
    gender: Yup.mixed().required("*Gender is required"),
    blood_group: Yup.mixed().required("*Blood Group is required"),
    maritalStatus: Yup.string().required("Marital status is required"),
    date_of_birth: Yup.date()
      .max(new Date(), "*Date of birth cannot be in the future")
      .required("*Date of birth is required"),
  });
  const initVal: initValProps = formData
    ? formData
    : {
        first_name: "",
        middle_name: "",
        last_name: "",
        gender: "",
        blood_group: "",
        date_of_birth: null,
        maritalStatus: "",
      };

  console.log("The inital values of personal info is", initVal);

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
