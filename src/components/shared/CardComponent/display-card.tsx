import { RiHashtag } from "react-icons/ri";
import { Card, CardFooter, CardHeader, CardTitle } from "../../ui/card";

interface CardProps {
  title: string;
  number: number;
  timeFrame: string;
  increase: number;
  bgColor?: string;
}

const DisplayCard: React.FC<CardProps> = ({
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
            <CardTitle className="flex items-center space-x-3 ">
              <div className="  ">
                <RiHashtag color="black" size={24} />
              </div>
              <span
                className={` text-lg 2xl:text-xl font-semibold whitespace-nowrap text-tertiary-950`}
              >
                {title}
              </span>
            </CardTitle>
          </CardHeader>
          <CardFooter className="">
            <div>
              <p className={`font-bold text-2xl mb-5  text-black`}>
                {number}
                {/* {value} */}
              </p>
              <p className={`cursor-pointer mt-1 font-semibold text-black`}>
                <span className="text-[#17A700] mr-1"> {increase}</span>
                {timeFrame}
              </p>
            </div>
          </CardFooter>
        </div>
      </Card>
    </>
  );
};

export default DisplayCard;
