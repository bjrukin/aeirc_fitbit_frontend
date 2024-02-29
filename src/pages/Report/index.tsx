import { PatientColumn } from "../../components/columns/dashboard-column";
import DashboardLayout from "../../components/ui/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Table from "../../components/ui/table";
import useFetch from "../../hooks/useFetch";

const Report = () => {
  const cardData = [
    { title: "Total Number of Patient", value: 200 },
    { title: "New Patient Patient", value: 200 },
    { title: "Total Number of Patient", value: 200 },
    { title: "New  Patient", value: 200 },
  ];
  const { loading, data, error, fetchData } = useFetch("/auth/users/list");
  console.log("The data is", data, error, loading);

  return (
    <DashboardLayout>
      <div className="flex  space-x-8 mt-6">
        {cardData.map((data, index) => (
          <Card key={index} className="bg-white w-1/4 border-none">
            <CardHeader>
              <CardTitle className="text-tertiary-100">{data.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <div>
                <p className="text-tertiary-100 font-bold text-2xl">
                  {data.value}
                </p>
                <p className=" cursor-pointer text-primary-800 text-xl mt-1 font-semibold">
                  View Details
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div>
        <Table
          pagination={false}
          tableColumn={PatientColumn}
          //  tableData={data}
        />
      </div>
    </DashboardLayout>
  );
};

export default Report;
