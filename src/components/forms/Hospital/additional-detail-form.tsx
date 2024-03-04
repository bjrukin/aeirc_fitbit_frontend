import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import DynamicForm from "../../shared/DynamicForm";
import { HospitalFormStep } from "../../../constants";
import Service from "../../../setup/Service";
import { toastAlert } from "../../../lib/toastAlert";
interface initValProps {
  website: string;
  admin_email: string;
  admin_password: string;
  description: string;
  image: string;
}

interface AdditionalDetailProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
  hospitalDetails?: any;
  setHospitalDetails?: any;
  fetchData?: any;
}

export const AdditionalDetailField = [
  [
    {
      name: "admin_email",
      type: "input",
      label: "Admin Email",
      placeholder: "Enter The Username Of Admin",
      required: true,
      inputType: "email",
    },
    {
      name: "admin_password",
      type: "input",
      label: "Admin Password",
      placeholder: "Enter The Admin Password",
      required: true,
      inputType: "text",
    },
  ],
  [
    {
      name: "website",
      type: "input",
      label: "Hospital Website",
      placeholder: "Enter The Website Of Hospital",
      required: true,
      inputType: "text",
    },
    {
      name: "description",
      type: "input",
      label: "Hospital Description",
      placeholder: "Enter The Description of Hospital",
      inputType: "text",
      required: false,
    },
  ],
  [
    {
      name: "logo",
      type: "image",
      label: "Upload Hospital Logo",
      placeholder: "Select Hospital Logo",
      required: false,
    },
  ],
];

const FORM_VALIDATION = Yup.object().shape({
  website: Yup.string()
    .url("*Must be a valid URL")
    .required("*Website is required"),
  admin_password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .required("*Password is required"),
  description: Yup.string(),
  admin_email: Yup.string()
    .email("*Please enter a valid email address")
    .required("*Email is required"),
  image: Yup.mixed().notRequired(),
});
const initVal: initValProps = {
  website: "",
  admin_email: "",
  admin_password: "",
  image: "",
  description: "",
};

const AdditionalDetailForm: React.FC<AdditionalDetailProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
  hospitalDetails,
  fetchData,
}) => {
  const handleSubmit = async (values: initValProps) => {
    const payload = {
      ...hospitalDetails,
      ...values,
    };
    const formData = new FormData();
    Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
    });
    try {
      const res = await Service.post("/hospitals", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (onClick) {
        onClick();
      }
      fetchData();
      toastAlert("success", res?.data?.message);
    } catch (err) {
      console.log("err while adding hospital detail", err);
      toastAlert("error", "Error While Submitting Form");
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
        currentStep={currentStep}
        totalStep={HospitalFormStep.length}
      />
    </div>
  );
};

export default AdditionalDetailForm;
