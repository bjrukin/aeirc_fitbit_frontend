import { ChevronLeft, ChevronRight } from "lucide-react";
import { Drop, Vitals } from "../../../../assets/images";
import BreadCrumub from "../../../../components/shared/BreadCrum";
import { Button } from "../../../../components/shared/Button";
import { SimpleLineChart } from "../../../../components/shared/Chart/linechart";
import { getTimeInMinutes } from "../../../../components/shared/UserCard";
import DashboardLayout from "../../../../components/ui/DashboardLayout";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

const SingleParamDetail = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <BreadCrumub title={"User Details"} subTitle={"Data History"} />
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
      <div className="mt-5 bg-white w-fit rounded-lg p-4">
        <ToggleGroup
          //   name={field?.name}
          type="single"
          className="flex justify-start space-x-4"
          //   value={field.value}
          //   onValueChange={(value) => {
          //     setFieldValue(field.name, value);
          //     console.log("changed vaue", value);
          //   }}
        >
          <ToggleGroupItem
            className="border-[1px] border-black text-black px-5 py-1 text-base"
            value={"daily"}
          >
            Daily Report
          </ToggleGroupItem>
          <ToggleGroupItem
            className="border-[1px] border-black text-black px-5 py-1 text-base"
            value={"weekly"}
          >
            Weekly Report
          </ToggleGroupItem>
          <ToggleGroupItem
            className="border-[1px] border-black text-black px-5 py-1 text-base"
            value={"monthly"}
          >
            Monthly Report
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="mt-5">
        <div className="cursor-pointer p-6   hover:border-[1px] hover:border-primary-500 border-[1px] border-tertiary-750  rounded-lg bg-white ">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4 items-center">
              <img src={Drop} alt="drop" className="w-8 h-8 " />
              <p className="font-semibold text-tertiary-950 text-base ">
                User Heart Beat
              </p>
            </div>
            <div className=" flex items-center justify-between rounded-lg bg-primary-150 px-4 py-2 w-[383px]">
              <div className="flex items-center space-x-4">
                <img src={Drop} alt="" />
                <p className="text-base text-black semi-bold">
                  Your Heart Rate Is Normal{" "}
                </p>
              </div>
              <p className="text-secondary-150 font-semibold">74 BPM</p>
            </div>
          </div>
          <div className="pt-[54px] mb-[26px] flex items-center space-x-20">
            <div>
              <p className="font-semibold text-xl text-black"> 12 BPM</p>
              <p className="font-semibold text-lg text-black">
                {" "}
                Average Heart Beat
              </p>
              <p className="font-semibold text-lg text-tertiary-950">
                Measured 5 Min ago
                {/* Measured {getTimeInMinutes(timestamp)} Hours Ago */}
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl text-black"> 12 BPM</p>
              <p className="font-semibold text-lg text-black">
                {" "}
                Lowest Heart Beat
              </p>
              <p className="font-semibold text-lg text-tertiary-950">
                Measured 5 Min ago
                {/* Measured {getTimeInMinutes(timestamp)} Hours Ago */}
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl text-black"> 12 BPM</p>
              <p className="font-semibold text-lg text-black">
                {" "}
                Highest Heart Beat
              </p>
              <p className="font-semibold text-lg text-tertiary-950">
                Measured 5 Min ago
                {/* Measured {getTimeInMinutes(timestamp)} Hours Ago */}
              </p>
            </div>
          </div>
          <div className="mt-3">
            <SimpleLineChart variant={"primary"} />
          </div>
        </div>
      </div>

      <div className="flex w-full  space-x-8 mt-4">
        <div className="p-4 bg-white w-1/2 border-[1px] border-tertiary-750  rounded-lg bg-white">
          sd
        </div>
        <div className="p-4 bg-white w-1/2 border-[1px] border-tertiary-750  rounded-lg bg-white">
          <div className="flex space-x-4 items-center mb-5">
            <img src={Drop} alt="" />
            <p className="text-black text-base font-semibold">Other Options</p>
          </div>
          <div className="rounded-lg bg-[#F4F4F4] p-4 mb-4">
            {" "}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={Drop} alt="" />
                <p className="text-black text-base font-semibold">
                  Health Setting
                </p>
              </div>
              <ChevronRight />
            </div>
          </div>
          <div className="rounded-lg bg-[#F4F4F4] p-4 ">
            {" "}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={Drop} alt="" />
                <p className="text-black text-base font-semibold">
                  Knowledge Data Column
                </p>
              </div>
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SingleParamDetail;
