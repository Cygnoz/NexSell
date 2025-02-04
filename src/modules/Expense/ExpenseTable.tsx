import React, { useEffect, useMemo, useState } from "react";
// import Eye from "../../assets/icons/Eye";
// import NextIcon from "../../assets/icons/NextIcon";
// import PencilLine from "../../assets/icons/PencilLine";
// import PreviousIcon from "../../assets/icons/PreviousIcon";
// import Trash from "../../assets/icons/Trash";
// import SearchBar from "./SearchBar";
// import SortBy from "./SortBy";
import IndiaLogo from "../../assets/image/IndiaLogo.png";
import SaudhiLogo from "../../assets/image/SaudiLogo.png";
import UAELogo from "../../assets/image/UAELogo.webp";
// import UserIcon from "../../assets/icons/UserIcon";
import No_Data_found from "../../assets/image/NO_DATA.png";

import ArrowRight from "../../assets/icons/ArrowRight";
import SearchBar from "../../components/ui/SearchBar";
import UserIcon from "../../assets/icons/UserIcon";
import Button from "../../components/ui/Button";
import PencilLine from "../../assets/icons/PencilLine";
import Eye from "../../assets/icons/Eye";
import Trash from "../../assets/icons/Trash";
import PreviousIcon from "../../assets/icons/PreviousIcon";
import NextIcon from "../../assets/icons/NextIcon";
import SelectDropdown from "../../components/ui/SelectDropdown";

const ImageAndLabel = [
  { key: "userName", imageKey: "userImage" },
  { key: "user.userName", imageKey: "user.userImage" },
  { key: "leadName", imageKey: "image" },
  { key: "firstName", imageKey: "image" },
];

interface TableProps<T> {
  data: T[] | null;
  columns: { key: keyof T; label: string }[];
  headerContents: {
    title?: string;
    search?: { placeholder: string };
    sort?: {
      sortHead: string;
      sortList: { label: string; icon: React.ReactNode; action?: () => void }[];
    }[];
  };
  actionList?: {
    label: "view" | "edit" | "delete";
    function: (id: any, status:any) => void;
  }[];
  noAction?: boolean;
  noPagination?: boolean;
  maxHeight?: string;
  skeltonCount?:number
}

