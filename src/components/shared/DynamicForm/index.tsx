import { Field, Form, Formik } from "formik";
import { RxCross2 } from "react-icons/rx";
import Input from "../Input";
import { Button } from "../Button";
import { DefaultSelect } from "../Select";
import { Progress } from "../../ui/progress";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Step from "../Step";
import ImageUploadWithPreview from "../../ui/image-upload-with-preview";

interface FieldProps {
  name: string;
  inputType?: string;
  type: string;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: { label: string; value: string }[];
  onChange?: any;
  value?: any;
  disabled?: boolean;
}

interface DynamicFormProps {
  onClick?: () => void;
  formFields: FieldProps[][];
  formValidation: any;
  initialValues: any;
  onSubmit: any;
  submitButtonText: string;
  title: string;
  onCrossClick: any;
  currentStep?: number | any;
  totalStep?: number | any;
  data?: any;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  title,
  onClick,
  formFields,
  formValidation,
  initialValues,
  onSubmit,
  submitButtonText,
  onCrossClick,
  currentStep,
  totalStep,
  data,
}) => {
  const [previewImage, setPreviewImage] = useState<any>("");
  const [isHidden, setIsHidden] = useState(false);
  const progressValue = ((currentStep + 1) / totalStep) * 100;
  return (
    <div className="bg-white relative overflow-auto flex-1 rounded-lg p-5 px-11 ">
      <div className="flex  items-center justify-between mb-6 xl:hidden">
        {data &&
          data.map((step: any, index: any) => (
            <Step
              key={index}
              currentStep={currentStep}
              stepNumber={index}
              title={step.title}
              subtitle={step.subtitle}
            />
          ))}
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="p-semibold-20">{title}</p>
          <div className="flex space-x-5 items-center">
            <div className="font-semibold text-2xl">
              Step {currentStep + 1} of {totalStep}
            </div>
            <RxCross2
              size={24}
              className="cursor-pointer"
              onClick={onCrossClick}
            />
          </div>
        </div>
        <Progress value={progressValue} />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={formValidation}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, setFieldValue, values }) => {
          return (
            <Form className=" flex flex-col justify-between min-h-[570px]">
              <div className="">
                {formFields.map((fieldGroup, index) => {
                  return (
                    <>
                      <div key={index} className="flex w-full space-x-5">
                        {fieldGroup.map((field, index) => {
                          const widthClass =
                            fieldGroup.length === 1 ? "w-1/2" : "w-full";
                          return field.type === "input" ? (
                            <div className={`${widthClass} mt-8 `}>
                              <Input
                                type={field.inputType}
                                key={index}
                                name={field.name}
                                labelClassName="font-bold text-lg"
                                label={field.label}
                                required={field.required}
                                placeholder={field.placeholder}
                              />
                            </div>
                          ) : field.type === "select" ? (
                            <div className={`${widthClass} mt-8 `}>
                              <Field
                                key={index}
                                name={field.name}
                                className=""
                                options={field.options}
                                component={DefaultSelect}
                                isMulti={false}
                                disabled={field?.disabled}
                                placeholder={field.placeholder}
                                label={field.label}
                                value={
                                  field?.value
                                    ? field?.value
                                    : values[field?.name]
                                }
                                onChangeCallback={field.onChange}
                              />
                            </div>
                          ) : field.type === "image" ? (
                            <div className={`w-full mt-10`}>
                              <ImageUploadWithPreview
                                name={field.name}
                                label={"Upload Hospital Logo"}
                                previewImage={previewImage}
                                setFieldValue={setFieldValue}
                                imgUrl={values[field?.name]}
                                setPreviewImage={setPreviewImage}
                              />
                              <img
                                src={previewImage || null}
                                alt=""
                                className=""
                                style={{
                                  width: "200px",
                                  marginTop: "10px",
                                }}
                              />
                            </div>
                          ) : (
                            <div className={`w-full mt-10`}>
                              <Input
                                key={index}
                                name={field.name}
                                labelClassName="font-bold text-lg"
                                label={field.label}
                                required={field.required}
                                placeholder={field.placeholder}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
              {/* <div className="flex justify-between items-center mt-12  "> */}
              <div className="flex justify-between items-center mt-12  ">
                <Button
                  variant={"secondary"}
                  type={"click"}
                  className="w-fit"
                  text={"Back"}
                  onClick={onClick}
                />

                <Button
                  type={"click"}
                  className="w-fit "
                  text={
                    isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2" />
                        Creating...
                      </>
                    ) : (
                      submitButtonText
                    )
                  }
                  variant={"outline"}
                ></Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default DynamicForm;
