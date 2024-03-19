import { Hospital } from "../../assets/images";
import DashboardLayout from "../../components/ui/DashboardLayout";
import { IoMdArrowUp } from "react-icons/io";
import { DashboardSkeleton } from "../../components/shared/skeleton/dashboardSkeleton";
import { Button } from "../../components/shared/Button";
import useFetch from "../../hooks/useFetch";
import { CardComponent } from "../../components/shared/CardComponent";
import { Overview } from "../../components/shared/Chart/barChart";
import SimpleAreaChart from "../../components/shared/Chart/areaChart";

const Dashboard = () => {
  // const [showHospitalModal, setShowHospitalModal] = useState(false);
  // const [showHospitalUsersModal, setShowHospitalUsersModal] = useState(false);
  // const [currentStep, setCurrentStep] = useState<any>(0);
  // const [hospitalDetails, setHospitalDetails] = useState<any>({});
  // const [isEdit, setIsEdit] = useState(false);

  // const toggleModal = (
  //   modalState: boolean,
  //   setModalState: any,
  //   setCurrentStep: any
  // ) => {
  //   return () => {
  //     setModalState(!modalState);
  //     setCurrentStep(0);
  //   };
  // };

  // const handleShowHospitalModal = toggleModal(
  //   showHospitalModal,
  //   setShowHospitalModal,
  //   setCurrentStep
  // );
  // const handleShowHospitalUserModal = toggleModal(
  //   showHospitalUsersModal,
  //   setShowHospitalUsersModal,
  //   setCurrentStep
  // );

  // const getSingleData = async (id: any) => {
  //   try {
  //     const res = await Service.get(`/hospitals/${id}`);
  //     console.log("res in edit", res);
  //     setHospitalDetails(res.data?.data);
  //     setIsEdit(true);
  //     handleShowHospitalModal();
  //   } catch (err) {
  //     console.log("error while getting single data", err);
  //   }
  // };

  const {
    data: hospitalData,
    error,
    loading,
    fetchData,
  }: any = useFetch("/hospitals");

  // const hospitalUserForms = [
  //   <PersonalDetailForm
  //     currentStep={currentStep}
  //     setCurrentStep={setCurrentStep}
  //     onClick={handleShowHospitalUserModal}
  //   />,
  //   <ContactDetailForm
  //     currentStep={currentStep}
  //     setCurrentStep={setCurrentStep}
  //     onClick={handleShowHospitalUserModal}
  //   />,
  //   <MedicalPersonAddressDetailForm
  //     currentStep={currentStep}
  //     setCurrentStep={setCurrentStep}
  //     onClick={handleShowHospitalUserModal}
  //   />,
  // ];

  // const hospitalForms = [
  //   <HospitalForm
  //     currentStep={currentStep}
  //     setCurrentStep={setCurrentStep}
  //     hospitalDetails={hospitalDetails}
  //     setHospitalDetails={setHospitalDetails}
  //     onClick={handleShowHospitalModal}
  //   />,
  //   <AdditionalDetailForm
  //     currentStep={currentStep}
  //     setCurrentStep={setCurrentStep}
  //     onClick={handleShowHospitalModal}
  //     hospitalDetails={hospitalDetails}
  //     fetchData={fetchData}
  //   />,
  // ];

  // const modalsConfig = {
  //   hospitalUsers: {
  //     showModal: showHospitalUsersModal,
  //     forms: hospitalUserForms,
  //   },
  //   hospital: {
  //     showModal: showHospitalModal,
  //     forms: hospitalForms,
  //   },
  // };

  // const HospitalColumn = [
  //   {
  //     accessorKey: "",
  //     header: "S.N.",
  //     cell: ({ row }: { row: any }) => {
  //       return <p>{row.index + 1}</p>;
  //     },
  //   },
  //   {
  //     accessorKey: "name",
  //     header: "Name",
  //   },
  //   {
  //     accessorKey: "address",
  //     header: "Address",
  //   },
  //   {
  //     accessorKey: "phone",
  //     header: "Phone Number",
  //   },
  //   {
  //     accessorKey: "email",
  //     header: "Email",
  //   },
  //   {
  //     accessorKey: "",
  //     header: "Status",
  //     cell: ({ row }: { row: any }) => {
  //       return (
  //         <div className="text-[black] flex justify-center items-center">
  //           {" "}
  //           {row?.original?.is_active ? (
  //             <p className=" items-center bg-tertiary-850 text-tertiary-900  font-semibold rounded-lg px-2 py-2 w-fit ">
  //               Active
  //             </p>
  //           ) : (
  //             <p className="bg-warning  items-center text-white  font-semibold rounded-lg px-2 py-2 w-fit ">
  //               Inactive
  //             </p>
  //           )}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     header: "Action",
  //     cell: (row: any) => {
  //       return (
  //         <>
  //           <CrudIcon
  //             data={row?.cell?.row?.original}
  //             url="/hospitals"
  //             fetchData={fetchData}
  //           >
  //             <div
  //               className="w-7 h-7 rounded-xl bg-white bg-opacity-50 flex  items-center mr-4"
  //               onClick={() => getSingleData(row?.cell?.row?.original?.id)}
  //             >
  //               <div className="bg-white  p-[6px] rounded-lg border-[1px] border-primary-500  ">
  //                 <MdOutlineModeEdit size={22} color="#1D3075" />
  //               </div>
  //             </div>
  //           </CrudIcon>
  //         </>
  //       );
  //     },
  //   },
  // ];

  const data = [
    { name: "Sun", total: 6000 },
    { name: "Mon", total: 2575 },
    { name: "Tue", total: 8000 },
    { name: "Wed", total: 5000 },
    { name: "Thu", total: 4000 },
    { name: "Fri", total: 6000 },
    { name: "Sat", total: 7000 },
  ];

  return (
    <>
      {loading ? (
        <DashboardLayout>
          <DashboardSkeleton />
        </DashboardLayout>
      ) : (
        <DashboardLayout>
          {/* {Object.entries(modalsConfig).map(([key, e]) => {
            return (
              e.showModal && (
                <Modal key={key} isOpen={e.showModal}>
                  {e.forms[currentStep]}
                </Modal>
              )
            );
          })} */}
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
              {/* <DropdownMenu>
                <DropdownMenuTrigger onClick={() => setHospitalDetails({})}>
                  <Button
                    onClick={() => setHospitalDetails({})}
                    icon={<GoPlus size={26} />}
                    className="w-fit p-4 xl:p-6 bg-primary-500"
                    text="Create New Item"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-[170px] mr-5 xl:mr-0  xl:w-[200px]">
                  <DropdownMenuItem
                    onClick={() => {
                      setHospitalDetails({});
                      handleShowHospitalModal();
                    }}
                  >
                    Create Hospital
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      handleShowHospitalUserModal();
                      setHospitalDetails({});
                    }}
                  >
                    Create Doctor/Nurse
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
            </div>

            <div className="xl:flex space-x-0 ">
              <div className="rounded p-[22px] bg-white xl:w-[100%]  mr-4 xl:mr-8">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold ">
                    Total User's Throughout Last Week
                  </p>
                  <Button
                    variant={"secondary"}
                    className="w-fit p-6 "
                    text="View Details"
                  />
                </div>
                <div className="mt-2">
                  <div className="flex items-center space-x-3">
                    <div className="text-[#606060] text-2xl font-bold">
                      2000
                    </div>
                    <p className="flex  items-center space-x-4 text-tertiary-550 text-base bg-[#B7FFB6] rounded-[10px] w-fit p-2">
                      20%{" "}
                      <span>
                        <IoMdArrowUp size={20} />
                      </span>
                    </p>
                  </div>
                  <p className="text-tertiary-10 mt-4 text-base">
                    This means that revenue generated during the current week
                    (20%) higher than past week
                  </p>
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
                      chart={<SimpleAreaChart variant={"primary"} />}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex  items-center justify-between  my-7">
              <p className="text-2xl font-semibold">
                Hospital List ({hospitalData?.data?.count})
              </p>
            </div>
            {hospitalData?.data?.results ? (
              <DataTable
                columns={HospitalColumn}
                data={hospitalData.data.results}
              />
            ) : null} */}
          </div>
        </DashboardLayout>
      )}
    </>
  );
};

export default Dashboard;
