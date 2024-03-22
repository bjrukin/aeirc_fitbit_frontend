import { useState } from "react";
import DashboardLayout from "../../components/ui/DashboardLayout";
import Heading from "../../components/ui/heading";
import Modal from "../../components/shared/Modal";
import { Overview } from "../../components/shared/Chart/barChart";
import { Button } from "../../components/shared/Button";
import useFetch from "../../hooks/useFetch";
import CrudIcon from "../../components/shared/CrudIcon";
import { MdOutlineModeEdit } from "react-icons/md";
import { DataTable } from "../../components/ui/data-table";
import { useDispatch } from "react-redux";
import {
  resetFormData,
  updateEditData,
} from "../../redux/slice/form/formSlice";
import UserPersonalDetail from "../../components/forms/User/user-personal-detail";
import UserAddressDetailForm from "../../components/forms/User/user-address-details";
import UserDisplayCard from "../../components/shared/CardComponent/user-display-card";

const User = () => {
  // const [params] = useSearchParams();
  // const searchString = params.get("q");
  // console.log("q valuie", typeof searchString, searchString);
  // const {
  // data: hospitalData,
  // error,
  // fetchData,
  // loading,
  // } = useFetch(`/hospitals?${searchString}`);

  const dispatch = useDispatch();
  const [showUserModal, setShowUserModal] = useState(false);
  const [currentStep, setCurrentStep] = useState<any>(0);
  const [userDetails, setUserDetails] = useState<any>({});
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: userData,
    error,
    fetchData,
    loading,
  } = useFetch(`/auth/users/list?page=${currentPage}&role=user`);
  console.log("The user data is", userData);
  const handleEditData = (data: any) => {
    dispatch(updateEditData(data));
    setEditId(data?.id);
    setEditData(data);
    setIsEdit(true);
    handleShowUserModal();
  };

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

  const cardData = [
    {
      id: 1,
      title: "Total Users",
      number: 2000,
      increase: 20,
      timeFrame: "In Past Months Week",
      bgColor: "white",
    },
    {
      id: 2,
      title: "Total Users",
      number: 2000,
      increase: 20,
      timeFrame: "In Past Months Week",
      bgColor: "#CFDAFF",
    },
    {
      id: 3,
      title: "Total Users",
      number: 2000,
      increase: 20,
      timeFrame: "In Past Months Week",
      bgColor: "white",
    },
    {
      id: 4,
      title: "Total Users",
      number: 2000,
      increase: 20,
      timeFrame: "In Past Months Week",
      bgColor: "#CFDAFF",
    },
  ];

  const handleShowUserModal = toggleModal(
    showUserModal,
    setShowUserModal,
    setCurrentStep
  );
  const UsersColumn = [
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
      header: "Action",
      cell: (row: any) => {
        return (
          <>
            <CrudIcon
              data={row?.cell?.row?.original}
              url="/auth/user/delete"
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
  const userForms = [
    <UserPersonalDetail
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      onClick={handleShowUserModal}
      isEdit={isEdit}
    />,
    <UserAddressDetailForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      onClick={handleShowUserModal}
      fetchData={fetchData}
    />,
  ];
  const modalsConfig = {
    hospital: {
      showModal: showUserModal,
      forms: userForms,
    },
  };

  const data = [
    { name: "Hospital A", total: 50 },
    { name: "Hospital B", total: 90 },
    { name: "Hospital C", total: 120 },
    { name: "Hospital D", total: 80 },
    { name: "Hospital E", total: 60 },
    { name: "Hospital F", total: 90 },
  ];

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
        mainText={"User Reports"}
        btnText={"Create User"}
        onClick={() => {
          dispatch(resetFormData());
          setUserDetails(null);
          setEditData(null);
          handleShowUserModal();
        }}
      />
      <div className="flex flex-wrap xl:flex-nowrap space-x-4">
        {cardData?.map((item) => {
          return (
            <>
              <UserDisplayCard
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
      <div className="xl:flex space-x-0 mt-5">
        <div className="rounded p-[22px] bg-white xl:w-[100%]  mr-4 xl:mr-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold ">Total Users Count</p>
              <p className="text-base text-tertiary-950">
                This chart represent the total number of male and female users
              </p>
            </div>
            <Button
              variant={"secondary"}
              className="w-fit p-4"
              text="View Details"
            />
          </div>
          <div className="mt-8">
            <Overview data={data} />
          </div>
        </div>
        <div className="rounded bg-[white] p-[22px]  mt-6 xl:mt-0 w-[25%]">
          as
        </div>
      </div>

      {userData?.data ? (
        <DataTable
          loading={loading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          title="List of Patients"
          count={userData?.count}
          columns={UsersColumn}
          data={userData?.data}
        />
      ) : null}
    </DashboardLayout>
  );
};

export default User;
