import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import DashboardLayout from "../../components/ui/DashboardLayout";
import Heading from "../../components/ui/heading";
import { SimpleLineChart } from "../../components/shared/Chart/linechart";
import { Button } from "../../components/shared/Button";
import DisplayCard from "../../components/shared/CardComponent/display-card";
import PersonalDetailForm from "../../components/forms/MedicalPerson/personal-detail-form";
import { useState } from "react";
import Modal from "../../components/shared/Modal";
import ContactDetailForm from "../../components/forms/MedicalPerson/contact-detail";
import MedicalPersonAddressDetailForm from "../../components/forms/MedicalPerson/medical-person-address-detail";
import { useDispatch } from "react-redux";
import {
  resetFormData,
  updateEditData,
} from "../../redux/slice/form/formSlice";
import useFetch from "../../hooks/useFetch";
import { DataTable } from "../../components/ui/data-table";
import CrudIcon from "../../components/shared/CrudIcon";
import { MdOutlineModeEdit } from "react-icons/md";

const Doctor = () => {
  const dispatch = useDispatch();

  const [showUserModal, setShowUserModal] = useState(false);
  const [currentStep, setCurrentStep] = useState<any>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditData = (data: any) => {
    console.log("The edit data are", data);
    dispatch(updateEditData(data));
    setEditId(data?.id);
    setEditData(data);
    setIsEdit(true);
    handleShowUserModal();
  };

  const {
    data: doctorsData,
    error,
    fetchData,
    loading,
  } = useFetch(`/auth/users/list?page=${currentPage}`);
  console.log("The doctors data latest are", doctorsData);
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

  const DoctorsColumn = [
    {
      accessorKey: "",
      header: "S.N.",
      cell: ({ row }: { row: any }) => {
        return <p>{row.index + 1}</p>;
      },
    },
    {
      accessorKey: "",
      header: "Full Name",
      cell: ({ row }: { row: any }) => {
        return (
          <p>
            {row.original?.user_info?.first_name}{" "}
            {row.original?.user_info?.middle_name}{" "}
            {row.original?.user_info?.last_name}
          </p>
        );
      },
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "medical_staff_info.council_number",
      header: "Council Number",
    },
    {
      accessorKey: "medical_staff_info.speciality",
      header: "Speciality",
    },
    {
      accessorKey: "user_info.citizenship_number",
      header: "Citizenship Number",
    },
    {
      accessorKey: "user_info.nid_number",
      header: "Nid Number",
    },
    {
      accessorKey: "user_info.insurance_number",
      header: "Insurance Number",
    },
    {
      header: "Action",
      cell: (row: any) => {
        return (
          <>
            <CrudIcon
              data={row?.cell?.row?.original}
              url="/hospitals"
              fetchData={fetchData}
            >
              <div
                className="flex  items-center mr-4"
                onClick={() => handleEditData(row?.cell?.row?.original)}
              >
                <div className="">
                  <MdOutlineModeEdit size={22} color="#1D3075" />
                </div>
              </div>
            </CrudIcon>
          </>
        );
      },
    },
  ];

  const toggleModal = (
    modalState: boolean,
    setModalState: any,
    setCurrentStep: any
  ) => {
    return () => {
      setModalState(!modalState);
      // setCurrentStep(0);
    };
  };

  const handleShowUserModal = toggleModal(
    showUserModal,
    setShowUserModal,
    setCurrentStep
  );
  const UserForms = [
    <PersonalDetailForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      onClick={handleShowUserModal}
      isEdit={isEdit}
    />,
    <ContactDetailForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      onClick={handleShowUserModal}
      isEdit={isEdit}
    />,
    <MedicalPersonAddressDetailForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      onClick={handleShowUserModal}
      // fetchData={fetchData}
    />,
  ];

  const modalsConfig = {
    hospital: {
      showModal: showUserModal,
      forms: UserForms,
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
      <Heading
        mainText={"Doctor Details"}
        btnText={"Add Doctor"}
        onClick={() => {
          dispatch(resetFormData());
          //   setHospitalDetails(null);
          //   setEditData(null);
          handleShowUserModal();
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
        <div className="flex flex-col">
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
      {doctorsData?.results ? (
        <DataTable
          loading={loading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          title="Doctors List"
          count={doctorsData?.count}
          columns={DoctorsColumn}
          data={doctorsData?.results}
        />
      ) : null}
    </DashboardLayout>
  );
};

export default Doctor;
