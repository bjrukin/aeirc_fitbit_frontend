import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

interface IProps {
  // onChange: any;
  label?: string;
  name: string;
  setRemoveImage?: any;
  previewImage?: any;
  setFieldValue?: any;
  setPreviewImage?: any;
  imgUrl?: string;
}

const UploadImage: React.FC<IProps> = ({
  name,
  label,
  previewImage,
  setPreviewImage,
  setFieldValue,
  imgUrl,
}) => {
  const fileRef = React.useRef<any>(null);
  const [imageSelected, setImageSelected] = useState(false);

  useEffect(() => {
    setImageSelected(!!(imgUrl || previewImage));
  }, [imgUrl, previewImage]);
  return (
    <div className="mb-4 relative">
      <label className="font-bold text-lg">{label}</label>

      <input
        type="file"
        name={name}
        ref={fileRef}
        hidden
        accept="image/*"
        onChange={(e: any) => {
          const file = e?.target?.files[0];
          if (file) {
            setFieldValue(name, file);
            setPreviewImage(URL.createObjectURL(file));
            setImageSelected(!!e.target.files?.length);
          }
        }}
      />
      {!imageSelected && (
        <div
          className="mt-5 w-full h-[200px] border border-tertiary-950 rounded-xl cursor-pointer p-5 space-x-3 flex items-center justify-center"
          onClick={() => {
            fileRef?.current?.click();
          }}
        >
          <BsDownload size={30} color="#8C8C8C" />
          <p className="text-tertiary-950 font-semibold">
            Upload Hospital Logo
          </p>
        </div>
      )}
      {imageSelected && (
        <IoIosClose
          className="cursor-pointer absolute left-[190px] top-8  bg-primary rounded-full "
          size={20}
          color="#FFFFFF"
          onClick={() => {
            setPreviewImage(null);
            setImageSelected(false);
            if (fileRef.current) {
              fileRef.current.value = "";
            }
          }}
        />
      )}
    </div>
  );
};

export default UploadImage;
