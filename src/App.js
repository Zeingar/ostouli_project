import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {Footer,Sidebar,Navbar} from "./Components";
import {Contacts,Dashboard,Employees,ReportsandFinancial,FuelHistory,Inspections,WorkOrders,Services,ServiceReminder,ServiceHistory,Vehicles,VehicleAssignment,Warehouse,Maps,AddVehicle,AddTrailer}
from './pages/index.jsx';
import { Usestatecontext } from './contexts/ContextProvider';
import './App.css';

const App = () => {
const {activeMenu} = Usestatecontext();
  return (
    <div className='bg-white'>
    <BrowserRouter>
      <div className="flex relative">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent
            content="Settings"
            position="Top"
          >
            <button
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
              <FiSettings />
            </button>

          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar bg-[#026AAA] ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 ">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>


                {/* paths and routes */}
                <Routes>
                {/*lists*/}
                {/* grids with data from Dummy data js file */}
                  <Route path="/" element={<Dashboard/>}/>
                  <Route path='/Vehiclelist' element={<Vehicles/>}/>
                  <Route path='/AddVehicle' element={<AddVehicle/>}/>
                  <Route path='/AddTrailer' element={<AddTrailer/>}/>
                  <Route path="/Services" element={<Services/>}/>
                  <Route path="/Service history" element={<ServiceHistory/>}/>
                  <Route path='/Inspections' element={<Inspections/>}/>
                  <Route path="/Employees" element={<Employees/>}/>
                  <Route path="/ReportsandFinancial" element={<ReportsandFinancial/>}/>
                  <Route path="/Maps" element={<Maps/>}/>
                  <Route path="/FuelHistory" element={<FuelHistory/>}/>
                  <Route path="Contacts" element={<Contacts/>}/>
                  <Route path="Warehouse" element={<Warehouse/>}/>
                  <Route path='Servicereminders' element={<ServiceReminder/>}/>
                  {/* *  Active components using  apps * */}
                  {/* Calandersyfunction library */}
                  <Route path="/VehicleAssignment" element={<VehicleAssignment/>}/>  
                  {/* kanban syfunction library */}
                  <Route path="/Workorders" element={<WorkOrders/>}/>
                </Routes>
                </div>
                <Footer/>
              </div>
              </div>
        </BrowserRouter>
        </div>
  );
};

export default App
