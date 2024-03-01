export const PatientColumn = [
  {
    Header: "Id",
    accessor: "",
    Cell: ({ row }: { row: any }) => {
      return (
        <p className="whitespace-nowrap">{row?.original?.institution?.label}</p>
      );
    },
  },
  {
    Header: "Name",
    accessor: "mature_at",
  },
  {
    Header: "Address",
    accessor: "",
  },
  {
    Header: "Phone Number",
    interest_rate: "10.130",
    accessor: "",
  },
  {
    Header: "Email Address",
    interest_rate: "10.130",
    accessor: "",
  },
  {
    Header: "Status",
    interest_rate: "10.130",
    accessor: "",
  },
  {
    Header: "Actions",
    interest_rate: "10.130",
    accessor: "",
  },
];
