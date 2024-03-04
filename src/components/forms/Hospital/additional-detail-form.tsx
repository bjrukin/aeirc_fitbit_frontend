import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import DynamicForm from "../../shared/DynamicForm";
import { HospitalFormStep } from "../../../constants";
import usePost from "../../../hooks/usePost";
import Service from "../../../setup/Service";
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
      name: "image",
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
  username: "",
  password: "",
  image: "",
};

const AdditionalDetailForm: React.FC<AdditionalDetailProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
  hospitalDetails,
}) => {
  const handleSubmit = async (values: initValProps) => {
    console.log("hello");
    const payload = {
      ...hospitalDetails,
      ...values,
    };
    console.log("payload", payload);
    // const formData = new FormData();
    // console.log("form data is", formData);
    // formData.append("name", payload.name);
    // formData.append("address", payload.address);
    // formData.append("phone", payload.phone);
    // formData.append("email", payload.email);
    // formData.append("admin_email", payload.admin_email);
    // formData.append("admin_password", payload.admin_password);
    // formData.append("website", payload.website);
    // formData.append("description", payload.description);
    // formData.append("logo", payload.image);
    // formData.append("province", payload.province);
    // formData.append("district", payload.district);
    // formData.append("mnu_vdc", payload.mnu_vdc);
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    const formData = new FormData();

    Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
    });

    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    try {
      // await postData(payload);
      const res = await Service.post("/hospitals", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("The res of post is", res);
    } catch (err) {
      console.log("err while adding hospital detail",err);
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
