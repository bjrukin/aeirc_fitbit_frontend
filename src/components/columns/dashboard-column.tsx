import { MdOutlineModeEdit } from "react-icons/md";
import CrudIcon from "../shared/CrudIcon";

export const HospitalColumn = (fetchData: any) => [
  {
    Header: "Id",
    accessor: "",
    Cell: ({ row }: { row: any }) => {
      return <p>{row.index + 1}</p>;
    },
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Phone Number",
    accessor: "phone",
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Status",
    accessor: "",
    Cell: ({ row }: { row: any }) => {
      return (
        <p className="text-[black]">
          {" "}
          {row?.original?.is_active ? (
            <p className="bg-tertiary-850 text-tertiary-900  font-semibold rounded-xl px-2 py-2 w-fit ">
              Active
            </p>
          ) : (
            <p className="bg-warning text-white  font-semibold rounded-xl px-2 py-2 w-fit ">
              Inactive
            </p>
          )}
        </p>
      );
    },
  },
  {
    Header: "Action",
    Cell: (row: any) => {
      return (
        <>
          <CrudIcon
            data={row?.cell?.row?.original}
            url="/hospitals"
            fetchData={fetchData}
          >
            <div
              className="w-7 h-7 rounded-xl bg-light-grey bg-opacity-50 flex items-center justify-center"
              onClick={() => console.log("row is", row)}
            >
              <div className="bg-white p-2 rounded-xl border-[1px] border-tertiary-350 mr-4">
                <MdOutlineModeEdit size={24} />
              </div>
            </div>
          </CrudIcon>
        </>
      );
    },
  },
];
