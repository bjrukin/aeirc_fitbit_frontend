import { useState } from "react";
import useFetch from "./useFetch";

const useLocationData = () => {
  const [selectedProvince, setSelectedProvince] = useState<any>(null);
  console.log("selected province", selectedProvince);
  const [selectedDistrict, setSelectedDistrict] = useState<any>(null);

  const { data: provinceData } = useFetch("/provinces");
  const provinceOptions = provinceData?.map((province: any) => ({
    label: province.name,
    value: province?.id,
  }));

  const { data: districtData } = useFetch(
    `/districts?province=${selectedProvince?.value}`
  );
  console.log("district data", districtData);
  const districtOptions = districtData?.map((district: any) => ({
    label: district.name,
    value: district?.id,
  }));

  const handleProvinceChange = (value: any) => {
    setSelectedProvince(value);
  };

  const handleDistrictChange = (value: any) => {
    setSelectedDistrict(value);
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
    provinceOptions,
    districtOptions,
    municiplaityOptions,
    handleProvinceChange,
    handleDistrictChange,
  };
};

export default useLocationData;
