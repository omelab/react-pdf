import React from 'react';
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function SimpleXls() {
    const wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "SheetJS Tutorial",
        Subject: "Test",
        Author: "Red Stapler",
        CreatedDate: new Date(2017,12,19)
    };

    wb.SheetNames.push("Test Sheet");

    const ws_data = [['hello' , 'world']]; 

    const ws = XLSX.utils.aoa_to_sheet(ws_data);

    wb.Sheets["Test Sheet"] = ws;


    const wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

    const s2ab = (s) => { 
        var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
        var view = new Uint8Array(buf);  //create uint8array as viewer
        for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
        return buf;    
    }   

    const exportXls = () =>{ 
        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
    };


    return (
        <div>
            this is simple xls component 
            <button onClick={() => exportXls()}> export xls</button>
        </div>
    )
} 
export default SimpleXls
