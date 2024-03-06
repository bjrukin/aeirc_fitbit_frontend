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
import useFetch from "../../hooks/useFetch";
import { CardComponent } from "../../components/shared/CardComponent";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showHospitalModal, setShowHospitalModal] = useState(false);
  const [showHospitalUsersModal, setShowHospitalUsersModal] = useState(false);
  const [currentStep, setCurrentStep] = useState<any>(0);
  const [hospitalDetails, setHospitalDetails] = useState<any>([]);

  const toggleModal = (
    modalState: boolean,
    setModalState: any,
    setCurrentStep: any
  ) => {
    return () => {
      setModalState(!modalState);
      setCurrentStep(0);
    };
  };

  const handleShowHospitalModal = toggleModal(
    showHospitalModal,
    setShowHospitalModal,
    setCurrentStep
  );
  const handleShowHospitalUserModal = toggleModal(
    showHospitalUsersModal,
    setShowHospitalUsersModal,
    setCurrentStep
  );
  const {
    data: hospitalData,
    error,
    loading,
    fetchData,
  }: any = useFetch("/hospitals");

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
      fetchData={fetchData}
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
        <div className="text-black ">
          <div className="flex  items-center justify-between  mb-7">
            <div>
              <p className="text-xl lg:text-2xl font-semibold ">
                Patient List Summary
              </p>
              <p className="text-base text-tertiary-10 mt-1 text-sm font-semibold xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing eli
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  icon={<GoPlus size={26} />}
                  className="w-fit p-4 xl:p-6 bg-primary-500"
                  text="Create New Item"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" w-[170px] mr-5 xl:mr-0  xl:w-[200px]">
                <DropdownMenuItem onClick={() => handleShowHospitalModal()}>
                  Create Hospital
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShowHospitalUserModal()}>
                  Create Doctor/Nurse
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="rounded p-[22px] bg-white">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold ">
                Total User's Throughout Last Week
              </p>
              <Button
                variant={"secondary"}
                className="w-fit p-6"
                text="View Details"
              />
            </div>
            <div className="mt-2">
              <div className="flex items-center space-x-3">
                <div className="text-[#606060] text-2xl font-bold">2000</div>
                <p className="text-tertiary-550 text-base bg-[#B7FFB6] rounded-[10px] w-fit p-2">20%</p>
              </div>
              <p className="text-tertiary-10 mt-4 text-base">
                This means that revenue generated during the current week (20%)
                higher than past week
              </p>
            </div>
          </div>

          <div className="rounded p-[22px] bg-white mt-6">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold ">
                Other Hospital And Patient Data
              </p>
              <Button
                variant={"secondary"}
                className="w-fit p-6"
                text="Last Week"
              />
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="w-full flex flex-wrap justify-between">
                <CardComponent
                  bgColor="#F3F3F3"
                  textColor="black"
                  iconSrc={Hospital}
                  title="Total Hospital"
                  value="2000"
                  increase="20"
                />
                <CardComponent
                  bgColor="blue"
                  textColor="white"
                  iconSrc={Hospital}
                  title="Total Hospital"
                  value="2000"
                  increase="20"
                />
                <CardComponent
                  bgColor="#F3F3F3"
                  textColor="black"
                  title="Total Hospital"
                  value="2000"
                  increase="20"
                  isFullWidth
                  chart="asd"
                ></CardComponent>
              </div>
            </div>
          </div>

          {/* <div className="flex  items-center justify-between  my-7">
            <p className="text-2xl font-semibold">
              Hospital List ({hospitalData?.data?.count})
            </p>
            <Button
              icon={<IoFilterOutline size={22} />}
              className="w-fit p-6"
              variant="secondary"
              text="Filter Table"
            />
          </div> */}
          {/* <div>
            <Table
              pagination={true}
              tableColumn={HospitalColumn(fetchData)}
              tableData={hospitalData?.data?.results}
            />
          </div> */}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
