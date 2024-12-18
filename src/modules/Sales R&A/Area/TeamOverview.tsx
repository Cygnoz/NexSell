import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import LicenserCardIcon from "../../../assets/icons/LicenserCardIcon";
// import PhoneIcon from "../../../assets/icons/PhoneIcon";
import RupeeIcon from "../../../assets/icons/RupeeIcon";
// import Trophy from "../../../assets/icons/Trophy";
import UserIcon from "../../../assets/icons/UserIcon";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import profileImage from "../../../assets/image/AvatarImg.png";
import { Bar, BarChart, CartesianGrid, Cell, LabelList, Tooltip, XAxis, YAxis } from "recharts";

type Props = {};

interface AreaData {
  employeeId: string;
  bdaName: string;
  phoneNumber: string;
  emailAddress: string;
  dateOfJoining: string;
  totalLeads: string;
  leadsclosed: String;
}

const TeamOverview = ({}: Props) => {
  const handleEditDeleteView = (editId?: any, viewId?: any, deleteId?: any) => {
    if (viewId) {
      // navigate(`/areaView/${viewId}`)
      console.log(viewId);
    } else if (editId) {
      console.log(editId);
      // setId({...id,edit:editId})
    }
    console.log(deleteId);
  };

  // Data for HomeCards
  const homeCardData = [
    {
      icon: <UserIcon size={24} />,
      number: "167",
      title: "Total AM Manager",
      iconFrameColor: "#1A9CF9",
      iconFrameBorderColor: "#B3F0D3CC",
    },
    {
      icon: <AreaManagerIcon size={24} />,
      number: "86",
      title: "Total  BDA'S",
      iconFrameColor: "#D786DD",
      iconFrameBorderColor: "#BBD8EDCC",
    },
    {
      icon: <LeadsCardIcon size={40} />,
      number: "498",
      title: "Total Lead's",
      iconFrameColor: "#DD9F86",
      iconFrameBorderColor: "#FADDFCCC",
    },
    {
      icon: <LicenserCardIcon />,
      number: "2898",
      title: "Active License Count",
      iconFrameColor: "#8695DD",
      iconFrameBorderColor: "#CAD1F1CC",
    },
    {
      icon: <RupeeIcon size={50} />,
      number: "2898",
      title: "Revenue Generated",
      iconFrameColor: "#FCB23E",
      iconFrameBorderColor: "#FDE3BB",
    },
  ];

  // Data for the table
  const data: AreaData[] = [
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
    {
      employeeId: "AA-23344",
      bdaName: "Subi",
      phoneNumber: "14785258",
      emailAddress: "dudu@gmail.com",
      dateOfJoining: "2022-05-10",
      totalLeads: "30",
      leadsclosed: "44",
    },
  ];
  // Define the columns with strict keys
  const columns: { key: keyof AreaData; label: string }[] = [
    { key: "employeeId", label: "Employee ID" },
    { key: "bdaName", label: "BDA Name" },
    { key: "phoneNumber", label: "Phone Number" },
    { key: "emailAddress", label: "Email Address" },
    { key: "dateOfJoining", label: "Date Of Joining" },
    { key: "totalLeads", label: "Total leads" },
    { key: "leadsclosed", label: "Leads Closed" },
  ];

  const AreaRevData = [
    { name: "John ", pv: 74479, color: "#4caf50" }, // Green
    { name: "Emily", pv: 56335, color: "#2196f3" }, // Blue
    { name: "Michael ", pv: 43887, color: "#ff9800" }, // Orange
    { name: "Sophia ", pv: 19027, color: "#f44336" }, // Red
    { name: "David ", pv: 8142, color: "#9c27b0" }, // Purple
    { name: "Olivia", pv: 4918, color: "#3f51b5" }, // Blue
  ];
  const CustomizedAxisTick = ({ x, y, payload }: any) => {
    // Find the corresponding logo for the country

    return (
      <g transform={`translate(${x},${y})`}>
        <text y={2} fontSize={14} dy={3} textAnchor="end" fill="#666">
          {payload.value}
        </text>
      </g>
    );
  };

  const CustomLabel = ({ x, y, width, value }: any) => (
    <text
      x={x + width + 10}
      y={y + 13}
      fontSize={10}
      textAnchor="start"
      fill="#000"
    >
      {value}
    </text>
  );

    // Chart Data
    const ChartData = [
      { name: "Page A", uv: 3900, avatar: profileImage },
      { name: "Page B", uv: 3000, avatar: profileImage },
      { name: "Page C", uv: 2000, avatar: profileImage },
      { name: "Page D", uv: 2780, avatar: profileImage },
      { name: "Page E", uv: 1890, avatar: profileImage },
      { name: "Page F", uv: 2390, avatar: profileImage },
      { name: "Page G", uv: 3490, avatar: profileImage },
      { name: "Page H", uv: 4000, avatar: profileImage }
    ];
  
    // Normalize the data
    const maxValue = Math.max(...ChartData.map((entry) => entry?.uv));
    const normalizedData = ChartData.map((entry) => ({
      ...entry,
      uv: (entry?.uv / maxValue) * 100,
    }));
  
    // Custom Bubble Component
    const CustomBubble = (props: any) => {
      const { x, y } = props;
  
      if (x == null || y == null) return null;
      return (
        <div
          style={{
            position: "absolute",
            left: `${x - 4}px`,
            top: `${y - 8}px`,
            width: "8px",
            height: "8px",
            backgroundColor: "#30B777",
            borderRadius: "50%",
          }}
        />
      );
    };
  
    // Custom Bar Shape with Curved Top
    const CustomBarWithCurve = (props: any) => {
      const { x, y, width, height, fill } = props;
  
      if (!x || !y || !width || !height) return null;
  
      const radius = width / 2;
      const gap = 2;
  
      return (
        <>
          <rect
            x={x}
            y={y + gap}
            width={width}
            height={height - radius - gap}
            fill={fill}
            rx={radius}
            ry={radius}
          />
          <circle
            cx={x + radius}
            cy={y - radius + gap}
            r={radius}
            fill="#30B777"
          />
        </>
      );
    };

  return (
    <div>
      {/* HomeCards Section */}
      <div className="flex gap-3 py-2 justify-between">
        {homeCardData.map((card, index) => (
          <HomeCard
            iconFrameColor={card.iconFrameColor}
            iconFrameBorderColor={card.iconFrameBorderColor}
            key={index}
            icon={card.icon}
            number={card.number}
            title={card.title}
          />
        ))}
      </div>

      {/* Table Section */}
      <div>
        <Table<AreaData>
          data={data}
          columns={columns}
          headerContents={{
            title: "BDA,s",
            search: { placeholder: "Search BDA By Name" },
            // sort: [
            //       {
            //         sortHead: "Filter",
            //         sortList: [
            //           { label: "Sort by Name", icon: <UserIcon size={14} color="#4B5C79"/> },
            //           { label: "Sort by Age", icon: <RegionIcon size={14} color="#4B5C79"/> },
            //           { label: "Sort by Name", icon: <AreaManagerIcon size={14} color="#4B5C79"/> },
            //           { label: "Sort by Age", icon: <CalenderDays size={14} color="#4B5C79"/> }
            //         ]
            //       }
            // ]
          }}
          actionList={[{ label: "view", function: handleEditDeleteView }]}
        />
      </div>
      {/* Graph Section*/}
      <div className="grid grid-cols-12 gap-3 mt-3">
        <div className="col-span-7 mb-4">
          <div className="bg-white rounded-lg w-full ">
            <div className="p-4 space-y-2">
              <h1 className="text-lg font-bold">
                Sales Revenue By Team Member
              </h1>
              <h2 className="text-md">Area 0234</h2>
              <h2 className="text-md font-medium text-2xl">₹ 76,789,87</h2>
            </div>
            <div>
              <BarChart
                width={800}
                height={300}
                data={AreaRevData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={<CustomizedAxisTick />}
                  tickLine={false}
                  axisLine={{ stroke: "#000" }} // Y axis line
                />
                <XAxis
                  type="number"
                  tick={{ fontSize: 10 }}
                  axisLine={{ stroke: "transparent" }} // Remove X axis line
                  tickLine={false} // Remove ticks on the X axis
                />
                <Tooltip />
                <Bar
                  dataKey="pv"
                  radius={[5, 5, 5, 5]}
                  barSize={20}
                  label={<CustomLabel />}
                >
                  {AreaRevData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </div>
        </div>
        <div className="col-span-5 ">
          <div className="w-full h-fit p-4 bg-white rounded-lg">
                     <p className="text-[#303F58] text-lg font-bold p-3">
                       Top performing BDA's
                     </p>
                     <p className="text-[#4B5C79] text-xs font-normal p-3">
                       Based on lead Conversion Performance Metric
                     </p>
         
                     <div className="relative">
                       <BarChart
                         className="h-fit"
                         barGap={54}
                         barCategoryGap="40%"
                         width={550}
                         height={295}
                         data={normalizedData}
                       >
                         {/* Cartesian Grid */}
                         <CartesianGrid
                           horizontal={true}
                           vertical={false}
                           strokeDasharray="3 3"
                           stroke="#e0e0e0"
                         />
         
                         {/* Y-Axis */}
                         <YAxis
                           tickFormatter={(tick) => `${tick}%`}
                           domain={[0, 100]}
                           ticks={[0, 20, 40, 60, 80, 100]}
                           axisLine={false}
                           tickLine={false}
                         />
         
                         {/* Bar with custom curved shape */}
                         <Bar
                           dataKey="uv"
                           fill="#B9E3CF"
                           barSize={8}
                           shape={<CustomBarWithCurve />}
                         >
                           {/* Add bubbles at the top */}
                           <LabelList
                             dataKey="uv"
                             content={(props) => <CustomBubble {...props} />}
                           />
                         </Bar>
                       </BarChart>
                       <div className="flex ms-[85px] gap-[40px] -mt-2">
                         {ChartData.map((chart) => (
                           <img
                             className="w-5 h-5 rounded-full"
                             src={chart.avatar}
                             alt=""
                           />
                         ))}
                       </div>
                     </div>
                   </div>
        </div>
      </div>
    </div>
  );
};

export default TeamOverview;
