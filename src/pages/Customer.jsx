import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids/src";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../componenets";
const Customer = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />

      <GridComponent
        width="auto"
        dataSource={customersData}
        allowPaging={true}
        allowSorting={true}
        toolbar={["Delete"]}
        editSettings={{allowDeleting : true ,
        allowEditing : true
        }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Toolbar , Selection , Edit , Sort ,Filter  ]} />
      </GridComponent>
    </div>
  );
};

export default Customer;
