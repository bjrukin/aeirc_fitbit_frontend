import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
  getSortedRowModel,
  VisibilityState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { Button } from "../shared/Button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { IoFilterOutline } from "react-icons/io5";
import NoData from "./no-result";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TableSkeleton } from "../shared/skeleton/tableSkeleton";
import { useNavigate } from "react-router-dom";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title?: string;
  count?: any;
  currentPage?: any;
  setCurrentPage?: any;
  loading?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  title,
  count,
  currentPage,
  setCurrentPage,
  loading,
}: DataTableProps<TData, TValue>) {
  console.log("THe data in table  is",data)
  // const location = useLocation();
  // const navigate = useNavigate();

  // const handleSearch = (e: any) => {
  //   e.preventDefault();
  //   const params = new URLSearchParams();
  //   params.append("q", e.target.value);
  //   navigate(`${location.pathname}?${params.toString()}`);
  // };
  const navigate = useNavigate();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const totalPages = Math.ceil(count / 10);

  return (
    <div className="my-5 p-3 bg-white rounded">
      <div className="flex items-center justify-between">
        {/* <input
          className="flex h-11 autocomplete-off  rounded-md border border-tertiary-350 bg-background px-3 py-2 text-sm ring-offset-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-none focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-secondary-400 disabled:cursor-not-allowed disabled:opacity-50 w-1/2"
          type="text"
          placeholder="Search Data"
          value={
            (table.getColumn(name && name)?.getFilterValue() as string) ?? ""
          }
          onChange={(event: any) => {
            table.getColumn(name && name)?.setFilterValue(event.target.value);
            // handleSearch(event);
          }}
        /> */}
        <div className="flex  items-center justify-between  my-3">
          <p className="text-2xl font-semibold">
            {title} ({count}){" "}
          </p>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <div className="flex items-center  px-2">
            <div className="flex items-center justify-end ">
              <div className="flex items-center py-4  ">
                <button
                  className="text-black p-2  cursor-pointer"
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                  }}
                  disabled={currentPage == 1}
                >
                  <FaChevronLeft className="h-5 w-5" />{" "}
                </button>
                <button
                  className="p-2 text-black cursor-pointer"
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                  }}
                  disabled={currentPage == totalPages}
                >
                  <FaChevronRight className="h-5 w-5" />{" "}
                </button>
              </div>
              <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                Page{" "}
                <span className="font-semibold mx-1 text-base">
                  {currentPage}
                </span>{" "}
                {/* {table.getState().pagination.pageIndex + 1}  */}
                of {/* {table.getPageCount()} */}
                <span className="font-semibold mx-1 text-base">
                  {totalPages}
                </span>
              </div>
              {/* <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">Rows per page</p>
                  <Select
                    value={`${table.getState().pagination.pageSize}`}
                    onValueChange={(value) => {
                      table.setPageSize(Number(value));
                    }}
                  >
                    <SelectTrigger className="h-8 w-[70px]">
                      <SelectValue
                        placeholder={table.getState().pagination.pageSize}
                      />
                    </SelectTrigger>
                    <SelectContent side="top">
                      {[1, 5, 10, 20, 30, 40, 50].map((pageSize) => (
                        <SelectItem
                          className="border-b-[1px] border-tertiary-950 last:border-none cursor-pointer"
                          key={pageSize}
                          value={`${pageSize}`}
                        >
                          {pageSize}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div> */}
            </div>
          </div>
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  icon={<IoFilterOutline size={22} />}
                  className="w-fit p-4"
                  variant="secondary"
                  text="Filter Table"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize text-black   cursor-pointer"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        <span className=""> {column.id}</span>
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="rounded-xl mt-5">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          {/* <TableBody>
              {table.getRowModel().rows?.length && data?.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableCell
                  colSpan={columns.length}  
                  className="h-24 text-center"
                >
                  <NoData />
                </TableCell>
              )}
            </TableBody> */}
          <TableBody>
            {loading ? (
              <TableCell colSpan={columns.length} className="h-24 text-center">
                <TableSkeleton />
              </TableCell>
            ) : (
              <>
                {table.getRowModel().rows?.length && data?.length > 0 ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="p-4 text-sm 2xl:text-base"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    <NoData />
                  </TableCell>
                )}
              </>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
