import { Field, Form, Formik } from "formik";
import { RxCross2 } from "react-icons/rx";
import Input from "../Input";
import { Button } from "../Button";
import { DefaultSelect } from "../Select";
import { Progress } from "../../ui/progress";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Step from "../Step";
import ImageUploadWithPreview from "../../ui/image-upload-with-preview";
import { ToggleGroup, ToggleGroupItem } from "../../ui/toggle-group";
import { Checkbox } from "../../ui/checkbox";
import { updateFormData } from "../../../redux/slice/form/formSlice";
import { useDispatch } from "react-redux";

interface FieldProps {
  name?: any;
  inputType?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  onChange?: any;
  value?: any;
  disabled?: boolean;
  title?: string;
}

interface DynamicFormProps {
  onClick?: () => void;
  formFields?: FieldProps[][];
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
  // console.log("initial val in dynamic form", initialValues);
  const dispatch = useDispatch();
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
        {({
          isSubmitting,
          isValid,
          setFieldValue,
          values,
          errors,
          touched,
        }) => {
          // console.log("values", values);
          return (
            <Form className=" flex flex-col justify-between min-h-[570px]">
              <div className="">
                {formFields &&
                  formFields.map((fieldGroup, index) => {
                    return (
                      <>
                        <div key={index} className="flex w-full space-x-5">
                          {fieldGroup.map((field, index) => {
                            // console.log("field value", field);
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
                            ) : field?.type === "toggle" ? (
                              <div className={`${widthClass} mt-8 `}>
                                <div className="mb-4">
                                  <label
                                    className={`text-lg font-medium ${
                                      errors[field.name] &&
                                      touched[field.name] &&
                                      "text-warning"
                                    }`}
                                  >
                                    {field?.label}
                                    <span className="text-warning">*</span>
                                  </label>
                                </div>
                                <Field name={field?.name}>
                                  {({ field }: { field: any }) => (
                                    <ToggleGroup
                                      name={field?.name}
                                      type="single"
                                      className="flex justify-start space-x-4"
                                      value={field.value}
                                      onValueChange={(value) => {
                                        setFieldValue(field.name, value);
                                        console.log("changed vaue", value);
                                      }}
                                    >
                                      <ToggleGroupItem
                                        className="border-[1px] border-black text-black px-5 py-1 text-base"
                                        value={"married"}
                                      >
                                        Married
                                      </ToggleGroupItem>
                                      <ToggleGroupItem
                                        className="border-[1px] border-black text-black px-5 py-1 text-base"
                                        value={"unmarried"}
                                      >
                                        Unmarried
                                      </ToggleGroupItem>
                                      <ToggleGroupItem
                                        className="border-[1px] border-black text-black px-5 py-1 text-base"
                                        value={"wont'tell"}
                                      >
                                        Wont'Tell
                                      </ToggleGroupItem>
                                    </ToggleGroup>
                                  )}
                                </Field>
                              </div>
                            ) : field?.type === "checkbox" ? (
                              <div className={`w-full mt-10 flex flex-col `}>
                                <label
                                  htmlFor=""
                                  className=" capitalize  font-medoum text-lg"
                                >
                                  {field?.title}
                                </label>
                                <div className="mt-5 flex space-x-5 items-center ">
                                  {" "}
                                  <Checkbox
                                    id={field?.name}
                                    onClick={() => {
                                      dispatch(updateFormData(values));
                                    }}
                                  />
                                  <label
                                    htmlFor="terms"
                                    className="font-medium  capitalize  text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {field?.label}
                                  </label>
                                </div>
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
                        <Loader2 className="animate-spin" />
                        Creating
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
