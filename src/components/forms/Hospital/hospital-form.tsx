import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { HospitalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
interface initValProps {
  name: string;
  contact: number | null;
  email: string;
  province: string;
  district: string;
  ward: string;
}

interface HospitalFormProps {
  onClick?:any
  currentStep?: any;
  setCurrentStep?: any;
  hospitalDetails?: any;
  setHospitalDetails?: any;
}

export const HospitalFormField = [
  [
    {
      name: "name",
      type: "input",
      label: "Name Of Hospital",
      placeholder: "Enter The Name Of Hospital",
      required: true,
      inputType:"text",
    },
    {
      name: "contact",
      type: "input",
      label: "Contact Number",
      placeholder: "+977 | Enter The Name Of Hospital",
      required: true,
      inputType:"number",
    },
  ],
  [
    {
      name: "email",
      type: "input",
      label: "Email Address",
      placeholder: "Enter Email Address",
      required: true,
      inputType:"text",
    },
    {
      name: "province",
      type: "select",
      label: "Hospital Province",
      placeholder: "Select Hospital Province",
      required: true,
      options: [{ label: "aaa", value: "asdasd" }],
    },
  ],
  [
    {
      name: "district",
      type: "select",
      label: "Hospital District",
      placeholder: "Select Hospital District",
      required: true,
      options: [{ label: "aaa", value: "asdasd" }],
    },
    {
      name: "ward",
      type: "input",
      label: "Hospital Ward",
      placeholder: "Enter Hospital Ward",
      required: true,
      inputType:"number",
    },
  ],
];

const HospitalForm: React.FC<HospitalFormProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
  setHospitalDetails,
}) => {

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
        title={"Enter Hospital Details"}
        formFields={HospitalFormField}
        formValidation={FORM_VALIDATION}
        onClick={onClick}
        onCrossClick={onClick}
        initialValues={initVal}
        onSubmit={handleSubmit}
        submitButtonText="Create Hospital"
      />
    </div>
  );
};

export default HospitalForm;
