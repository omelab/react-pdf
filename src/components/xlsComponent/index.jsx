import React, {useEffect, useState} from 'react';
import XLSX from 'xlsx'; 
import './xls_style.css'

function XlsComponent() { 
    const [jsonData, setJsonData] = useState([]);

    //get user info
    const getJsonData = () => { 
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setJsonData(data)); 
    }
    
    //load data
    useEffect(() => { 
        getJsonData();
    }, [])

    const handleDownload = () => { 
        
        // Data to be exported
        let exportArr = jsonData||[];

        // Customize the downloaded header, pay attention to the array in the array
        let Header = [['ID','Name','User Name','Email','Address','Phone', 'Website', 'Company']];
 
        // Description in the official document: converts an array of arrays of JS data to a worksheet.
        const headerWs = XLSX.utils.aoa_to_sheet(Header);
        const ws = XLSX.utils.sheet_add_json(headerWs, exportArr, {skipHeader: true, origin: "A2"});
  
        // const merge = [{ s: { r: 0, c: 0 }, e: { r: 0, c:8 } }];

        //cell marge
        // ws["!merges"] = merge

        /* Create an empty workbook, and then add the worksheet */
        const wb = XLSX.utils.book_new();

        // You can customize the Sheet Name after downloading
        XLSX.utils.book_append_sheet(wb, ws, "sheet 01");

        /* Generate xlsx file */
        XLSX.writeFile(wb, "Download.xlsx"); 
    } 

    return (
        <div> 
            <button onClick={()=>handleDownload()}> Export </button> 
        </div>
    )

} 
export default XlsComponent
