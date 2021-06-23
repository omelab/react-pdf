import React  from 'react';
// import XLSX from 'xlsx'; 
import XLSX from 'sheetjs-style';
import './xls_style.css'

function XlsComponent(props) {  

    const handleDownload = () => { 
        // Data to be exported
        let exportArr = props.data||[];

        // Customize the downloaded header, pay attention to the array in the array
        let Header = props.header||[];

        // Description in the official document: converts an array of arrays of JS data to a worksheet.
        const headerWs = XLSX.utils.aoa_to_sheet([Header]);
        const ws = XLSX.utils.sheet_add_json(headerWs, exportArr, {skipHeader: true, origin: "A2"});
 
        const excelCell = {
            v: "",
            t: "s",
            s: {
                fill: {
                    patternType: "none",
                    fgColor: {rgb: "FF000000"},
                    bgColor: {rgb: "FFFFFFFF"}
                },
                font: {
                  name: 'Times New Roman',
                  sz: 13,
                  color: {rgb: "#FF000000"},
                  bold: false,
                  italic: false,
                  underline: false
                },
                alignment: {
                    vertical: "center",
                    horizontal: "center",
                    indent:0,
                    wrapText: true
                },
                border: {
                  top: {style: "thin", color: {auto: 1}},
                  right: {style: "thin", color: {auto: 1}},
                  bottom: {style: "thin", color: {auto: 1}},
                  left: {style: "thin", color: {auto: 1}}
                }
            }
        };

        const headerCellStyle =  { 
            fill: {
                patternType: "solid",
                fgColor: {rgb: "FFdbdbdb"},
                bgColor: {rgb: "FFdbdbdb"}
            },
                alignment: {
                vertical: "center",
                horizontal: "center",
                indent:0,
                wrapText: true
            },
            border: {
                top: {style: "thin", color: {auto: 1}},
                right: {style: "thin", color: {auto: 1}},
                bottom: {style: "thin", color: {auto: 1}},
                left: {style: "thin", color: {auto: 1}}
            }
        };
        
        const celLimit = Header.length||0;
        const headRange = {s:{c:0, r:0}, e:{c:celLimit, r:0}};

        for (let R = headRange.s.r; R <= headRange.e.r; ++R) {
            for (let C = headRange.s.c; C <= headRange.e.c; ++C) {
                let cell_address = {
                    c: C,
                    r: R
                };

                /* if an A1-style address is needed, encode the address */
                var cell_ref = XLSX.utils.encode_cell(cell_address);
                var cell = ws[cell_ref]; 
                //cell.s = headerCellStyle;
                
                // eslint-disable-next-line no-undef
                if(typeof cell === 'undefined' || Object.keys(cell).length === 0) {
                    ws[cell_ref] = excelCell;
                } else {
                    cell.s = headerCellStyle;
                }
            }
        }
       
 
        
        //ws["A1"].v = "hello";
        
        // ws["A1"].s = {
        //     font: { 
        //         name:"Calibri",
        //         sz: 24,
        //         bold: true,
        //         color: { rgb: "FFFFAA00" }
        //     },
        //     fill:{
        //         patternType:"solid",
        //         bgColor:{ rgb: "000000" }
        //     },
        //     alignment:{
        //         horizontal:"center"
        //     }
        // };
  
        // const merge = [{ s: { r: 0, c: 0 }, e: { r: 0, c:8 } }];

        //cell marge
        // ws["!merges"] = merge

        /* Create an empty workbook, and then add the worksheet */
        const wb = XLSX.utils.book_new();

        // You can customize the Sheet Name after downloading
        XLSX.utils.book_append_sheet(wb, ws, "sheet 01");

        /* Generate xlsx file */
        let fileName = props.fileName ||'Download';
        XLSX.writeFile(wb, `${fileName}.xlsx`); 
    } 

    return (
        <div> 
            <button onClick={()=>handleDownload()}> {props.buttonText || "Export xlsx"} </button> 
        </div>
    ) 
} 
export default XlsComponent

 