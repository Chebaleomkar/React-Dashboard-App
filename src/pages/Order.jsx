import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, ContextMenu, Page, Inject, Edit, ExcelExport, Filter, PdfExport,Sort , Resize } from '@syncfusion/ej2-react-grids';

import { Header } from '../componenets';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

const Order = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders" />

      <GridComponent
      //  id='gridcomp'
       dataSource={ordersData} 
       allowPaging={true} 
       allowSorting={true}
      
      >

        <ColumnsDirective>
          {ordersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>

       <Inject
        services={[
          Resize ,
          Sort,
          ContextMenu,
          Filter,
          Page,
          ExcelExport,
          Edit,
         PdfExport
        ]}
       />

      </GridComponent>
    </div>
  );
};

export default Order;
