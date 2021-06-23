import React from 'react';
import XLSX from 'xlsx'; 
import './xls_style.css'

function TableToXls() {  
    const exportFile = () =>{  
        var wb = XLSX.utils.table_to_book(document.getElementById('sampleTable'));
        XLSX.writeFile(wb, 'sample.xlsx'); 
    };
 
    return (
        <div>
            <table id="sampleTable" className="uk-report-table table table-striped">
                <thead>
                    <tr>
                        <th colSpan="1" rowSpan='2'>Date Range</th>
                        <th colSpan="2">Last 30 Days</th>
                        <th colSpan="2">Previous 30 Days</th>
                    </tr>
                    <tr> 
                        <th>Purchase</th>
                        <th>Sale</th>
                        <th>Purchase</th>
                        <th>Sale</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Apple</td>
                        <td>800</td>
                        <td>900</td>
                        <td>700</td>
                        <td>1200</td>
                    </tr>
                    <tr>
                        <td>Banana</td>
                        <td>800</td>
                        <td>900</td>
                        <td>700</td>
                        <td>1200</td>
                    </tr>
                    <tr>
                        <td>Orange</td>
                        <td>800</td>
                        <td>900</td>
                        <td>700</td>
                        <td>1200</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={()=>exportFile()}> Export </button> 
        </div>
    )
} 
export default TableToXls
