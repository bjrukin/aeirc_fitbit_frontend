import DashboardLayout from "../../components/ui/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const Report = () => {
  return (
    <DashboardLayout>
      <div>
        <Card className="">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Report;
