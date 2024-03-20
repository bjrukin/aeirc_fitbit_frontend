import { useNavigate } from "react-router-dom";

interface BreadCrumbProps {
  title: string;
  subTitle: string;
}
const BreadCrumub: React.FC<BreadCrumbProps> = ({ title, subTitle }) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-1 text-tertiary-950">
      <p className="cursor-pointer" onClick={() => navigate(-1)}>{title}</p>
      <span>/</span>
      <p className="">{subTitle}</p>
    </div>
  );
};

export default BreadCrumub;
