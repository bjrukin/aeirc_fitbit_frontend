import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

import { useDispatch } from "react-redux";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/alert-dialog";
import Service from "../../../setup/Service";
import { toastAlert } from "../../../lib/toastAlert";
import Input from "../Input";

interface IProps {
  data: any;
  url: string;
  children?: React.ReactNode;
  fetchData: () => void;
}

const CrudIcon: React.FC<IProps> = ({ data, url, children, fetchData }) => {
  const [deleteContent, setDeleteContent] = React.useState<any>("");
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  console.log("input value", inputValue, deleteContent);
  const handleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
  const dispatch = useDispatch();

  const handleDelete = (value: any) => {
    setDeleteContent(value);
    handleDeleteModal();
  };

  const handleDeleteItems = async () => {
    try {
      await Service.delete(`${url}/${deleteContent?.id}`);
      toastAlert("success", `${deleteContent?.name} is successfully deleted`);
      fetchData();
      setInputValue("");
    } catch (err: any) {
      toastAlert("error", err?.response?.data?.message);
    }
  };
  return (
    <>
      <div className="flex items-center space-x-4">
        {children}
        <div
          className="w-7 h-7 rounded-xl bg-light-grey bg-opacity-50 flex items-center justify-center"
          onClick={() => handleDelete(data)}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="bg-white p-2 rounded-xl border-[1px] border-tertiary-350">
                <RiDeleteBin2Line size={24} />
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-black text-2xl">
                  {" "}
                  <span>
                    Are you sure want to delete?{" "}
                    {/* <span className="text-warning">{deleteContent?.name}</span> */}
                  </span>
                </AlertDialogTitle>
                <AlertDialogDescription className=" mt-10 text-black ">
                  <div className="bg-border-color-dark   mt-2 mb-3">
                    <h4 className="text-xl">
                      Please type{" "}
                      <span className="text-warning text-2xl font-semibold ">
                        {deleteContent?.name}
                      </span>{" "}
                      to continue delete.
                    </h4>
                  </div>
                  <input
                    className="my-5 h-11 text-base autocomplete-off w-full rounded-md border border-tertiary-350 bg-background px-3 py-2  ring-offset-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-none focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-secondary-400 disabled:cursor-not-allowed disabled:opacity-50 w-full  focus:border-2 focus:border-tertiary-350"
                    type="text"
                    value={inputValue}
                    onChange={(e: any) => setInputValue(e.target.value)}
                  />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  disabled={inputValue != deleteContent?.name}
                  onClick={handleDeleteItems}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </>
  );
};

export default React.memo(CrudIcon);
