import { useState } from "react";
import { IoIosClose } from "react-icons/io";

interface Iprops {
  file: any;
  onClick: () => void;
  label?: string;
  setPreviewImage?: any;
}

const PreviewImage: React.FC<Iprops> = ({ file, onClick, setPreviewImage }) => {
  const [preview, setPreview] = useState<any>(null);
  // const reader = new FileReader();
  // reader.readAsDataURL(file);
  // reader.onload = () => setPreview(reader.result);
  return (
    <div className="d-flex align-items-center justify-content-center relative mt-5">
      {/* <img
        src={preview}
        alt="preview"
        className="w-full h-56 object-cover mx-auto"
      /> */}
      <IoIosClose
        className="absolute -top-3 -right-2 bg-primary rounded-full "
        size={20}
        color="#FFFFFF"
        onClick={() => {
          onClick();
          setPreviewImage(null);
        }}
      />
    </div>
  );
};

export default PreviewImage;
