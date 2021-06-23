import React, {useEffect, useState} from 'react'
import XlsComponent from './xlsComponent'

function Xls() {
    const [jsonData, setJsonData] = useState([]);
    const [headerData, setHeaderData] = useState([]);

    // const [formData, setFormData] = useState([]);

    //get user info
    const getJsonData = () => { 
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
            let header=[]; 
            for (const key in data[0]) {  header.push(key.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))); } 
            setHeaderData(header);
            setJsonData(data);
        }); 
    }
    
    //load data
    useEffect(() => { 
        getJsonData();
    }, [])
 
    // const handleChange = (e) =>{ 
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({ ...prevState, [name]: value })); 
    // }

    // let data = {};
    // data['test'] = formData;
    // console.log(data);
    // let test = 1;

    return (
        <div>
            <XlsComponent buttonText="Export XLSX" fileName={Math.random().toString(36).substring(7)}  data={jsonData} header={headerData}/>

            {/* car 1 collector 1 : <input type="text" name={`car[${test}][1]`} onChange={handleChange} />
            car 1 collector 2 : <input type="text" name="car[1][2]" onChange={handleChange} />
            car 1 collector 3 : <input type="text" name="car[1][3]" onChange={handleChange} /> <br/><br/>

            car 2 collector 1 : <input type="text" name="car[2][1]" onChange={handleChange} />
            car 2 collector 2 : <input type="text" name="car[2][2]" onChange={handleChange} />
            car 2 collector 3 : <input type="text" name="car[2][3]" onChange={handleChange} /> <br/><br/> */}
        </div>
    )
}

export default Xls
