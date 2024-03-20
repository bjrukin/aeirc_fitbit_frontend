import DashboardLayout from "../../../components/ui/DashboardLayout";
import BreadCrumub from "../../../components/shared/BreadCrum";
import { Drop, Vitals } from "../../../assets/images";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { Button } from "../../../components/shared/Button";

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
      <div className="flex items-center justify-between">
        <div>
          <BreadCrumub title={"User"} subTitle={"User Profile"} />
          <div className="flex items-center space-x-3 mt-1">
            {" "}
            <div className="text-xl font-semibold">User Vital Metrics</div>
            <img src={Vitals} className="w-[18px] h-[18px]" alt="vitals" />
          </div>
        </div>
        <div>
          <Button
            className="w-fit p-4"
            variant="secondary"
            text="Download Report"
          />
        </div>
      </div>
      <div className="mt-7 flex justify-between space-x-4 ">
        <div className=" bg-[red]  border-[1px] border-tertiary-750  rounded-lg w-2/3 ">
          sd
        </div>
        <div className="w-1/3 bg-[white] border-[1px] border-tertiary-750  rounded-lg px-4 py-6">
          <div className=" flex space-x-3 items-center text-base text-tertiary-950 font-semibold">
            <img src={Drop} alt="drop" />
            <p>Cholesterol Levels</p>
          </div>
          <div className="mt-[30px] flex flex-col space-y-2">
            <div className="flex flex-col space-y-3 border-[1px] border-tertiary-750  rounded-lg p-4 ">
              <p className="font-bold text-xl">1208 pts</p>
              <p className="font-bold text-lg text-text-green">
                Total Cholesterol
              </p>
              <p className="font-semibold text-lg text-tertiary-950">
                Measured 5 Minutes Ago
              </p>
            </div>
            <div className="flex flex-col space-y-3 border-[1px] border-tertiary-750  rounded-lg p-4 ">
              <p className="font-bold text-xl">1208 pts</p>
              <p className="font-bold text-lg text-text-green">
                Total Cholesterol
              </p>
              <p className="font-semibold text-lg text-tertiary-950">
                Measured 5 Minutes Ago
              </p>
            </div>
            <div className="flex flex-col space-y-3 border-[1px] border-tertiary-750  rounded-lg p-4 ">
              <p className="font-bold text-xl">1208 pts</p>
              <p className="font-bold text-lg text-text-green">
                Total Cholesterol
              </p>
              <p className="font-semibold text-lg text-tertiary-950">
                Measured 5 Minutes Ago
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex space-x-4">
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-4">
            <div className="w-fit flex flex-col space-y-3 border-[1px] border-tertiary-750  rounded-lg p-6 ">
              <img src={Drop} alt="drop" className="w-8 h-8" />
              <p className="font-semibold text-tertiary-950  text-base mt-4">
                Body Temperature
              </p>

              <div className="pt-[50px]">
                <p className="font-semibold text-xl text-black">100F</p>
                <p className="font-semibold text-lg text-tertiary-950">
                  Measured 5 Minutes Ago
                </p>
              </div>
            </div>
            <div className="w-fit flex flex-col space-y-3 border-[1px] border-tertiary-750  rounded-lg p-6 ">
              <img src={Drop} alt="drop" className="w-8 h-8" />
              <p className="font-semibold text-tertiary-950  text-base mt-4">
                Body Temperature
              </p>

              <div className="pt-[50px]">
                <p className="font-semibold text-xl text-black">100F</p>
                <p className="font-semibold text-lg text-tertiary-950">
                  Measured 5 Minutes Ago
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-3 border-[1px] border-tertiary-750  rounded-lg p-6 ">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <img src={Drop} alt="drop" className="" />
                <p className="font-semibold  text-tertiary-950  text-base">
                  Steps,Distance,Calorie
                </p>
              </div>
              <p>Today</p>
            </div>

            <div className="pt-[50px]">
              <p className="font-semibold text-xl text-black">
                5000 steps | 2 km | 1200kcal
              </p>
              <p className="font-semibold text-lg text-tertiary-950">
                Measured 5 Minutes Ago
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-fit flex flex-col space-y-3 border-[1px] border-tertiary-750  rounded-lg p-6 ">
              <img src={Drop} alt="drop" className="w-8 h-8" />
              <p className="font-semibold text-tertiary-950  text-base mt-4">
                Body Temperature
              </p>

              <div className="pt-[50px]">
                <p className="font-semibold text-xl text-black">100F</p>
                <p className="font-semibold text-lg text-tertiary-950">
                  Measured 5 Minutes Ago
                </p>
              </div>
            </div>
            <div className="w-fit flex flex-col space-y-3 border-[1px] border-tertiary-750  rounded-lg p-6 ">
              <img src={Drop} alt="drop" className="w-8 h-8" />
              <p className="font-semibold text-tertiary-950  text-base mt-4">
                Body Temperature
              </p>

              <div className="pt-[50px]">
                <p className="font-semibold text-xl text-black">100F</p>
                <p className="font-semibold text-lg text-tertiary-950">
                  Measured 5 Minutes Ago
                </p>
              </div>
            </div>
          </div>
          <div className="w-fit flex flex-col space-y-3 border-[1px] border-tertiary-750  rounded-lg p-6 ">
            <img src={Drop} alt="drop" className="w-8 h-8" />
            <p className="font-semibold text-tertiary-950  text-base mt-4">
              Body Temperature
            </p>

            <div className="pt-[50px]">
              <p className="font-semibold text-xl text-black">100F</p>
              <p className="font-semibold text-lg text-tertiary-950">
                Measured 5 Minutes Ago
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[red] flex-1">sd</div>
      </div>
    </DashboardLayout>
  );
};

export default ViewUser;
