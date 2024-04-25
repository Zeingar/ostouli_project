import React from 'react'
import {Link} from 'react-router-dom'
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page,Edit,Toolbar,ExcelExport,PdfExport,} from '@syncfusion/ej2-react-grids';
import { employeesData, VehicleGrid } from '../data/dummy';
import { Header } from '../Components';
import{MdAddCircleOutline} from "react-icons/md"
const Vehicles = () => {
  const toolbarOptions=['Add','Edit','Delete','Update','Cancel','Search','ExcelExport','PdfExport'];

  const editing = { allowDeleting: true, allowEditing: true, allowAdding:true };
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex items-stretch mb-10">
        <Link to="/AddVehicle">
       <button className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center" >
       <MdAddCircleOutline/>AddVehicle</button>
      </Link>
      <Link to="/AddVehicle">
       <button className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center" >
       <MdAddCircleOutline/>Addtrailer
      </button>
      </Link>
      </div>
    <Header category="" title="Vehicles" />
    <GridComponent
      dataSource={employeesData}
      width="auto"
      allowPaging
      allowSorting
      pageSettings={{ pageCount: 5 }}
      editSettings={editing}
      toolbar={toolbarOptions}

      allowPdfExport={true}
   
    >
      <ColumnsDirective>
        {VehicleGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
      <Inject services={[Toolbar, Page , Edit ,Search, ExcelExport,PdfExport]} />

    </GridComponent>
   
   
    
  </div>
  );
};

export default Vehicles
