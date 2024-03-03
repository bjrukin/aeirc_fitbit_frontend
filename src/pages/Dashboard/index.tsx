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
import PersonalDetailForm from "../../components/forms/MedicalPerson/personal-detail-form";
import ContactDetailForm from "../../components/forms/MedicalPerson/contact-detail";
import MedicalPersonAddressDetailForm from "../../components/forms/MedicalPerson/medical-person-address-detail";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showHospitalModal, setShowHospitalModal] = useState(false);
  const [showHospitalUsersModal, setShowHospitalUsersModal] = useState(false);
  const [currentStep, setCurrentStep] = useState<any>(0);
  console.log("current step is", currentStep);
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

  // const handleShowHospitalModal = () => {
  //   setShowHospitalModal(!showHospitalModal);
  //   setCurrentStep(currentStep - 1);
  // };

  // const handleShowHospitalUserModal = () => {
  //   setShowHospitalUsersModal(!showHospitalUsersModal);
  //   setCurrentStep(currentStep - 1);
  // };
  const toggleModal = (
    modalState: boolean,
    setModalState: any,
    setCurrentStep: any,
  ) => {
    return () => {
      setModalState(!modalState);
      // setCurrentStep(0);
    };
  };

  const handleShowHospitalModal = toggleModal(
    showHospitalModal,
    setShowHospitalModal,
    setCurrentStep,
  );
  const handleShowHospitalUserModal = toggleModal(
    showHospitalUsersModal,
    setShowHospitalUsersModal,
    setCurrentStep,
  );

  const hospitalUserForms = [
    <PersonalDetailForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      onClick={handleShowHospitalUserModal}
    />,
    <ContactDetailForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      onClick={handleShowHospitalUserModal}
    />,
    <MedicalPersonAddressDetailForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      onClick={handleShowHospitalUserModal}
    />,
  ];

  const hospitalForms = [
    <HospitalForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      hospitalDetails={hospitalDetails}
      setHospitalDetails={setHospitalDetails}
      onClick={handleShowHospitalModal}
    />,
    <AdditionalDetailForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      onClick={handleShowHospitalModal}
      hospitalDetails={hospitalDetails}
    />,
  ];

  const modalsConfig = {
    hospitalUsers: {
      showModal: showHospitalUsersModal,
      forms: hospitalUserForms,
    },
    hospital: {
      showModal: showHospitalModal,
      forms: hospitalForms,
    },
  };

  return (
    <DashboardLayout>
      {Object.entries(modalsConfig).map(([key, e]) => {
        console.log("e is", e);
        return (
          e.showModal && (
            <Modal key={key} isOpen={e.showModal}>
              {e.forms[currentStep]}
            </Modal>
          )
        );
      })}
      {isLoading ? (
        <DashboardSkeleton />
      ) : (
        <div className="text-black">
          <div className="flex  items-center justify-between  mb-7">
            <p className="text-2xl font-semibold">Super Admin Dashboard</p>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  icon={<GoPlus size={22} />}
                  className="w-fit p-6 bg-primary-500"
                  text="Create New Item"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <DropdownMenuItem onClick={() => handleShowHospitalModal()}>
                  Create Hospital
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShowHospitalUserModal()}>
                  Create Doctor/Nurse
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex  space-x-8 mt-6">
            {cardData.map((data, index) => (
              <Card
                key={index}
                className="bg-white w-1/4  hover:border-[1px] cursor-pointer hover:border-secondary-200 duration-800 ease-in-out  "
              >
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
