import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { MedicalPersonalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
interface initValProps {
  contact: any;
  email: string;
  citizenship: any;
  nid: any;
  nmc: any;
  emergencyContact: any;
  insuranceNumber: any;
}

interface ContactDetailFormProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
}

export const ContactDetailFormField = [
  [
    {
      name: "contact",
      type: "input",
      label: "Contact Number",
      placeholder: "Enter Contact Number",
      required: true,
      inputType: "number",
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
      name: "citizenship",
      type: "input",
      label: "Citizenship Number",
      placeholder: "Enter Citizenship Number",
      required: true,
      inputType: "number",
    },
    {
      name: "nid",
      type: "input",
      label: "NID Number",
      placeholder: "Enter NID Number",
      required: true,
      inputType: "number",
    },
  ],
  [
    {
      name: "nmc",
      type: "input",
      label: "Enter Nmc Number",
      placeholder: "Enter Nmc Number",
      required: true,
      inputType: "number",
    },
    {
      name: "emergencyContact",
      type: "input",
      label: "Emergency Contact",
      placeholder: "Enter Emergency Contact",
      required: true,
      inputType: "number",
    },
  ],
  [
    {
      name: "insuranceNumber",
      type: "input",
      label: "Enter Insurance Number",
      placeholder: "Enter Insurance Number",
      required: true,
      inputType: "number",
    },
  ],
];

const ContactDetailForm: React.FC<ContactDetailFormProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
}) => {
  const FORM_VALIDATION = Yup.object().shape({
    contact: Yup.number()
      .required("*Contact is required")
      .test(
        "len",
        "*Contact number must be exactly 10 digits",
        (val: any) => val && val.toString().length === 10
      ),
    email: Yup.string()
      .email("*Please enter  valid email address")
      .required("Email is required"),
    citizenship: Yup.string().required("*Citizenship number is required"),
    nid: Yup.string().required("*NID number is required"),
    nmc: Yup.string().required("*NMC number is required"),
    emergencyContact: Yup.number()
      .required("*Emergency Contact is required")
      .test(
        "len",
        "*Contact number must be exactly 10 digits",
        (val: any) => val && val.toString().length === 10
      ),
    insuranceNumber: Yup.string().required("*Insurance number is required"),
  });
  const initVal: initValProps = {
    contact: "",
    email: "",
    citizenship: "",
    nid: "",
    nmc: "",
    emergencyContact: "",
    insuranceNumber: "",
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
        title={"Contact And Id Details"}
        formFields={ContactDetailFormField}
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

export default ContactDetailForm;
