import React, { useContext, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { DarkTheme } from '../../App';

const Datatables = () => {

    const darkTheme = useContext(DarkTheme)
    const [rowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
        { make: "Toyota", model: "Celica", price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
    ]);

    const [columnDefs] = useState([
        { field: "make", headerName: 'Make', sortable: true, filter: true, resizable: true },
        { field: "model", headerName: 'Model', sortable: true, filter: true, resizable: true },
        { field: "price", headerName: 'Price', sortable: true, filter: true, resizable: true },
        { field: "price1", headerName: 'Price 1', sortable: true, filter: true, resizable: true },
        { field: "price2", headerName: 'Price 2', sortable: true, filter: true, resizable: true },
        { field: "price3", headerName: 'Price 3', sortable: true, filter: true, resizable: true },
        { field: "price4", headerName: 'Price 4', sortable: true, filter: true, resizable: true },
    ]);

    return (
        <div className="" style={{ maxHeight: 400 }}>
            <div className={darkTheme[0] ? "ag-theme-alpine-dark" : "ag-theme-alpine"} >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    enableFilter={true}
                >

                </AgGridReact>
            </div>
        </div>
    );
};
export default Datatables