import { RiHashtag } from "react-icons/ri";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { HospitalIcon } from "../../../assets/images";
import SimpleAreaChart from "../Chart/areaChart";

interface CardProps {
  title: string;
  number: number;
  timeFrame: string;
  increase: number;
  bgColor?: string;
}

const UserDisplayCard: React.FC<CardProps> = ({
  bgColor,
  title,
  number,
  timeFrame,
  increase,
}) => {
  return (
    <>
      <Card
        className={`w-full  mt-4 lg:mt-4  hover:border-[1px] cursor-pointer hover:border-secondary-200 duration-800 ease-in-out bg-primary-550 bg-[${bgColor}]`}
      >
        <div className="relative">
          <CardHeader className="">
            <CardTitle className="flex  flex-col  space-y-1 ">
              <div className="flex items-center justify-between">
                <span
                  className={` text-lg 2xl:text-xl font-semibold whitespace-nowrap text-tertiary-950`}
                >
                  {title}
                </span>
                <img src={HospitalIcon} alt="" />
              </div>
              <p className={`font-bold text-2xl mb-5  text-black`}>{number}</p>
              <span className="text-[#17A700] mr-1 text-lg"> {increase}%</span>
            </CardTitle>
          </CardHeader>
          <CardFooter className="">
            <div>
              <p
                className={`cursor-pointer mt-1 font-semibold text-tertiary-950`}
              >
                View Full Details
              </p>
            </div>
            <SimpleAreaChart
              variant={"secondary"}
              className="absolute right-0 bottom-0"
              height={"100px"}
            />
          </CardFooter>
        </div>
      </Card>
    </>
  );
};

export default UserDisplayCard;
