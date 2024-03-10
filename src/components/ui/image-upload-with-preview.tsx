import PreviewImage from "./preview-image";
import UploadImage from "./upload-image";

interface IProps {
  previewImage: string;
  setPreviewImage: any;
  setFieldValue: any;
  label?: string;
  imgUrl?: string;
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
  imgUrl,
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
        imgUrl={imgUrl}
        setPreviewImage={setPreviewImage}
      />
    </>
  );
};

export default ImageUploadWithPreview;
