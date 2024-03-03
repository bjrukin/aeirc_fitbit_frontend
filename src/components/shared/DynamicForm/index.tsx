import { Field, Form, Formik } from "formik";
import { RxCross2 } from "react-icons/rx";
import Input from "../Input";
import { Button } from "../Button";
import { DefaultSelect } from "../Select";

interface FieldProps {
  name: string;
  inputType?: string;
  type: string;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: { label: string; value: string }[];
}

interface DynamicFormProps {
  onClick: React.MouseEventHandler<HTMLButtonElement | SVGElement>;
  formFields: FieldProps[][];
  formValidation: any;
  initialValues: any;
  onSubmit: (values: any) => void;
  submitButtonText: string;
  title: string;
  onCrossClick: any;
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
}) => {
  return (
    <div className="bg-white h-full flex-1 rounded-lg p-5 px-11 ">
      <div>
        <div className="flex items-center justify-between">
          <p className="p-semibold-20">{title}</p>
          <RxCross2
            size={22}
            className="cursor-pointer"
            onClick={onCrossClick}
          />
        </div>
        <div className="mt-4 h-[8px]  bg-[green] rounded" />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={formValidation}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form className=" flex flex-col justify-between min-h-[570px]">
              <div className="">
                {formFields.map((fieldGroup, index) => (
                  <div key={index} className="flex w-full space-x-5">
                    {fieldGroup.map((field, index) => {
                      console.log("the field are", field);
                      const widthClass =
                        fieldGroup.length === 1 ? "w-1/2" : "w-full";
                      return field.type === "input" ? (
                        <div className={`${widthClass} mt-10`}>
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
                        <div className={`${widthClass} mt-10`}>
                          <Field
                            key={index}
                            name={field.name}
                            className=""
                            options={field.options}
                            component={DefaultSelect}
                            isMulti={false}
                            placeholder={field.placeholder}
                            label={field.label}
                            defaultValue={[]}
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
                ))}
              </div>
              <div className="flex justify-between items-center   ">
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
                  text={isSubmitting ? "..." : submitButtonText}
                  variant={"outline"}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default DynamicForm;
