import * as Yup from "yup";
import Formheader from "../../shared/FormHeader";
import { HospitalFormStep } from "../../../constants";
import DynamicForm from "../../shared/DynamicForm";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import { findOptionValue } from "../../../lib/utilis";
import useLocationData from "../../../hooks/useLocationData";
interface initValProps {
  name: string;
  address: string;
  phone: number | null;
  email: string;
  province: string;
  district: string;
  mnu_vdc: string;
}

interface HospitalFormProps {
  onClick?: any;
  currentStep?: any;
  setCurrentStep?: any;
  hospitalDetails?: any;
  setHospitalDetails?: any;
}

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .min(3, "*Name must be at least 3 character")
    .required("*Name is required"),
  phone: Yup.number()
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
  mnu_vdc: Yup.string().required("*Municipality/VDC is required"),
});
const HospitalForm: React.FC<HospitalFormProps> = ({
  onClick,
  currentStep,
  setCurrentStep,
  setHospitalDetails,
}) => {
  const initVal: initValProps = {
    name: "",
    phone: null,
    mnu_vdc: "",
    email: "",
    province: "",
    district: "",
    address: "",
  };

  const {
    provinceOptions,
    districtOptions,
    municiplaityOptions,
    handleProvinceChange,
    handleDistrictChange,
  } = useLocationData();

  
  const HospitalFormField = [
    [
      {
        name: "name",
        type: "input",
        label: "Name Of Hospital",
        placeholder: "Enter The Name Of Hospital",
        required: true,
        inputType: "text",
      },
      {
        name: "phone",
        type: "input",
        label: "Contact Number",
        placeholder: "+977 | Enter The Contact Number",
        required: true,
        inputType: "number",
      },
    ],
    [
      {
        name: "email",
        type: "input",
        label: "Email Address",
        placeholder: "Enter Email Address",
        required: true,
        inputType: "text",
      },
      {
        name: "province",
        type: "select",
        label: "Hospital Province",
        placeholder: "Select Hospital Province",
        required: true,
        options: provinceOptions,
        onChange: handleProvinceChange,
      },
    ],
    [
      {
        name: "district",
        type: "select",
        label: "Hospital District",
        placeholder: "Select Hospital District",
        required: true,
        options: districtOptions,
        onChange: handleDistrictChange,
      },
      {
        name: "mnu_vdc",
        type: "select",
        label: "Municipality/VDC",
        placeholder: "Enter Hospital Ward",
        required: true,
        options: municiplaityOptions,
      },
    ],
    [
      {
        name: "address",
        type: "input",
        label: "Hospital Address",
        placeholder: "Enter Hospital Address",
        required: true,
        inputType: "text",
      },
    ],
  ];

  const handleSubmit = async (values: initValProps) => {
    console.log("the values are", values);
    try {
      const province = findOptionValue(provinceOptions, values?.province);
      const district = findOptionValue(districtOptions, values?.district);
      const mnu_vdc = findOptionValue(municiplaityOptions, values?.mnu_vdc);
      const payload = {
        ...values,
        province,
        district,
        mnu_vdc,
      };
      setHospitalDetails(payload);
      setCurrentStep(currentStep + 1);
    } catch (err) {
      console.log("err while adding hospital detail");
    }
  };

  return (
    <div className="flex space-x-4 h-full  ">
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