const ExpenseTable = <T extends object>({
  data,
  columns,
  headerContents,
  actionList,
  noAction,
  noPagination,
  maxHeight,
  skeltonCount=5
}: TableProps<T>) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [noDataFound, setNoDataFound] = useState(false);
  // Filter data based on the search value
  const filteredData: any = useMemo(() => {
    return data?.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [data, searchValue]);
 
  const activityOptions = [
    { label: 'Meeting', value: 'meeting' },
    { label: 'Mail', value: 'email' },
    { label: 'Note', value: 'note' },
    { label: 'Task', value: 'task' },
  ];

  const periodOptions = [
    { label: 'Today', value: 'today' },
    { label: 'Tomorrow', value: 'tomorrow' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'After 7 Days', value: 'after_7_days' },
    { label: 'After 30 Days', value: 'after_30_days' },
  ];

  // Paginate the filtered data
  const paginatedData: any = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredData?.reverse().slice(start, start + rowsPerPage);
  }, [filteredData, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(filteredData?.length / rowsPerPage);

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // Function to determine row styles based on `status`
  const getStatusClass = (status: string | undefined) => {
    switch (status) {
      case "Approval Granted":
        return "bg-[#45A6FF] text-center text-white py-2 px-2 w-fit rounded-lg ";
      case "Pending Generation":
        return "bg-[#C4A25D] text-center text-white py-2 px-2 rounded-lg";
      case "Draft Created":
        return "bg-[#F1AB82] text-center text-black py-2 px-2 rounded-lg";
      case "Awaiting Approval":
        return "bg-[#8FA4B4] text-center text-black py-2 px-2 rounded-lg";
      case "Paid":
        return "bg-[#30B777] text-center text-black py-2 px-2 rounded-lg";
      case "Lost":
        return "bg-red-500 text-center text-white py-1 px-2 rounded-lg";
      case "Closed":
        return "bg-gray-400 text-center text-white py-1 px-2 rounded-lg";
      case "Active":
        return "bg-green-500 text-center text-white py-1 px-2 w-fit rounded-lg";
      case "Converted":
        return "bg-purple-500 text-center text-white py-1 px-2 rounded-lg";
      case "Expired":
        return "bg-red-500 text-center text-white py-1 px-2 rounded-lg";
      case "Not Started":
        return "bg-orange-400 text-center text-white py-1 px-2 rounded-lg";
      case "Extended":
        return "bg-violet-500 text-center text-white py-1 px-2 rounded-lg";
      case "Pending Renewal":
        return "bg-orange-400 text-center text-white py-1 px-2 rounded-lg";
      case "Open":
        return "bg-green-400 text-center text-white py-1 px-2 rounded-lg";
      case "Pending":
        return "bg-yellow-400 text-center text-black py-1 px-2 rounded-lg";
      case "High":
        return "bg-red-500 text-center text-white py-1 px-2 w-fit rounded-lg";
      case "Medium":
        return "bg-orange-300 text-center text-white py-1 px-2 rounded-lg";
      case "Low":
        return "bg-green-300 text-center text-white py-1 px-2 rounded-lg";
      case "Won":
        return "bg-green-500 text-center text-white  py-1 px-2 w-fit rounded-lg";
      case "Resolved":
        return "bg-green-200 text-center text-black py-1 px-2 rounded-lg";
      case "Reject":
        return "bg-red-500 text-center text-white py-1 px-2 w-fit rounded-lg";
     
      default:
        return "";
    }
  };

  function getNestedValue(obj: any, path: string): any {
    if (!path.includes(".")) {
      return obj?.[path];
    }
    return path.split(".").reduce((acc, part) => acc?.[part], obj);
  }

  const countryLogo = (key: string) => {
    if (key == "India") {
      return (
        <>
          <img src={IndiaLogo} alt="India" className="w-5 h-5 rounded-full"/>
          <p>India</p>
        </>
      );
    } else if (key == "United Arab Emirates") {
      return (
        <>
          <img src={UAELogo} alt="UAE" className="w-5 h-5 rounded-full"/>
          <p>UAE</p>
        </>
      );
    } else {
      return (
        <>
          <img
            src={SaudhiLogo}
            alt="Saudi Arabia"
            className="w-5 h-5 rounded-full"
          />
          <p>Saudi</p>
        </>
      );
    }
  };

 const renderHeader = () => (
  <div
    className={`flex ${
      headerContents.search && !headerContents.title && !headerContents.sort
        ? "justify-start"
        : "justify-between"
    } items-center mb-3`}
  >
   
    {headerContents.search && (
      <div className={`w-[440px] ${headerContents.title && " me-2"}`}>
        <SearchBar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          placeholder={headerContents.search.placeholder}
        />
      </div>
    )}
    {headerContents.sort && (
      <div className="flex gap-4">
     <SelectDropdown
            filteredData={activityOptions}
           
            placeholder="Select from & to date"
            searchPlaceholder="Select from & to date"
            width="w-60"
          />

          <SelectDropdown
            filteredData={periodOptions}
            placeholder="Select by category"
          
            searchPlaceholder="Select by category"
            width="w-60"
          />


      </div>
    )}
  </div>
);

  
  
  const renderImageAndLabel = (data: any) => {
    for (const { key, imageKey } of ImageAndLabel) {
      const keyValue = getNestedValue(data, key);
      const imageValue = getNestedValue(data, imageKey);
      if (keyValue) {
        if (imageValue && imageValue.length > 500) {
          return (
            <>
              <img
                src={`${imageValue}`}
                alt={keyValue}
                className="w-6 h-6 rounded-full bg"
              />
              <p>{keyValue}</p>
            </>
          );
        } else {
          return (
            <>
              <p className="w-6 h-6  bg-black rounded-full flex justify-center items-center">
                <UserIcon color="white" size={15} />
              </p>
              <p>{keyValue}</p>
            </>
          );
        }
      }
    }
    return "N/A";
  };

  const renderSkeletonLoader = () => (
    <tr>
      <td colSpan={columns.length + 2}>
        <div className="flex flex-col   gap-2 mt-2">
          {Array.from({ length: skeltonCount }).map((_, index) => (
            <div key={index} className="flex gap-2 animate-pulse">
              {columns.map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="h-6 w-full bg-gray-200 rounded-lg skeleton"
                ></div>
              ))}
              {!noAction && (
                <div className="h-6 w-full bg-gray-200 skeleton"></div>
              )}
            </div>
          ))}
        </div>
      </td>
    </tr>
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (data?.length === 0) {
        setNoDataFound(true);
      } else {
        setNoDataFound(false);
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [data]);

  const tabs =["RM", "AM", "BDA"]
  const [activeTab, setActiveTab] = useState<string>("RM");

  return (
    <div className="w-full  bg-white rounded-lg p-4">
      {renderHeader()}

      <div
      style={maxHeight ? { height: maxHeight, overflowY: "auto" } : {}}
         className={maxHeight ? "custom-scrollbar" : "hide-scrollbar"}
      >
       
       <div className="flex gap-16 rounded-xl px-4 py-3 text-base font-bold border-b border-gray-200">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer py-2 px-[16px] ${activeTab === tab
                            ? "text-[#303F58] text-sm font-bold border-b-2 shadow-lg rounded-md border-[#97998E]"
                            : "text-gray-400"
                            }`}
                    >
                        {tab}
                    </div>
                ))}
            </div>



        <table
          style={maxHeight ? { height: maxHeight, overflowY: "auto" } : {}}
       
          className={`w-full border-collapse border-[#e7e6e6] border text-left  ${
            maxHeight && "table-fixed"
          }`}
        >
          <thead
            className={` bg-[#F6F9FC]  ${maxHeight && "z-40 sticky top-0"}`}
          >
            <tr>
              <th className="border border-[#e7e6e6] p-4 text-sm  text-[#303F58] font-medium">
                SI No.
              </th>
              {columns.map((col: any) => (
                <th
                  key={String(col.key)}
                  className={`border border-[#e7e6e6]  p-4 text-sm  text-[#303F58] font-medium ${
                    col.key == "convert"
                      ? "w-48 text-center"
                      : col.key?.toLowerCase().includes("status") &&
                        "text-center min-w-[120px]"
                  }`}
                >
                  {col.key == "convert" ? "Convert" : col.label}
                </th>
              ))}
              {!noAction && (
                <th className="border border-[#e7e6e6] p-4 text-sm text-[#303F58] text-center font-medium">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {noDataFound ? (
              <tr>
                <td
                  colSpan={columns?.length + 2}
                  className="text-center py-4 text-gray-500"
                >
                  <div className="flex justify-center flex-col items-center">
                    <img width={70} src={No_Data_found} alt="No Data Found" />
                    <p className="font-bold text-red-700">No Records Found!</p>
                  </div>
                </td>
              </tr>
            ) : data?.length === 0 ? (
              renderSkeletonLoader()
            ) : Array.isArray(paginatedData) && paginatedData.length > 0 ? (
              paginatedData.map((row: any, rowIndex: number) => (
                <tr onClick={() => actionList?.find((data) => data.label === "view")?.function(row?._id, row?.status)}  key={rowIndex} className="hover:bg-gray-50 z-10 cursor-pointer">
                  <td className="border-b border-[#e7e6e6] p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF]">
                    {(currentPage - 1) * rowsPerPage + rowIndex + 1}
                  </td>
                  {columns.map((col: any) => (
                    <td
                      key={col.key}
                      className="border border-[#e7e6e6] p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF]"
                    >
                      <div
                        className={`flex ${
                          col.key.toLowerCase().includes("status") ||
                          col?.key == "convert"
                            ? "justify-center"
                            : "justify-start"
                        } items-center gap-2`}
                      >
                        {col.key === "country" ? (
                          countryLogo(getNestedValue(row, col.key))
                        ) : [
                            "userName",
                            "user.userName",
                            "leadName",
                            "firstName",
                          ].includes(col.key) ? (
                          renderImageAndLabel(row)
                        ) : col.key.toLowerCase().includes("status") ? (
                          <p className={getStatusClass(row[col.key])}>
                            {row[col.key]}
                          </p>
                        ) : col?.key == "convert" ? (
                          row["leadStatus"] == "Won" ? (
                            <Button
                              onClick={() => col.label(row._id)}
                              variant="tertiary"
                              className="h-8 text-sm  text-[#565148]  border border-[#565148] rounded-xl"
                              // size="lg"
                            >
                              Convert to Trial
                              <ArrowRight />
                            </Button>
                          ) : (
                            ""
                          )
                        ) : (
                          getNestedValue(row, col.key) || "N/A"
                        )}
                      </div>
                    </td>
                  ))}
                  {!noAction && (
                    <td className="border-b border-[#e7e6e6] p-4 text-xs text-[#4B5C79] font-medium bg-[#FFFFFF]">
                      <div className="flex justify-center gap-2">
                        {actionList?.map((action, index) => {
                          if (
                            ["edit", "view", "delete"].includes(action.label)
                          ) {
                            return (
                              <p
                                key={index}
                                className="cursor-pointer"
                                onClick={() => action.function(row?._id, row?.status)}
                              >
                                {action.label === "edit" ? (
                                  <PencilLine color="#4B5C79" size={16} />
                                ) : action.label === "view" ? (
                                  <Eye color="#4B5C79" size={16} />
                                ) : (
                                  <Trash color="#4B5C79" size={16} />
                                )}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : null}
          </tbody>
        </table>
      </div>

      {data&&data.length > 10 && !noPagination && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-xs text-[#71736B] font-medium flex gap-2">
            Showing {currentPage} of {totalPages || 1}
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <PreviousIcon size={20} color="#71736B" />
              </button>
              <button className="border text-[#FFFFFF] bg-[#97998E] px-2 py-1">
                {currentPage}
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages || totalPages === 0}
              >
                <NextIcon size={20} color="#71736B" />
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center text-[#71736B] font-medium text-xs">
            Rows per page
            <select
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="border border-gray-300 rounded-md p-1 text-sm"
            >
              {[5, 10, 20, 50].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}


    </div>
  );
};

export default ExpenseTable;
