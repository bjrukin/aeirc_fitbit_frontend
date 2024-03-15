import React, { useState } from "react";

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
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";

interface IProps {
  data: any;
  url: string;
  fetchData: () => void;
  children?: React.ReactNode;
}

const CrudIcon: React.FC<IProps> = ({ data, url, fetchData, children }) => {
  const [deleteContent, setDeleteContent] = React.useState<any>("");
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const handleDeleteModal = () => setShowDeleteModal(!showDeleteModal);

  const handleDelete = (value: any) => {
    console.log("the delete value is", value);
    setDeleteContent(value);
    handleDeleteModal();
  };

  const handleDeleteItems = async () => {
    try {
      await Service.delete(`${url}/${deleteContent?.id}`);
      toastAlert("success", `Successfully deleted`);
      fetchData();
      setInputValue("");
    } catch (err: any) {
      toastAlert("error", err?.response?.data?.message);
    }
  };
  return (
    <>
      <div className="ml-4 flex items-center ">
        {children}
        <div
          className="flex items-center justify-center"
          onClick={() => handleDelete(data)}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="">
                <FaRegTrashCan size={22} color="red" />
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
                        Delete
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
                  disabled={inputValue != "Delete"}
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
