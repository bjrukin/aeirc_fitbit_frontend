import { useState } from "react";
import { Hospital, Person, Sethescope, Watch } from "../../assets/images";
import DashboardLayout from "../../components/ui/DashboardLayout";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { DashboardSkeleton } from "../../components/shared/skeleton/dashboardSkeleton";
import { Button } from "../../components/shared/Button";
import { IoFilterOutline } from "react-icons/io5";
import { PatientColumn } from "../../components/columns/dashboard-column";
import Table from "../../components/ui/table";
import { GoPlus } from "react-icons/go";
import Modal from "../../components/shared/Modal";
import HospitalForm from "../../components/forms/Hospital/hospital-form";
import AdditionalDetailForm from "../../components/forms/Hospital/additional-detail-form";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showHospitalModal, setShowHospitalModal] = useState(false);
  const [showUsersModal, setShowUsersModal] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [hospitalDetails, setHospitalDetails] = useState<any>([]);
  const cardData = [
    {
      title: "Hospital Count",
      value: "95%",
      image: Hospital,
      className: "absolute ml-[10px] mt-[10px] h-5 w-5",
    },
    {
      title: "Total Device Count",
      value: "95%",
      image: Watch,
      className: "absolute ml-[11px] mt-2 h-[22px] w-4",
    },
    {
      title: "Active User's Count",
      value: "95%",
      image: Person,
      className: "absolute ml-2 mt-3 h-[14px] w-[22px]",
    },
    {
      title: "Medical Personal",
      value: "95%",
      image: Sethescope,
      className: " absolute ml-3 mt-3 h-[18px] w-4",
    },
  ];

  const handleShowHospitalModal = () => {
    setShowHospitalModal(!showHospitalModal);
    setCurrentStep(0);
  };

  return (
    <DashboardLayout>
      {showHospitalModal && (
        <Modal isOpen={showHospitalModal}>
          {currentStep == 0 ? (
            <HospitalForm
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              hospitalDetails={hospitalDetails}
              setHospitalDetails={setHospitalDetails}
              onClick={handleShowHospitalModal}
            />
          ) : (
            <AdditionalDetailForm
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              onClick={handleShowHospitalModal}
            />
          )}
        </Modal>
      )}
      {isLoading ? (
        <DashboardSkeleton />
      ) : (
        <div className="text-black">
          <div className="flex  items-center justify-between  mb-7">
            <p className="text-2xl font-semibold">Super Admin Dashboard</p>
            <Button
              onClick={handleShowHospitalModal}
              icon={<GoPlus size={22} />}
              className="w-fit p-6 bg-primary-500"
              text="Create New Item"
            />
          </div>
          <div className="flex  space-x-8 mt-6">
            {cardData.map((data, index) => (
              <Card key={index} className="bg-white w-1/4 border-none ">
                <CardHeader>
                  <CardTitle className=" flex  items-center  space-x-2">
                    <div className="bg-secondary-200 h-10 w-10 rounded-full">
                      <img
                        src={data?.image}
                        alt="icon"
                        className={`${data?.className} `}
                      />
                    </div>
                    <span className="text-black  text-xl font-semibold">
                      {data.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <div>
                    <p className=" font-bold text-2xl">{data.value}</p>
                    <p className=" cursor-pointer text-primary-850 hover:text-secondary-400 text-xl mt-1 font-semibold">
                      Click For Details
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex  items-center justify-between  my-7">
            <p className="text-2xl font-semibold">Hospital List</p>
            <Button
              icon={<IoFilterOutline size={22} />}
              className="w-fit p-6"
              variant="secondary"
              text="Filter Table"
            />
          </div>
          <div>
            <Table
              pagination={true}
              tableColumn={PatientColumn}
              tableData={[]}
            />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
