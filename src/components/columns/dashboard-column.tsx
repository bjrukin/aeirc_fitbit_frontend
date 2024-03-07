// import { MdOutlineModeEdit } from "react-icons/md";
// import CrudIcon from "../shared/CrudIcon";

// export const HospitalColumn = (fetchData: any) => [
//   {
//     Header: "S.N",
//     accessor: "",
//     Cell: ({ row }: { row: any }) => {
//       return <p>{row.index + 1}</p>;
//     },
//   },
//   {
//     Header: "Name",
//     accessor: "name",
//   },
//   {
//     Header: "Address",
//     accessor: "address",
//   },
//   {
//     Header: "Phone Number",
//     accessor: "phone",
//   },
//   {
//     Header: "Email Address",
//     accessor: "email",
//   },
//   {
//     Header: "Status",
//     accessor: "",
//     Cell: ({ row }: { row: any }) => {
//       return (
//         <p className="text-[black]">
//           {" "}
//           {row?.original?.is_active ? (
//             <p className="bg-tertiary-850 text-tertiary-900  font-semibold rounded-xl px-2 py-2 w-fit ">
//               Active
//             </p>
//           ) : (
//             <p className="bg-warning text-white  font-semibold rounded-xl px-2 py-2 w-fit ">
//               Inactive
//             </p>
//           )}
//         </p>
//       );
//     },
//   },
//   {
//     Header: "Action",
//     Cell: (row: any) => {
//       return (
//         <>
//           <CrudIcon
//             data={row?.cell?.row?.original}
//             url="/hospitals"
//             fetchData={fetchData}
//           >
//             <div
//               className="w-7 h-7 rounded-xl bg-light-grey bg-opacity-50 flex items-center justify-center"
//               onClick={() => console.log("row is", row)}
//             >
//               <div className="bg-white p-2 rounded-xl border-[1px] border-tertiary-350 mr-4">
//                 <MdOutlineModeEdit size={24} />
//               </div>
//             </div>
//           </CrudIcon>
//         </>
//       );
//     },
//   },
// ];

// "use client";

// import { ColumnDef } from "@tanstack/react-table";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";
// import { Button } from "../shared/Button";
// import { ArrowUpDown, MoreHorizontal } from "lucide-react";

// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

// export const columns: ColumnDef<any>[] = [
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },

// {
//   id: "actions",
//   cell: ({ row }) => {
//     const payment = row.original;

//     return (
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" className="h-8 w-8 p-0">
//             <span className="sr-only">Open menu</span>
//             <MoreHorizontal className="h-4 w-4" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//           <DropdownMenuLabel>Actions</DropdownMenuLabel>
//           <DropdownMenuItem
//             onClick={() => navigator.clipboard.writeText(payment.id)}
//           >
//             Copy payment ID
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>View customer</DropdownMenuItem>
//           <DropdownMenuItem>View payment details</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     );
//   },
// },
// ];

"use client";

import { ColumnDef } from "@tanstack/react-table";
import CrudIcon from "../shared/CrudIcon";
import { MdOutlineModeEdit } from "react-icons/md";
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const HospitalColumn = (fetchData: any): ColumnDef<any>[] => [
  {
    accessorKey: "",
    header: "S.N.",
    cell: ({ row }: { row: any }) => {
      console.log("row is", row);
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
              onClick={() => console.log("row is", row)}
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
