import React, { createContext, useContext, useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import { AreaData } from "../Interfaces/Area";
import { BDAData } from "../Interfaces/BDA";
import { RegionData } from "../Interfaces/Region";
import { endPoints } from "../services/apiEndpoints";
import { useUser } from "./UserContext";
import { TotalCounts } from "../Interfaces/Counts";
import { TotalCustomersCount } from "../Interfaces/CustomerCounts";
interface DropdownApi {
  regions:[],
  areas:[],
  bdas:[],
  supportAgents:[],
  message:string;
  commissions:[];
}
interface ticketsCountBell{
  allUnassigned?:number 
  allTickets?:number 
}
type ApiContextType = {
  allRegions?: RegionData[];
  allAreas?: AreaData[];
 
  allCountries?: any;
  allBDA?: BDAData[];
  totalCounts?: TotalCounts;
  customersCounts?: TotalCustomersCount;
  dropdownRegions?: DropdownApi["regions"];
  dropDownAreas?:DropdownApi["areas"]
  dropDownBdas?:DropdownApi["bdas"]
  dropDownSA?:DropdownApi["supportAgents"]
  allTicketsCount?:ticketsCountBell |undefined
  allRms?:any,
  regionId?:any
  dropDownWC?:DropdownApi["commissions"]
 
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const { request: getAllRegion } = useApi("get", 3003);
  const { request: getAllArea } = useApi("get", 3003);
 // const { request: getAllWc } = useApi("get", 3003);
  const { request: getAllBDA } = useApi("get", 3002);
  const {request:getAllCounts}=useApi('get',3003);
 const {request:getAllCustomersCounts}=useApi('get',3001);
  const { request: getAllCountries } = useApi("get", 3003);
  const { request: getAllDropdown } = useApi("get", 3003);
  const { request: getaRM } = useApi("get", 3002);
  const { request: getaSV } = useApi("get", 3003);
  const [dropdownApi, setDropdownApi] = useState<DropdownApi | null>(null);
  const [allRegions, setAllRegions] = useState<RegionData[]>([]);
  const [allAreas, setAllAreas] = useState<AreaData[]>([]);
  const [allBDA, setAllBDA] = useState<BDAData[]>([]);
  const [allCountries, setAllCountries] = useState<[]>([]);
  const [regionId,setRegionId]=useState<any>(null)
  // const [areaId,setAreaId]=useState<any>(null)
  const [allTicketsCount, setAllTicketsCount] = useState<ticketsCountBell | undefined>();
  const [totalCounts,setTotalCounts]=useState<TotalCounts>();
 const [customersCounts,setTotalCustomersCounts]=useState<TotalCustomersCount>()
 const { request: getAllTickets } = useApi("get", 3004);

  // Fetch all regions
  const fetchRegions = async () => {
    try {
      const { response, error } = await getAllRegion(endPoints.GET_REGIONS);
      if (response && !error) {
        setAllRegions(response.data.regions);
      }
    } catch (err) {
      console.error("Error fetching regions:", err);
    }
  };

  
  // Fetch all regions
  const fetchDropdown = async () => {
    try {
      const { response, error } = await getAllDropdown(endPoints.DROPDOWN_DATA);
      if (response && !error) { 
        setDropdownApi(response.data);
      }
    } catch (err) {
      console.error("Error fetching Datas:", err);
    }
  };

  
  

  // Fetch all areas
  const fetchAreas = async () => {
    try {
      const { response, error } = await getAllArea(endPoints.GET_AREAS);
      if (response && !error) {
        //console.log(response.data.areas);

        setAllAreas(response.data.areas);
      }
    } catch (err) {
      console.error("Error fetching areas:", err);
    }
  };

  

  const getCountries = async () => {
    try {
      const { response, error } = await getAllCountries(endPoints.GET_COUNTRY);
      if (response && !error) {
        setAllCountries(response.data[0].countries);
      }
    } catch (err) {
      console.error("Error fetching areas:", err);
    }
  };

  const getBDAs = async () => {
    try {
      const { response, error } = await getAllBDA(endPoints.BDA);
      if (response && !error) {     
        const transformedBDA =
          response.data.bda?.map((bda: any) => ({
            ...bda,
            dateOfJoining: bda?.dateOfJoining
              ? new Date(bda.dateOfJoining).toLocaleDateString("en-GB")
              : "N/A",
            loginEmail: bda.user?.email,
            bdaName:bda.user?.userName
          })) || [];
          // console.log("dssd",transformedBDA);
          
        setAllBDA(transformedBDA);
      } else {
        console.log(error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  const getAllUsersCounts=async()=>{
    try{
      const {response,error}=await getAllCounts(endPoints.COUNTS)
      if(response && !error){
       setTotalCounts(response.data)
      }else{
        console.log("err",error);
      }
    }catch(err){
      console.log(err);
    }
  };

  const getAllCustomerCounts=async()=>{
    try{
      const {response,error}=await getAllCustomersCounts(endPoints.CUSTOMERCOUNTS)
      if(response && !error){
       
        
        setTotalCustomersCounts(response.data)
      }else{
      //  console.log("err",error);
      }
    }catch(err){
      console.log(err);
    }
  }

  const getTicketsCounts = async () => {
    try {
      const { response, error } = await getAllTickets(endPoints.GET_TICKETS);
  
      if (response && !error) {
        setAllTicketsCount((prev)=>({...prev,allUnassigned:response.data?.unassignedTickets,allTickets:response.data.unresolvedTickets}))
      }
    } catch (err) {
      console.log(err);
    }
  };



  const getASV = async () => {
    try {
      const { response, error } = await getaSV(
        `${endPoints.SUPER_VISOR}/${user?.userId}`
      );
      if (response && !error) {
        setRegionId(response.data.region._id)
        console.log("svResponsesdsfsdfsdfsdfsd",response.data);
        
      } else {
        console.error(error.response.data.message);
      }
    } catch (err) {
      console.error("Error fetching Super Visor data:", err);
    }
  };
  
  const getARM = async () => {
    try {
      const { response, error } = await getaRM(`${endPoints.GET_ALL_RM}/${user?.userId}`);
      if (response && !error) {
       setRegionId(response.data.regionManager.region._id)

      } else {
        console.error(error.response.data.message);
      }
    } catch (err) {
      console.error("Error fetching AM data:", err);
    }
  };



  useEffect(() => {
    const fetchData = () => {
      fetchRegions();
      fetchDropdown();
      fetchAreas();
    
      getCountries();
      getBDAs();
      getAllUsersCounts();
      getAllCustomerCounts();
      getTicketsCounts()
      if(user?.role==="Supervisor"){
        getASV()
      }else if(user?.role==="Region Manager"){
        getARM()
      }
    };
  
    // Fetch data immediately on mount
    fetchData();
  
    // Set an interval to fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 1000);
  
    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [user]);

 
  

  return (
    <ApiContext.Provider
    value={{
      allRegions,
      allAreas,
      allCountries,
      allBDA,
      totalCounts,
      customersCounts,
      dropdownRegions: dropdownApi?.regions || [],
      dropDownAreas:dropdownApi?.areas||[],
      dropDownBdas:dropdownApi?.bdas||[],
      dropDownSA:dropdownApi?.supportAgents||[],
      allTicketsCount,
      regionId,
      dropDownWC:dropdownApi?.commissions||[]
    }}  >
      {children}
    </ApiContext.Provider>
  );
};

export const useRegularApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
