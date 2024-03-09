import { useEffect, useState } from "react";
import DashboardLayout from "../../components/ui/DashboardLayout";
import Heading from "../../components/ui/heading";
import HospitalForm from "../../components/forms/Hospital/hospital-form";
import AdditionalDetailForm from "../../components/forms/Hospital/additional-detail-form";
import Modal from "../../components/shared/Modal";
import DisplayCard from "../../components/shared/CardComponent/display-card";
import { Overview } from "../../components/shared/Chart/barChart";
import { IoMdArrowUp } from "react-icons/io";
import { Button } from "../../components/shared/Button";
import { CardComponent } from "../../components/shared/CardComponent";
import LineChart from "../../components/shared/Chart/areaChart";
import useFetch from "../../hooks/useFetch";
import CrudIcon from "../../components/shared/CrudIcon";
import { MdOutlineModeEdit } from "react-icons/md";
import { DataTable } from "../../components/ui/data-table";
import Service from "../../setup/Service";

const Hospital = () => {
  const {
    data: hospitalData,
    error,
    fetchData,
    loading,
  } = useFetch("/hospitals");

  const [showHospitalModal, setShowHospitalModal] = useState(false);
  const [currentStep, setCurrentStep] = useState<any>(0);
  const [hospitalDetails, setHospitalDetails] = useState<any>({});

  const [hospitalEditData, setHospitalEditData] = useState([]);
  console.log("hospitalEdit data", hospitalEditData);
  const [isLoading, setIsLoading] = useState(false);

  const getSingleData = async (id: any) => {
    setIsLoading(true);
    try {
      const editRes = await Service.get(`/hospitals/${id}`);
      const editData = editRes?.data?.data;
      setHospitalEditData(editData);
      setIsLoading(false);
      setShowHospitalModal(true);
    } catch (err) {
      setIsLoading(false);
      console.log("The err is", err);
    }
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
      title: "Top Hospital Count",
      number: 2000,
      increase: 20,
      timeFrame: "In Past Months Week",
      bgColor: "white",
    },
    {
      id: 2,
      title: "Top Hospital Count",
      number: 2000,
      increase: 20,
      timeFrame: "In Past Months Week",
      bgColor: "#CFDAFF",
    },
    {
      id: 3,
      title: "Top Hospital Count",
      number: 2000,
      increase: 20,
      timeFrame: "In Past Months Week",
      bgColor: "white",
    },
    {
      id: 4,
      title: "Top Hospital Count",
      number: 2000,
      increase: 20,
      timeFrame: "In Past Months Week",
      bgColor: "#CFDAFF",
    },
  ];

  const handleShowHospitalModal = toggleModal(
    showHospitalModal,
    setShowHospitalModal,
    setCurrentStep
  );
  const HospitalColumn = [
    {
      accessorKey: "",
      header: "S.N.",
      cell: ({ row }: { row: any }) => {
        return <p>{row.index + 1}</p>;
      },
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "address",
      header: "Address",
    },
    {
      accessorKey: "phone",
      header: "Phone Number",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "",
      header: "Status",
      cell: ({ row }: { row: any }) => {
        return (
          <div className="text-[black] flex justify-center items-center">
            {" "}
            {row?.original?.is_active ? (
              <p className=" items-center bg-tertiary-850 text-tertiary-900  font-semibold rounded-lg px-2 py-2 w-fit ">
                Active
              </p>
            ) : (
              <p className="bg-warning  items-center text-white  font-semibold rounded-lg px-2 py-2 w-fit ">
                Inactive
              </p>
            )}
          </div>
        );
      },
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
                className="w-7 h-7 rounded-xl bg-white bg-opacity-50 flex  items-center mr-4"
                onClick={() => getSingleData(row?.cell?.row?.original?.id)}
              >
                <div className="bg-white  p-[6px] rounded-lg border-[1px] border-primary-500  ">
                  <MdOutlineModeEdit size={22} color="#1D3075" />
                </div>
              </div>
            </CrudIcon>
          </>
        );
      },
    },
  ];
  const hospitalForms = [
    <HospitalForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      hospitalDetails={
        hospitalEditData.length > 0 ? hospitalEditData : hospitalDetails
      }
      setHospitalDetails={setHospitalDetails}
      onClick={handleShowHospitalModal}
    />,
    <AdditionalDetailForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      onClick={handleShowHospitalModal}
      hospitalDetails={
        hospitalEditData.length > 0 ? hospitalEditData : hospitalDetails
      }
      fetchData={fetchData}
    />,
  ];
  const modalsConfig = {
    hospital: {
      showModal: showHospitalModal,
      forms: hospitalForms,
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
        mainText={"Hospital Dashboard"}
        btnText={"Create Hospital"}
        onClick={() => {
          //   setHospitalDetails({});
          handleShowHospitalModal();
        }}
      />
      <div className="flex flex-wrap xl:flex-nowrap space-x-4">
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
      <div className="xl:flex space-x-0 mt-5">
        <div className="rounded p-[22px] bg-white xl:w-[100%]  mr-4 xl:mr-8">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold ">
              Total User's Throughout Last Week
            </p>
          </div>
          <div className="mt-2">
            <div className="flex items-center space-x-3">
              <div className="text-[#606060] text-2xl font-bold">2000</div>
              <p className="flex  items-center space-x-4 text-tertiary-550 text-base bg-[#B7FFB6] rounded-[10px] w-fit p-2">
                20%{" "}
                <span>
                  <IoMdArrowUp size={20} />
                </span>
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Overview data={data} />
          </div>
        </div>
        <div className="rounded bg-[white] p-[22px]  mt-6 xl:mt-0">
          <div className="flex items-center justify-between">
            <p className="text-xl xl:text-lg font-semibold ">
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
                bgColor={"#000B2C"}
                textColor="white"
                iconSrc={Hospital}
                title="Total Hospital"
                value="2000"
                increase="20"
                isDifferentColor={true}
              />
              <CardComponent
                bgColor="#F3F3F3"
                textColor="black"
                title="Total Hospital"
                value="2000"
                increase="20"
                isFullWidth
                chart={<LineChart />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-between  my-7">
        <p className="text-2xl font-semibold">
          Hospital List ({hospitalData?.count})
        </p>
      </div>
      {hospitalData?.data?.results ? (
        <DataTable
          columns={HospitalColumn}
          data={hospitalData?.data?.results}
        />
      ) : null}
    </DashboardLayout>
  );
};

export default Hospital;