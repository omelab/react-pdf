import React, {Fragment} from 'react';
import { saveAs } from 'file-saver'; 

import {pdf, PDFViewer } from '@react-pdf/renderer';

import List from "./UserList"; 

const Users = (props) => {
    const generatePdf = async () => {  
        const doc = <List {...props} />;
        const asPdf = pdf([]); // {} is important, throws without an argument
        asPdf.updateContainer(doc);
        const blob = await asPdf.toBlob();
        saveAs(blob, 'document.pdf');
    } 
    return (
        <Fragment>
            <button onClick={generatePdf}>  Download PDF </button>  
            <PDFViewer width="1000" height="600" className="app" >
                <List />
            </PDFViewer> 
        </Fragment>
    )
}; 

export default Users
