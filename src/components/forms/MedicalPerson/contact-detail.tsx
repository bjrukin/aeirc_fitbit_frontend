import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { MedicalPersonalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../redux/slice/form/formSlice";
interface initValProps {
  phone: any;
  email: string;
  citizenship_number: any;
  nid_number: any;
  council_number: any;
  emergency_contact_number: any;
  insurance_number: any;
}

interface phoneDetailFormProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
  isEdit?: boolean;
}

export const phoneDetailFormField = [
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
      name: "citizenship_number",
      type: "input",
      label: "Citizenship Number",
      placeholder: "Enter Citizenship Number",
      required: true,
      inputType: "number",
    },
    {
      name: "nid_number",
      type: "input",
      label: "NID Number",
      placeholder: "Enter NID Number",
      required: true,
      inputType: "number",
    },
  ],
  [
    {
      name: "council_number",
      type: "input",
      label: "Enter Nmc Number",
      placeholder: "Enter Nmc Number",
      required: true,
      inputType: "number",
    },
    {
      name: "insurance_number",
      type: "input",
      label: "Enter Insurance Number",
      placeholder: "Enter Insurance Number",
      required: true,
      inputType: "number",
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
  ],
];

const phoneDetailForm: React.FC<phoneDetailFormProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
  isEdit,
}) => {
  const dispatch = useDispatch();
  const formValues = useSelector((state: any) => state.rootReducer?.form);
  console.log("form Data in contact detail is", formValues);

  const FORM_VALIDATION = Yup.object().shape({
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
    citizenship_number: Yup.string().required(
      "*citizenship_number number is required"
    ),
    nid_number: Yup.string().required("*nid_number number is required"),
    council_number: Yup.string().required("*Council number is required"),
    emergency_contact_number: Yup.number()
      .required("*Emergency phone is required")
      .test(
        "len",
        "*phone number must be exactly 10 digits",
        (val: any) => val && val.toString().length === 10
      ),
    insurance_number: Yup.string().required("*Insurance number is required"),
  });
  const initVal: initValProps =
    formValues && formValues?.isEdit
      ? {
          phone: formValues?.phone
            ? formValues?.phone
            : formValues?.user_info?.phone,
          email: formValues?.email ? formValues?.email : formValues?.email,
          citizenship_number: formValues?.citizenship_number
            ? formValues?.citizenship_number
            : formValues?.user_info?.citizenship_number,
          nid_number: formValues?.nid_number
            ? formValues?.nid_number
            : formValues?.user_info?.nid_number,
          emergency_contact_number: formValues?.emergency_contact_number
            ? formValues?.emergency_contact_number
            : formValues?.user_info?.emergency_contact_number,
          insurance_number: formValues?.insurance_number
            ? formValues?.insurance_number
            : formValues?.user_info?.insurance_number,
          council_number: formValues?.council_number
            ? formValues?.council_number
            : formValues?.medical_staff_info?.council_number,
        }
      : formValues && !isEdit
      ? formValues
      : {
          phone: "",
          email: "",
          citizenship_number: "",
          nid_number: "",
          emergency_contact_number: "",
          insurance_number: "",
          council_number: "",
        };

  const handleSubmit = async (values: initValProps) => {
    try {
      dispatch(updateFormData(values));
      if (currentStep != undefined) {
        setCurrentStep(currentStep + 1);
      }
    } catch (err) {
      console.log("err while adding medical person detail");
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
        title={"Contact And Id Details"}
        formFields={phoneDetailFormField}
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

export default phoneDetailForm;
