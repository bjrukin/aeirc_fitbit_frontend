"use client";

import { ColumnDef } from "@tanstack/react-table";
import CrudIcon from "../shared/CrudIcon";
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

// export const HospitalColumn = (fetchData: any,handleEditData:any): ColumnDef<any>[] => [
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
//           />
//         </>
//       );
//     },
//   },
// ];
