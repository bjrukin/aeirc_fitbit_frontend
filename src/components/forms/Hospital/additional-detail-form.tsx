import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import DynamicForm from "../../shared/DynamicForm";
import { HospitalFormStep } from "../../../constants";
interface initValProps {
  website: string;
  username: string;
  password: string;
  image: string;
}

interface AdditionalDetailProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
  hospitalDetails?: any;
  setHospitalDetails?: any;
}

export const AdditionalDetailField = [
  [
    {
      name: "website",
      type: "input",
      label: "Hospital Website",
      placeholder: "Enter The Website Of Hospital",
      required: true,
      inputType:"text",
    },
    {
      name: "username",
      type: "input",
      label: "Admin Username",
      placeholder: "Enter The Username Of Admin",
      required: true,
      inputType:"text",
    },
  ],
  [
    {
      name: "password",
      type: "input",
      label: "Admin Password",
      placeholder: "Enter The Admin Password",
      required: true,
      inputType:"text",
    },
  ],
  [
    {
      name: "image",
      type: "image",
      label: "Upload Hospital Logo",
      placeholder: "Select Hospital Logo",
      required: false,
      
    },
  ],
];

const AdditionalDetailForm: React.FC<AdditionalDetailProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
  hospitalDetails,
}) => {
  const FORM_VALIDATION = Yup.object().shape({
    website: Yup.string()
      .url("*Must be a valid URL")
      .required("*Website is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .required("*Password is required"),
    username: Yup.string()
      .min(3, "*Username must be at least 3 character")
      .required("*Username is required"),
    image: Yup.mixed().notRequired(),
  });
  const initVal: initValProps = {
    website: "",
    username: "",
    password: "",
    image: "",
  };

  const handleSubmit = async (values: initValProps) => {
    console.log("The hospital details", hospitalDetails);
    console.log("the values are", values);
    try {
    } catch (err) {
      console.log("err while adding hospital detail");
    }
  };

  return (
    <div className="flex space-x-4 h-full">
      <Formheader
        title={"Create A New Hospital"}
        currentStep={currentStep}
        data={HospitalFormStep}
      />
      <DynamicForm
        title={"Additional Details"}
        formFields={AdditionalDetailField}
        formValidation={FORM_VALIDATION}
        onCrossClick={onClick}
        onClick={() => setCurrentStep(currentStep - 1)}
        initialValues={initVal}
        onSubmit={handleSubmit}
        submitButtonText="Create Hospital"
      />
    </div>
  );
};

export default AdditionalDetailForm;
