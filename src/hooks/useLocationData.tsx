// import { useState } from "react";
// import useFetch from "./useFetch";

// const useLocationData = () => {
//   const [selectedProvince, setSelectedProvince] = useState<any>(null);
//   const [selectedDistrict, setSelectedDistrict] = useState<any>(null);
//   const [selectedMnu, setSelectedMnu] = useState<any>(null);

//   const { data: provinceData } = useFetch("/provinces");
//   const provinceOptions = provinceData?.map((province: any) => ({
//     label: province.name,
//     value: province?.id,
//   }));

//   const { data: districtData } = useFetch(
//     `/districts?province=${selectedProvince?.value}`
//   );
//   const districtOptions = districtData?.map((district: any) => ({
//     label: district.name,
//     value: district?.id,
//   }));

//   const handleProvinceChange = (value: any) => {
//     setSelectedProvince(value);
//     setSelectedDistrict("");
//     setSelectedMnu("");
//   };

//   const handleDistrictChange = (value: any) => {
//     setSelectedDistrict(value);
//   };

//   const handleMunicipalityChange = (value: any) => {
//     setSelectedMnu(value);
//   };

//   const { data: municipalityData } = useFetch(
//     `/mnu-vdcs?district=${selectedDistrict?.value}`
//   );
//   const municiplaityOptions = municipalityData?.map((mnu: any) => ({
//     label: mnu.name,
//     value: mnu?.id,
//   }));

//   return {
//     selectedProvince,
//     selectedDistrict,
//     provinceOptions,
//     districtOptions,
//     municiplaityOptions,
//     handleProvinceChange,
//     handleDistrictChange,
//     handleMunicipalityChange,
//     selectedMnu,
//   };
// };

// export default useLocationData;

import { useState } from "react";
import useFetch from "./useFetch";

const useLocationData = (initialState: any) => {
  const [selectedProvince, setSelectedProvince] = useState<any>(initialState);
  const [selectedDistrict, setSelectedDistrict] = useState<any>(initialState);
  const [selectedMnu, setSelectedMnu] = useState<any>(initialState);

  const { data: provinceData } = useFetch("/provinces");
  const provinceOptions = provinceData?.map((province: any) => ({
    label: province.name,
    value: province?.id,
  }));

  const { data: districtData } = useFetch(
    `/districts?province=${selectedProvince?.value}`
  );
  const districtOptions = districtData?.map((district: any) => ({
    label: district.name,
    value: district?.id,
  }));

  const handleProvinceChange = (value: any) => {
    setSelectedProvince(value);
    setSelectedDistrict("");
    setSelectedMnu("");
  };

  const handleDistrictChange = (value: any) => {
    setSelectedDistrict(value);
  };

  const handleMunicipalityChange = (value: any) => {
    setSelectedMnu(value);
  };

  const { data: municipalityData } = useFetch(
    `/mnu-vdcs?district=${selectedDistrict?.value}`
  );
  const municiplaityOptions = municipalityData?.map((mnu: any) => ({
    label: mnu.name,
    value: mnu?.id,
  }));

  return {
    selectedProvince,
    selectedDistrict,
    selectedMnu,
    provinceOptions,
    districtOptions,
    municiplaityOptions,
    handleProvinceChange,
    handleDistrictChange,
    handleMunicipalityChange,
  };
};

export default useLocationData;
