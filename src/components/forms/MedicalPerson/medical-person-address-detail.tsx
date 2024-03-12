import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { MedicalPersonalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
import useLocationData from "../../../hooks/useLocationData";
import { useSelector } from "react-redux";
import Service from "../../../setup/Service";
interface initValProps {
  tempProvince: string;
  tempDistrict: string;
  permanentAddress: string;
  permanentProvince: string;
  permanentDistrict: string;
  tempAddress: string;
  tempWard: string;
  permanentWard: string;
  permanentmnu_vdc: string;
  tempmnu_vdc: string;
}

interface MedicalPersonAddressDetailFormProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
}

const MedicalPersonAddressDetailForm: React.FC<
  MedicalPersonAddressDetailFormProps
> = ({ onClick, currentStep, setCurrentStep }) => {
  const formData = useSelector((state: any) => state.rootReducer?.form);
  console.log("form Data in address detail is", formData);

  const FORM_VALIDATION = Yup.object().shape({
    tempProvince: Yup.mixed().required("Temporary province is required"),
    tempAddress: Yup.mixed().required("Temporary Address is required"),
    tempDistrict: Yup.mixed().required("Temporary district is required"),
    permanentAddress: Yup.string().required("Permanent address is required"),
    permanentProvince: Yup.mixed().required("Permanent province is required"),
    permanentDistrict: Yup.mixed().required("Permanent district is required"),
    tempWard: Yup.mixed().required("Temporary Ward is required"),
    permanentWard: Yup.mixed().required("Permanent Ward is required"),
  });
  const initVal: initValProps = {
    tempProvince: "",
    tempDistrict: "",
    permanentProvince: "",
    permanentDistrict: "",
    tempAddress: "",
    tempWard: "",
    permanentAddress: "",
    permanentWard: "",
    permanentmnu_vdc: "",
    tempmnu_vdc: "",
  };

  const {
    provinceOptions,
    districtOptions,
    selectedDistrict,
    handleProvinceChange,
    selectedProvince,
    handleDistrictChange,
    handleMunicipalityChange,
    municiplaityOptions,
    selectedMnu,
  } = useLocationData();

  const MedicalPersonAddressDetailFormField = [
    [
      {
        name: "tempProvince",
        type: "select",
        label: "Temporary Province",
        placeholder: "Enter Temporary Province",
        required: true,
        options: provinceOptions,
        onChange: handleProvinceChange,
      },
      {
        name: "tempDistrict",
        type: "select",
        label: "Temporary District",
        placeholder: "Enter Temporary District",
        required: true,
        options: districtOptions,
        onChange: handleDistrictChange,
        value: selectedDistrict,
        disabled: !selectedProvince,
      },
    ],
    [
      {
        name: "tempmnu_vdc",
        type: "select",
        label: "Municipality/VDC",
        placeholder: "Enter Hospital Ward",
        required: true,
        onChange: handleMunicipalityChange,
        options: municiplaityOptions,
        value: selectedMnu,
        disabled: !selectedProvince || !selectedDistrict,
      },

      {
        name: "tempAddress",
        type: "input",
        label: "Temporary Address",
        placeholder: "Enter Temporary Address",
        required: true,
      },
    ],
    [
      {
        name: "tempWard",
        type: "input",
        label: "Temporary Ward",
        placeholder: "Enter Temporary Ward",
        required: true,
      },
    ],
    [
      {
        name: "permanentProvince",
        type: "select",
        label: "Permanent Province",
        placeholder: "Enter Permanent Province",
        required: true,
        options: provinceOptions,
        onChange: handleProvinceChange,
      },
      {
        name: "permanentDistrict",
        type: "select",
        label: "Permanent District",
        placeholder: "Enter Permanent District",
        required: true,
        options: districtOptions,
        onChange: handleDistrictChange,
        value: selectedDistrict,
        disabled: !selectedProvince,
      },
    ],
    [
      {
        name: "permanentmnu_vdc",
        type: "select",
        label: "Municipality/VDC",
        placeholder: "Enter Hospital Ward",
        required: true,
        onChange: handleMunicipalityChange,
        options: municiplaityOptions,
        value: selectedMnu,
        disabled: !selectedProvince || !selectedDistrict,
      },
      {
        name: "permanentAddress",
        type: "input",
        label: "Permanent Address",
        placeholder: "Enter Permanent Address",
        required: true,
      },
    ],
    [
      {
        name: "permanentWard",
        type: "input",
        label: "Permanent Ward",
        placeholder: "Enter Permanent Ward",
        required: true,
      },
    ],
  ];
  const handleSubmit = async (values: initValProps) => {
    console.log("The submitted values   of medical person are", values);
    const user_address = [];

    // Temporary address object
    const tempAddress = {
      province: values.tempProvince?.value,
      district: values.tempDistrict?.value,
      mnu_vdc: values.tempmnu_vdc?.value,
      address: values.tempAddress,
      ward: values.tempWard,
      address_type: "temporary",
    };

    // Permanent address object
    const permananentAddress = {
      province: values.permanentProvince?.value,
      district: values.permanentDistrict?.value,
      permanentmnu_vdc: values.permanentmnu_vdc?.value,
      address: values.permanentAddress,
      ward: values.permanentWard,
      address_type: "permanent",
    };

    user_address.push(tempAddress);
    user_address.push(permananentAddress);
    console.log("user add", user_address);
    const payload = {
      user_address: user_address,
      email: formData?.email,
      role: "doctor",
      user_info: {
        first_name: formData?.first_name,
        middle_name: formData?.middle_name && formData?.middle_name,
        last_name: formData?.last_name,
        gender: formData?.gender?.value,
        blood_group: formData?.blood_group?.label,
        date_of_birth: formData?.date_of_birth,
        citizenship_number: formData?.citizenship_number,
        nid_number: formData?.nid_number,
        phone: formData?.phone,
        emergency_contact_number: formData?.emergency_contact_number,
        insurance_number: formData?.insurance_number,
        marital_status: formData?.marital_status,
      },
      medical_staff_info: {
        council_number: formData?.council_number,
        // speciality: formData?.speciality,
        // hospital: formData?.hospital,
        hospital: "sa",
        speciality: "a",
      },
    };
    console.log("The payload is", payload);
    try {
      const res = await Service.post(`/auth/user/create`, payload);
      console.log("hospital res", res);
    } catch (err) {
      console.log("err while adding medical person detail", err);
    }
  };

  return (
    <div className="flex space-x-0 xl:space-x-4 h-[800px] lg:h-[570px] 2xl:h-[700px] overflow-auto  ">
      <Formheader
        title={"Add A New Medical Personal"}
        currentStep={currentStep}
        data={MedicalPersonalFormStep}
      />
      <DynamicForm
        title={"Address Details"}
        formFields={MedicalPersonAddressDetailFormField}
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

export default MedicalPersonAddressDetailForm;
