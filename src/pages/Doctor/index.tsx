import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import DashboardLayout from "../../components/ui/DashboardLayout";
import Heading from "../../components/ui/heading";
import { SimpleLineChart } from "../../components/shared/Chart/linechart";
import { Button } from "../../components/shared/Button";
import DisplayCard from "../../components/shared/CardComponent/display-card";

const Doctor = () => {
  const cardData = [
    {
      id: 1,
      title: "Top Hospital Count",
      number: 2000,
      increase: 20,
      timeFrame: "In Past Months Week",
      bgColor: "white",
    },
    {
      id: 1,
      title: "Top Hospital Count",
      number: 2000,
      increase: 20,
      timeFrame: "In Past Months Week",
      bgColor: "white",
    },
  ];
  return (
    <DashboardLayout>
      <Heading
        mainText={"Doctor Details"}
        btnText={"Add Doctor"}
        onClick={() => {
          //   setHospitalDetails(null);
          //   setEditData(null);
          //   handleShowHospitalModal();
        }}
      />
      <div className="xl:flex space-x-0 mt-5">
        <div className="rounded p-[22px] bg-white xl:w-[100%]  mr-4 xl:mr-8">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold mb-6">
              Doctor Visualization
            </div>
            <Button
              variant={"secondary"}
              className="w-fit p-5"
              text="View Details"
            />
          </div>
          <div className="flex space-x-14">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold  text-tertiary-10">
                  Total Doctors
                </p>
              </div>
              <div className="mt-2">
                <div className="text-[#606060] text-2xl font-bold">2000</div>
                <p className=" mt-2 flex  items-center space-x-4 text-tertiary-550 text-base  rounded-[10px] w-fit  font-semibold">
                  20%{" "}
                  <span>
                    <IoMdArrowUp size={20} />
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold  text-tertiary-10">
                  New Doctors This Month
                </p>
              </div>
              <div className="mt-2">
                <div className="text-[#606060] text-2xl font-bold">2000</div>
                <p className=" mt-2 flex  items-center space-x-4 text-warning text-base  rounded-[10px] w-fit  font-semibold">
                  20%{" "}
                  <span>
                    <IoMdArrowDown size={20} />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <SimpleLineChart />
          </div>
        </div>
        <div className="flex flex-col space-x-4">
          {cardData?.map((item) => {
            return (
              <>
                <DisplayCard
                  key={item?.id}
                  title={item.title}
                  number={item?.number}
                  timeFrame={item?.timeFrame}
                  increase={item?.increase}
                  bgColor={item?.bgColor}
                />
              </>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Doctor;
