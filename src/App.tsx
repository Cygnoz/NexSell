import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useRole } from './context/RoleContext';
import Layout from './layout/Layout';
import LeadHome from './modules/Customers/Lead/LeadHome';
import LeadView from './modules/Customers/Lead/LeadView';
import RegionManagerHome from './modules/RegionalManager/RegionManager/RegionManagerHome';
import AreaHome from './modules/SaleArea&Region/Area/AreaHome';
import RegionHome from './modules/SaleArea&Region/Region/RegionHome';
import RegionView from './modules/SaleArea&Region/Region/RegionView';
import AreaManagerView from './modules/SalesTeams/AreaManager/AreaManagerView';
import BDAView from './modules/SalesTeams/BDA/BDAView';
import SupportagentHome from './modules/Support/SupportAgent/SupportAgentHome';
import SupportAgentView from './modules/Support/SupportAgent/SupportAgentView';
import UserHome from './modules/Users/User/UserHome';
import UserLogHome from './modules/Users/UserLog/UserLogHome';
import DashboardPage from './pages/DashboardPage';
import Login from './pages/login/Login';
import Otp from './pages/login/Otp';
import BDAHome from './modules/SalesTeams/BDA/BDAHome';
import SupervisorHome from './modules/Support/Supervisor/SupervisorHome';
import TrialHome from './modules/Customers/Trial/TrialHome';
import LicensorHome from './modules/Customers/Licensor/LicensorHome';
import WCommisionHome from './modules/Users/WorkerCommision/WCommisionHome';
import TicketsHome from './modules/Tickets/TicketsHome';
import AreaManagerHome from './modules/SalesTeams/AreaManager/AreaManagerHome';
import AreaView from './modules/SaleArea&Region/Area/AreaView';
import RegionManagerView from './modules/RegionalManager/RegionManager/RegionManagerView';
// import RMViewForm from './modules/RegionalManager/RegionManager/RMViewForm';
import SuperVisorView from './modules/Support/Supervisor/SuperVisorView';
//import AreaView from './modules/SaleArea&Region/Area/AreaView';

const App: React.FC = () => {
  const { role} = useRole(); // Access the role from context


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/otp' element={<Otp/>}/>
        {role ? (
          // If role exists, show the layout with nested routes
          <Route path="/*" element={<Layout />}>
            {/* Define authenticated routes inside Layout */}
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="regions" element={<RegionHome />} />
            <Route path="regionView/:id" element={<RegionView />} />
            <Route path="leadView/:id" element={<LeadView />} />
            <Route path="areaView/:id" element={<AreaView/>} />
            <Route path="lead" element={<LeadHome />} />
            <Route path="area" element={<AreaHome />} />
            {/* Support Agent */}
            <Route path="support-agent" element={<SupportagentHome />} />
            <Route path='supportAgentView/:id' element={<SupportAgentView />} />
            <Route path="lead" element={<LeadHome />} />
            {/* Area Manager */}
            <Route path="area-manager" element={<AreaManagerHome />} />
            <Route path="amView/:id" element={<AreaManagerView/>} />
            {/* BDA */}
            <Route path="bda" element={<BDAHome />} />
            <Route path="bdaView/:id" element={<BDAView />} />
            <Route path="supervisor" element={<SupervisorHome />} />
            <Route path="supervisor/:id" element={<SuperVisorView />} />

            <Route path="trial" element={<TrialHome />} />
            <Route path="licenser" element={<LicensorHome />} />

            <Route path="region-manager" element={<RegionManagerHome />} />
            <Route path="region-managerView/:id" element={<RegionManagerView />} />

            <Route path="user" element={<UserHome/>} />
            <Route path="worker-commission" element={<WCommisionHome/>} />
            <Route path="tickets" element={<TicketsHome/>} />
            <Route path="user-log" element={<UserLogHome/>} />

         
           
           
            {/* Add more authenticated routes as needed */}
          </Route>
        ) : ( 
           // If not authenticated, show the login page 
          <Route path="*" element={<Login />} />
        )} 
      </Routes>
        <Toaster reverseOrder={false}/>
    </Router>
  );
};

export default App;
