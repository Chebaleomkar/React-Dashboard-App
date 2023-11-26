import React from 'react';
import {Toolbar ,GridComponent , ColumnDirective , Page ,Search , Inject , ColumnsDirective } from '@syncfusion/ej2-react-grids';

import { Header } from '../componenets';
import { employeesData , employeesGrid } from '../data/dummy';


const Employee = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders" />

      <GridComponent
        width="auto"
       dataSource={employeesData} 
       allowPaging={true} 
       allowSorting={true}
       toolbar={['Search']}
      
      >

        <ColumnsDirective>
          {employeesGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>

       <Inject
        services={[
         Page ,
         Search,
         Toolbar
        ]}
       />

      </GridComponent>
    </div>
  );
};

export default Employee;
