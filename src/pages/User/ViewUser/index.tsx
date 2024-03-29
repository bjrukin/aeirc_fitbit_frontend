import DashboardLayout from "../../../components/ui/DashboardLayout";
import BreadCrumub from "../../../components/shared/BreadCrum";
import { Drop, Vitals } from "../../../assets/images";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { Button } from "../../../components/shared/Button";
import { UserCard } from "../../../components/shared/UserCard";
import { UserCholesterolCard } from "../../../components/shared/UserCard/userCholesterol";
import UserStepCard from "../../../components/shared/UserCard/userStepCard";
import { SimpleLineChart } from "../../../components/shared/Chart/linechart";
import { HeartBeatCard } from "../../../components/shared/UserCard/heartBeatCard";
import { DashboardSkeleton } from "../../../components/shared/skeleton/dashboardSkeleton";
import NoData from "../../../components/ui/no-result";
import moment from 'moment';

const ViewUser = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, fetchData, loading } = useFetch(`/device/data/${id}`);
  const [deviceData, setDeviceData] = useState<any>(null);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  useEffect(() => {
    if (data) {
      setDeviceData(data?.data);
    }
  }, [data]);


  const cardConfig: any = {
    respiratory_rate_value: {
      displayName: "User Heart Beat",
      component: HeartBeatCard,
      imgSrc: Drop,
    },
    triglyceride_cholesterol_integer: {
      displayName: "TriglyCeridel cholesterol",
      component: UserCholesterolCard,
    },
    high_lipoprotein_cholesterol_integer: {
      displayName: "HDL",
      component: UserCholesterolCard,
    },
    low_lipoprotein_cholesterol_integer: {
      displayName: "LDL",
      component: UserCholesterolCard,
    },
    temperature_value: {
      displayName: "Body Temperature",
      component: UserCard,
      imgSrc: Drop,
    },
    blood_glucose_value: {
      displayName: "Blood Glucose",
      component: UserCard,
      imgSrc: Drop,
    },
    step_value: {
      displayName: "Steps",
      component: UserStepCard,
      imgSrc: Drop,
    },
    blood_sugar_model: {
      displayName: "Blood Sugar",
      component: UserCard,
      imgSrc: Drop,
    },
    blood_ketone_model: {
      displayName: "Blood Ketone",
      component: UserCard,
      imgSrc: Drop,
    },
    uric_acid: {
      displayName: "Uric Acid Value",
      component: UserCard,
      imgSrc: Drop,
    },
  };

  const handleCardClick = (paramType: string) => {
    const params = new URLSearchParams();
    // params.append("param_type",paramType );
    // params.append("start_date", moment().subtract(1, 'days').format('YYYY-MM-DD'));
    navigate(`/users/${id}/${paramType}`);
  };
  const renderUserCard = (paramType: string,val:any) => {
    const userData =
      deviceData?.latest_data &&
      deviceData?.latest_data?.find((item: any) => item.param_type === paramType);
    if (userData && cardConfig[paramType]) {
      const CardComponent = cardConfig[paramType].component;
      return (
        <div onClick={() => handleCardClick(paramType)}>
          {" "}
          <CardComponent
            paramName={cardConfig[paramType].displayName}
            paramValue={userData.param_value}
            timestamp={userData.data_received_timestamp}
            imgSrc={cardConfig[paramType].imgSrc}
            dataValue={val}
          />
        </div>
      );
    }
    return null;
  };

  console.log("The device data is", deviceData);
  return (
    <DashboardLayout>
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <>
          {deviceData?.latest_data?.length > 0 ? (
            <div>
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <BreadCrumub path="" title={"User"} subTitle={"User Profile"} />
                    <div className="flex items-center space-x-3 mt-1">
                      {" "}
                      <div className="text-xl font-semibold">
                        User Vital Metrics
                      </div>
                      <img
                        src={Vitals}
                        className="w-[18px] h-[18px]"
                        alt="vitals"
                      />
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

                <div className=" mt-7 flex flex-col xl:flex-row justify-between gap-4 h-fit ">
                  <div className=" w-full xl:w-2/3">
                    {renderUserCard("respiratory_rate_value",deviceData?.spO2_level)}
                  </div>
                  <div className="w-full xl:w-1/3 bg-[white] border-[1px] border-tertiary-750  rounded-lg px-4 py-6 ">
                    <div className=" flex space-x-3 items-center text-base text-tertiary-950 font-semibold">
                      <img src={Drop} alt="drop" />
                      <p>Cholesterol Levels</p>
                    </div>
                    <div className="mt-[30px] flex flex-row xl:flex-col  gap-4 xl:gap-0 xl:space-y-2">
                      {renderUserCard("triglyceride_cholesterol_integer","")}
                      {renderUserCard("low_lipoprotein_cholesterol_integer","")}
                      {renderUserCard("high_lipoprotein_cholesterol_integer","")}
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex  flex-col-reverse lg:flex-row gap-4">
                  <div className="flex flex-col space-y-3">
                    <div className=" flex space-x-4">
                      {renderUserCard("temperature_value","")}
                      {renderUserCard("blood_glucose_value","")}
                    </div>
                    {renderUserCard("step_value","")}
                    <div className="flex space-x-4">
                      {renderUserCard("blood_ketone_model","")}
                      {renderUserCard("blood_sugar_model","")}
                    </div>
                    {renderUserCard("uric_acid","")}
                  </div>
                  <div className="flex-1">
                    <div className=" p-6  border-[1px] border-tertiary-750 bg-white  rounded-lg w-full">
                      <div className="flex space-x-4 items-center">
                        <img src={Drop} alt="drop" className="w-8 h-8 " />
                        <p className="font-semibold text-tertiary-950 text-base ">
                          Total Sleep Data
                        </p>
                      </div>
                      <div className="pt-[35px]">
                        <p className="font-semibold text-xl text-black">
                          8 Hours 12 min
                        </p>
                        <p className="font-bold text-lg text-text-green">
                          Normal Sleep
                        </p>
                        <p className="font-semibold text-lg text-tertiary-950">
                          Measured 2 Hour Earlier
                        </p>
                      </div>
                      <div className="mt-3">
                        <SimpleLineChart dataValue={deviceData?.spO2_value} variant={"secondary"} />
                      </div>
                    </div>
                    <div className="mt-4 p-6  border-[1px] border-tertiary-750 bg-white  rounded-lg w-full">
                      <div className="flex space-x-4 items-center">
                        <img src={Drop} alt="drop" className="w-8 h-8 " />
                        <p className="font-semibold text-tertiary-950 text-base ">
                          Blood Oxygen{" "}
                        </p>
                      </div>
                      <div className="pt-[35px]">
                        <p className="font-semibold text-xl text-black">
                          90 KPa
                        </p>
                        <p className="font-bold text-lg text-text-green">
                          Normal
                        </p>
                        <p className="font-semibold text-lg text-tertiary-950">
                          Measured 5 Minute Ago
                        </p>
                      </div>
                      <div className="mt-3">
                        <SimpleLineChart dataValue={[]} variant={"secondary"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <NoData />
          )}
        </>
      )}
    </DashboardLayout>
  );
};

export default ViewUser;
