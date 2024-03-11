import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import DynamicForm from "../../shared/DynamicForm";
import { HospitalFormStep } from "../../../constants";
import Service from "../../../setup/Service";
import { toastAlert } from "../../../lib/toastAlert";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../redux/slice/form/formSlice";
interface initValProps {
  website: string;
  admin_email: string;
  admin_password: string;
  description: string;
  logo: string;
}

interface AdditionalDetailProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
  // hospitalDetails?: any;
  // setHospitalDetails?: any;
  fetchData?: any;
  isEdit?: any;
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
  logo: Yup.mixed().notRequired(),
});

const AdditionalDetailForm: React.FC<AdditionalDetailProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
  // hospitalDetails,
  fetchData,
  // setHospitalDetails,
  isEdit,
}) => {
  const dispatch = useDispatch();
  const formValues: any = useSelector((state: any) => state.rootReducer.form);
  const initVal: initValProps = formValues
    ? formValues
    : {
        website: "",
        admin_email: "",
        admin_password: "",
        logo: "",
        description: "",
      };
  const handleSubmit = async (
    values: initValProps,
    { resetForm }: { resetForm: () => void }
  ) => {
    const payload: any = {
      ...values,
      province: formValues?.province?.value,
      district: formValues?.district?.value,
      mnu_vdc: formValues?.mnu_vdc?.value,
    };
    console.log("The payload are", typeof payload?.logo, payload.logo, payload);
    const formData = new FormData();
    Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
    });
    try {
      let res;
      if (formValues?.isEdit) {
        res = await Service.patch(`/hospitals/${formValues?.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        res = await Service.post("/hospitals", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        resetForm();
      }
      console.log("The res is", res);

      if (onClick) {
        onClick();
        resetForm();
      }
      fetchData();
      toastAlert("success", res?.data?.message);
    } catch (err) {
      toastAlert("error", "Error While Submitting Form");
    }
  };

  return (
    <div className="flex space-x-4  h-[800px] lg:h-[570px] 2xl:h-[700px] overflow-auto">
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
        onClick={() => {
          setCurrentStep(currentStep - 1);
          // dispatch(updateFormData(formValues));
        }}
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
