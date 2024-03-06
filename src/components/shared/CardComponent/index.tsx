import { Card, CardFooter, CardHeader, CardTitle } from "../../ui/card";

interface CardComponentProps {
  bgColor?: string;
  textColor?: string;
  iconSrc?: string;
  title?: string;
  value?: string;
  chart?: any;
  increase?: string;
  isFullWidth?: boolean;
  children?: React.ReactNode;
}

export const CardComponent: React.FC<CardComponentProps> = ({
  bgColor,
  textColor,
  iconSrc,
  title,
  value,
  increase,
  chart,
  isFullWidth,
}) => (
  <Card
    className={`w-[49%] ${
      isFullWidth ? "w-full" : ""
    } bg-[${bgColor}] mt-4 lg:mt-6 xl:mt-0 hover:border-[1px] cursor-pointer hover:border-secondary-200 duration-800 ease-in-out`}
  >
    <div className="flex items-center space-x-8">
      <div>
        <CardHeader className="">
          <CardTitle className="flex items-center justify-between ">
            <span
              className={`text-${textColor} text-lg 2xl:text-xl font-semibold whitespace-nowrap text-tertiary-950`}
            >
              {title}
            </span>
            {iconSrc && (
              <div className="bg-secondary-200 h-9 w-9 2xl:h-10 2xl:w-10 rounded-full">
                <img
                  src={iconSrc}
                  alt="icon"
                  className={`absolute ml-2 mt-2 2xl:ml-[10px] 2xl:mt-[10px] h-5 w-5`}
                />
              </div>
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="">
          <div>
            <p className={`font-bold text-2xl mb-5  text-${textColor}`}>
              {value}
            </p>
            <p
              className={`cursor-pointer mt-1 font-semibold text-${textColor}`}
            >
              <span className="text-[#17A700]"> {increase}%</span> Increase Than
              Past Week
            </p>
          </div>
        </CardFooter>
      </div>
      {chart && <div>{chart}</div>}
    </div>
  </Card>
);
