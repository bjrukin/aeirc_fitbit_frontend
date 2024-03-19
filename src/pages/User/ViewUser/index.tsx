import DashboardLayout from "../../../components/ui/DashboardLayout";
import BreadCrumub from "../../../components/shared/BreadCrum";
import { Vitals } from "../../../assets/images";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const ViewUser = () => {
  const { id } = useParams();
  const { data, fetchData, error, loading } = useFetch(`/device/data/${id}`);
  console.log("The data is", data);
  const [deviceData, setDeviceData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  useEffect(() => {
    if (data) {
      setDeviceData(data);
    }
  }, [data]);

  console.log("The device data is", deviceData);
  return (
    <DashboardLayout>
      <BreadCrumub title={"User"} subTitle={"View User"} />
      <div className="flex items-center space-x-3 mt-1">
        {" "}
        <div className="text-xl font-semibold">User Vital Metrics</div>
        <img src={Vitals} className="w-[18px] h-[18px]" alt="vitals" />
      </div>
      <div className="mt-7 flex justify-between space-x-4">
        <div className=" bg-[white] rounded-lg w-2/3 ">sd</div>
        <div className="w-1/3 bg-[white] rounded-lg px-4 py-6">
            sad
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ViewUser;
