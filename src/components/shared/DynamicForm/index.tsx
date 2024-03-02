import { Field, Form, Formik } from "formik";
import { RxCross2 } from "react-icons/rx";
import Input from "../Input";
import { Button } from "../Button";
import { DefaultSelect } from "../Select";

interface FieldProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
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
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  title,
  onClick,
  formFields,
  formValidation,
  initialValues,
  onSubmit,
  submitButtonText,
}) => {
  return (
    <div className="bg-white flex-1 rounded-lg p-6  h-full">
      <div className="flex items-center justify-between">
        <p className="p-semibold-20">{title}</p>
        <RxCross2 size={22} className="cursor-pointer" onClick={onClick} />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={formValidation}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form className="h-full flex flex-col justify-between">
              <div className="mt-6 ">
                {formFields.map((fieldGroup, index) => (
                  <div key={index} className="flex w-full space-x-5">
                    {fieldGroup.map((field, index) => {
                      const widthClass =
                        fieldGroup.length === 1 ? "w-1/2" : "w-full";
                      return field.type === "input" ? (
                        <div className={`${widthClass} mt-10`}>
                          <Input
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
              <div className="flex justify-between items-center  mb-6 ">
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
