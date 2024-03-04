import React, { useEffect, useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  useTable,
  usePagination,
  useRowSelect,
  TableOptions,
} from "react-table";
import NoData from "./no-result";

interface IProps {
  loading?: boolean;
  tableData?: any;
  tableColumn: any;
  text?: string;
  pagination?: boolean;
  onSelectRow?: (row: any) => void;
  selectedRows?: Set<number>;
}

interface MyTableOptions<D extends object> extends TableOptions<D> {
  autoResetPage?: boolean;
}

const Table: React.FC<IProps> = ({
  loading,
  tableData,
  tableColumn,
  pagination,
}) => {
  const data = React.useMemo(() => (tableData ? tableData : []), [tableData]);
  const columns = React.useMemo(() => tableColumn, []);
  const {
    headerGroups,
    getTableBodyProps,
    page,
    prepareRow,
    getTableProps,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize },
  }: any = useTable(
    {
      data,
      columns,
      autoResetPage: false,
    } as MyTableOptions<any>,
    usePagination
  );

  const pageList = (totalPages: number, currentPage: number) => {
    const listItems = [];
    for (let pageNo = 0; pageNo < totalPages; pageNo++) {
      if (
        pageNo < 2 ||
        (pageNo > totalPages - 7 && totalPages < 8) ||
        (pageNo > totalPages - 3 && totalPages >= 8) ||
        pageNo === currentPage ||
        pageNo === currentPage - 1 ||
        pageNo === currentPage + 1
      ) {
        listItems.push(
          <button
            onClick={(e) => {
              const page = pageNo ? Number(pageNo) : 0;
              gotoPage(page);
            }}
            key={pageNo}
            className={`flex w-[30px] h-[30px] p-[10px] justify-center items-center roundd-[4px] bg-tertiary-200 ${
              pageNo === currentPage ? "text-white bg-primary-800" : ""
            }`}
          >
            {pageNo + 1}
          </button>
        );
      }
      if (
        totalPages >= 8 &&
        (pageNo === 3 || pageNo === totalPages - 3) &&
        pageNo > 2
      ) {
        listItems.push(<span key={pageNo}>...</span>);
      }
    }

    return listItems;
  };
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        // <Loader/>
        <>
          <div className="-z-2 w-full">
            <div className="mt-5 rounded-xl border border-border-color-dark overflow-x-hidden relative sm:rounded-lg w-full">
              <table
                {...getTableProps()}
                className="w-full text-left text-text-black"
              >
                <thead className="font-bold text-center">
                  {headerGroups.map((headerGroup: any, i: number) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                      {headerGroup.headers.map((column: any, idx: number) => (
                        <th
                          {...column.getHeaderProps()}
                          key={idx}
                          scope="col"
                          className={`border-[2px] ${idx === headerGroup.headers.length - 1 ? '' : 'border-r-tertiary-700'} rounded bg-tertiary-600`}
                          // className="border-[2px] border-r-tertiary-700 rounded   bg-tertiary-600 "
                        >
                          {/* {column.render('Header')} */}
                          <div className="flex items-center justify-center">
                            <span className="font-bold  px-2 py-4 flex  text-xl  rounded-lg">
                              {column.render("Header")}
                            </span>
                            <span className="ml-2"></span>
                          </div>  
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="text-sm font-normal text-gray-700"
                >
                  {page?.length ? (
                    <>
                      {page.map((row: any, i: number) => {
                        prepareRow(row);
                        return (
                          <tr
                            {...row.getRowProps()}
                            key={i}
                            className="even:bg-gray-200 odd:bg-white  px-4 py-6 border text-left  text-black border-tertiary-750 hover:bg-tertiary-750 hover:text-[black] hover:cursor-pointer  ease-in-out duration-800"
                          >
                            {row.cells.map((cell: any, idx: number) => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  key={idx}
                                  className="border px-3 h-[80px] text-xl border-tertiary-750  "
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </>
                  ) : (
                    <tr>
                      <td colSpan={headerGroups[0]?.headers.length}>
                        <NoData />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {pagination && data?.length > 0 && (
                <div className=" bg-white p-5 flex justify-between items-center ">
                  <div className="text-black text-base">
                    <span className="text-black">Results: Showing</span>
                    <select
                      value={pageSize}
                      onChange={(e) => {
                        setPageSize(Number(e.target.value));
                      }}
                      className="font-normal  text-sm  rounded p-2 focus:outline-0 ml-2 bg-[white] border border-border-color-dark "
                    >
                      {[1, 5, 10, 20, 30, 40, 50].map((pageSize) => (
                        <option
                          key={pageSize}
                          value={pageSize}
                          className="text-sm "
                        >
                          {pageSize}
                        </option>
                      ))}
                    </select>
                    <span className="ml-2">Entries Per Page</span>
                  </div>
                  <div className="flex items-center space-x-5">
                    <div className="flex items-center ">
                      <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                        className="bg-almost-white mr-2  cursor-pointer  rounded-md h-6 w-fit pl-1 text-normal  text-black"
                      >
                        <div className="flex items-center space-x-1">
                          {" "}
                          <MdKeyboardArrowLeft />
                          <span>Prev</span>
                        </div>
                      </button>
                      <div className="flex items-center gap-2">
                        {pageList(pageOptions.length, pageIndex)}
                      </div>
                      <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className=" cursor-pointer  bg-almost-white rounded-md h-6 w-fit pl-1  text-normal  ml-3 text-black"
                      >
                        <div className="flex items-center space-x-1">
                          <span>Next</span>
                          <MdKeyboardArrowRight />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="ml-2 flex items-center gap-1">
                    <span>Go to page:</span>
                    <input
                      type="number"
                      defaultValue={""}
                      value={pageIndex + 1}
                      onChange={(e) => {
                        const page = e.target.value
                          ? Number(e.target.value) - 1
                          : 0;
                        gotoPage(page);
                      }}
                      className="border p-1 rounded w-16"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default React.memo(Table);
