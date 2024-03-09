import PreviewImage from "./preview-image";
import UploadImage from "./upload-image";

interface IProps {
  previewImage: string;
  setPreviewImage: any;
  setFieldValue: any;
  label?: string;
  name?: any;
  // setRemoveImage?: any;
  isHidden?: any;
  setIsHidden?: any;
}

const ImageUploadWithPreview: React.FC<IProps> = ({
  previewImage,
  setPreviewImage,
  setFieldValue,
  label,
  name,
  // setRemoveImage,
}) => {
  return (
    <>
      <UploadImage
        name={name}
        label={label}
        previewImage={previewImage}
        setFieldValue={setFieldValue}
        setPreviewImage={setPreviewImage}
      />
    </>
  );
};

export default ImageUploadWithPreview;
