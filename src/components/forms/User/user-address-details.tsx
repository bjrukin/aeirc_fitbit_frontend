import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import {  UserFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
import useLocationData from "../../../hooks/useLocationData";
import { useDispatch, useSelector } from "react-redux";
import Service from "../../../setup/Service";
import { toastAlert } from "../../../lib/toastAlert";
import { findLabelValuePair } from "../../../lib/utilis";
interface initValProps {
  tempProvince: any;
  tempDistrict: any;
  permanentAddress: string;
  permanentProvince: any;
  permanentDistrict: any;
  tempAddress: string;
  tempWard: string;
  permanentWard: string;
  permanentmnu_vdc: any;
  tempmnu_vdc: any;
}

interface MedicalPersonAddressDetailFormProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
  fetchData?: any;
}

const UserAddressDetailForm: React.FC<MedicalPersonAddressDetailFormProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
  fetchData,
}) => {
  const formValues = useSelector((state: any) => state.rootReducer?.form);
  console.log("form Data in user  address detail is", formValues);

  const dispatch = useDispatch();
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
    tempAddress: "",
    tempWard: "",
    tempmnu_vdc: "",
    permanentProvince: "",
    permanentDistrict: "",
    permanentAddress: "",
    permanentWard: "",
    permanentmnu_vdc: "",
  };
  const initialValues =
    formValues?.user_address &&
    formValues?.user_address.reduce((acc: any, address: any) => {
      if (address.address_type === "permanent") {
        acc.permanentProvince = address?.province_data?.label
          ? address?.province_data
          : findLabelValuePair(address?.province_data);
        acc.permanentDistrict = address?.district_data?.label
          ? address?.district_data
          : findLabelValuePair(address?.district_data);
        acc.permanentAddress = address.address;
        acc.permanentWard = address.ward_no || "";
        acc.permanentmnu_vdc = address?.mnu_vdc_data?.label
          ? address?.mnu_vdc_data
          : findLabelValuePair(address?.mnu_vdc_data);
      } else if (address.address_type === "temporary") {
        acc.tempProvince = address?.province_data?.label
          ? address?.province_data
          : findLabelValuePair(address?.province_data);
        acc.tempDistrict = address?.district_data?.label
          ? address?.district_data
          : findLabelValuePair(address?.district_data);
        acc.tempAddress = address.address;
        acc.tempWard = address.ward_no || "";
        acc.tempmnu_vdc = address?.mnu_vdc_data?.label
          ? address?.mnu_vdc_data
          : findLabelValuePair(address?.mnu_vdc_data);
      }
      return acc;
    }, initVal);

  console.log("inital val", initVal);

  const {
    selectedProvince: tempProvince,
    selectedDistrict: tempDistrict,
    selectedMnu: tempMnu,
    provinceOptions: tempProvinceOptions,
    districtOptions: tempDistrictOptions,
    municiplaityOptions: tempMuniciplaityOptions,
    handleProvinceChange: handleTempProvinceChange,
    handleDistrictChange: handleTempDistrictChange,
    handleMunicipalityChange: handleTempMunicipalityChange,
  } = useLocationData("");

  const {
    selectedProvince: permanentProvince,
    selectedDistrict: permanentDistrict,
    selectedMnu: permanentMnu,
    provinceOptions: permanentProvinceOptions,
    districtOptions: permanentDistrictOptions,
    municiplaityOptions: permanentMuniciplaityOptions,
    handleProvinceChange: handlePermanentProvinceChange,
    handleDistrictChange: handlePermanentDistrictChange,
    handleMunicipalityChange: handlePermanentMunicipalityChange,
  } = useLocationData("");

  const MedicalPersonAddressDetailFormField = [
    [
      {
        name: "tempProvince",
        type: "select",
        label: "Temporary Province",
        placeholder: "Select Temporary Province",
        required: true,
        options: tempProvinceOptions,
        onChange: handleTempProvinceChange,
      },
      {
        name: "tempDistrict",
        type: "select",
        label: "Temporary District",
        placeholder: "Select Temporary District",
        required: true,
        options: tempDistrictOptions,
        onChange: handleTempDistrictChange,
        value: tempDistrict,
        disabled: !tempProvince,
      },
    ],
    [
      {
        name: "tempmnu_vdc",
        type: "select",
        label: "Municipality/VDC",
        placeholder: "Enter Hospital Ward",
        required: true,
        onChange: handleTempMunicipalityChange,
        options: tempMuniciplaityOptions,
        value: tempMnu,
        disabled: !tempProvince || !tempDistrict,
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
        name: "checkbox",
        type: "checkbox",
        title: "Permanent Address",
        label: "Permananent Same As Temporary Address",
      },
      {
        name: "permanentProvince",
        type: "select",
        label: "Permanent Province",
        placeholder: "Select Permanent Province",
        required: true,
        options: permanentProvinceOptions,
        onChange: handlePermanentProvinceChange,
      },
    ],
    [
      {
        name: "permanentDistrict",
        type: "select",
        label: "Permanent District",
        placeholder: "Select Permanent District",
        required: true,
        options: permanentDistrictOptions,
        onChange: handlePermanentDistrictChange,
        value: permanentDistrict,
        disabled: !permanentProvince,
      },
      {
        name: "permanentmnu_vdc",
        type: "select",
        label: "Municipality/VDC",
        placeholder: "Select Hospital Ward",
        required: true,
        onChange: handlePermanentMunicipalityChange,
        options: permanentMuniciplaityOptions,
        value: permanentMnu,
        disabled: !permanentProvince || !permanentDistrict,
      },
    ],
    [
      {
        name: "permanentAddress",
        type: "input",
        label: "Permanent Address",
        placeholder: "Enter Permanent Address",
        required: true,
      },
      {
        name: "permanentWard",
        type: "input",
        label: "Permanent Ward",
        placeholder: "Enter Permanent Ward",
        required: true,
      },
    ],
  ];
  const handleSubmit = async (
    values: initValProps,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("The submitted values   of medical person are", values);
    const user_address = [];

    // Temporary address object
    const tempAddress = {
      province: values.tempProvince?.value,
      district: values.tempDistrict?.value,
      mnu_vdc: values.tempmnu_vdc?.value,
      address: values.tempAddress,
      ward_no: values.tempWard,
      address_type: "temporary",
    };

    // Permanent address object
    const permananentAddress = {
      province: values.permanentProvince?.value,
      district: values.permanentDistrict?.value,
      mnu_vdc: values.permanentmnu_vdc?.value,
      address: values.permanentAddress,
      ward_no: values.permanentWard,
      address_type: "permanent",
    };

    user_address.push(tempAddress);
    user_address.push(permananentAddress);
    const { email, ...userInfo } = formValues;
    const payload = {
      user_address: user_address,
      email: formValues?.email,
      user_info: { ...userInfo, gender: userInfo?.gender?.value },
      role: "user",
    };
    console.log("The payload is", payload);
    let res;
    try {
      if (formValues?.isEdit) {
        res = await Service.put(`/auth/user/update/${formValues?.id}`, payload);
      } else {
        res = await Service.post(`/auth/user/create`, payload);
      }
      console.log("res of  submit ", res);
      if (onClick) {
        onClick();
        resetForm();
      }
      fetchData();
      toastAlert("success", res?.data?.message);
    } catch (err) {
      console.log("err while adding medical person detail", err);
    }
  };

  return (
    <div className="flex space-x-0 xl:space-x-4 h-[800px] lg:h-[580px] 2xl:h-[700px] overflow-auto  ">
      <Formheader
        title={"Add A New User"}
        currentStep={currentStep}
        data={UserFormStep}
      />
      <DynamicForm
        title={"Address Details"}
        formFields={MedicalPersonAddressDetailFormField}
        formValidation={FORM_VALIDATION}
        onClick={() => setCurrentStep(currentStep - 1)}
        onCrossClick={onClick}
        initialValues={initVal}
        onSubmit={handleSubmit}
        submitButtonText="Create User"
        currentStep={currentStep}
        totalStep={UserFormStep.length}
      />
    </div>
  );
};

export default UserAddressDetailForm;
