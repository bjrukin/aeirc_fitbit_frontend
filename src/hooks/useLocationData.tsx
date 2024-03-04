import { useState } from 'react';
import useFetch from './useFetch';

const useLocationData = () => {
  const [selectedProvince, setSelectedProvince] = useState<any>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<any>(null);

  const { data: provinceData } = useFetch("/provinces");
  const provinceOptions = provinceData?.map((province) => ({
    label: province.name,
    value: province?.id,
  }));

  const { data: districtData } = useFetch(`/districts?province=${selectedProvince?.value}`);
  const districtOptions = districtData?.map((district) => ({
    label: district.name,
    value: district?.id,
  }));

  const handleProvinceChange = (value: any) => {
    setSelectedProvince(value);
  };

  const handleDistrictChange = (value: any) => {
    setSelectedDistrict(value);
  };

  const { data: municipalityData } = useFetch(`/mnu-vdcs?district=${selectedDistrict?.value}`);
  const municiplaityOptions = municipalityData?.map((mnu) => ({
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