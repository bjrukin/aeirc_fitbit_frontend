import { useNavigate } from "react-router-dom";
import DashboardLayout from "./components/ui/DashboardLayout";

const Error = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="flex flex-col mt-[100px] items-center justify-center ">
        <h1 className="font-bold text-[100px]">404</h1>
        <p className="text-[50px] text-center whitespace-nowrap">Page Not Found</p>
        <button className="bg-secondary-500 text-white hover:bg-secondary-500/90 w-fit p-2 rounded mt-4 cursor-pointer" onClick={() => navigate("/")}>Go back</button>
      </div>
    </DashboardLayout>
  );
};

export default Error;
