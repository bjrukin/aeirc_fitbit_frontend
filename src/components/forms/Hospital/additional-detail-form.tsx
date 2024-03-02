import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import DynamicForm from "../../shared/DynamicForm";
import { HospitalFormStep } from "../../../constants";
interface initValProps {
  name: string;
  contact: number | null;
  email: string;
  province: string;
  district: string;
  ward: string;
}

interface AdditionalDetailProps {
  onClick: React.MouseEventHandler<HTMLButtonElement | SVGElement>;
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
    },
    {
      name: "username",
      type: "input",
      label: "Admin Username",
      placeholder: "Enter The Username Of Admin",
      required: true,
    },
  ],
  [
    {
      name: "password",
      type: "input",
      label: "Admin Password",
      placeholder: "Enter The Admin Password",
      required: true,
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
  setHospitalDetails,
}) => {
  console.log("hospital detail", hospitalDetails);

  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string()
      .min(3, "*Name must be at least 3 character")
      .required("*Name is required"),
    contact: Yup.number()
      .required("*Contact is required")
      .test(
        "len",
        "*Contact number must be exactly 10 digits",
        (val: any) => val && val.toString().length === 10
      ),
    email: Yup.string()
      .email("*Please enter a valid email address")
      .required("*Email is required"),
    province: Yup.string().required("*Province is required"),
    district: Yup.string().required("*District is required"),
    ward: Yup.string().required("*Ward is required"),
  });
  const initVal: initValProps = {
    name: "",
    contact: null,
    email: "",
    province: "",
    district: "",
    ward: "",
  };

  const handleSubmit = async (values: initValProps) => {
    console.log("the values are", values);
    try {
      setHospitalDetails(values);
      setCurrentStep(currentStep + 1);
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
        onClick={() => setCurrentStep(currentStep - 1)}
        initialValues={initVal}
        onSubmit={handleSubmit}
        submitButtonText="Create Hospital"
      />
    </div>
  );
};

export default AdditionalDetailForm;
