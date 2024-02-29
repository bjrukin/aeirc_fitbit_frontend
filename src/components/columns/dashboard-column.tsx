export const PatientColumn = [
  {
    Header: "Instituion Name",
    accessor: "",
    Cell: ({ row }: { row: any }) => {
      return (
        <p className="whitespace-nowrap">{row?.original?.institution?.label}</p>
      );
    },
  },
  {
    Header: "Mature Date",
    accessor: "mature_at",
  },
  {
    Header: "Deposit Amount",
    accessor: "deposit_amount",
  },
  {
    Header: "Rate %",
    interest_rate: "10.130",
    accessor: "interest_rate",
  },
];
