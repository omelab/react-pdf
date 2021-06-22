import React, {useEffect, useState} from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import logo from '../../assets/logo.png'
import { Table, TableHeader, TableBody, TableCell, DataTableCell } from "@david.kucsai/react-pdf-table";
  
const DemoTable = () => {
    const [state, setState] = useState([]);
    const [post, setPost] = useState([]);
    
    const getUserInfo = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setState(data));
    }

    const getPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPost(data));
    }

    useEffect(() => { 
        getUserInfo();
        getPost();
    }, []);

    console.log(state);

    return ( 
        <Document>
            <Page style={styles.body}>
                <View style={styles.header} fixed> 
                    <Image style={styles.logo} src={logo}/>
                    <Text style={styles.headerText}>  Apsis Solutions Ltd. </Text> 
                </View> 
                <Table
                    data={state}
                >
                    <TableHeader>
                        <TableCell weighting={2}   style={{backgroundColor:'#353554', color:'#fff', textAlign:'center', padding:'5px 10px', fontSize:10}}> ID </TableCell>
                        <TableCell weighting={10}  style={{backgroundColor:'#353554', color:'#fff', textAlign:'center', padding:'5px 10px', fontSize:10}}> Name </TableCell>
                        <TableCell weighting={10}  style={{backgroundColor:'#353554', color:'#fff', textAlign:'center', padding:'5px 10px', fontSize:10}}> Username </TableCell>
                        <TableCell weighting={10}  style={{backgroundColor:'#353554', color:'#fff', textAlign:'center', padding:'5px 10px', fontSize:10}}> Email  </TableCell> 
                        <TableCell weighting={10}  style={{backgroundColor:'#353554', color:'#fff', textAlign:'center', padding:'5px 10px', fontSize:10}}> Phone </TableCell>
                        <TableCell weighting={10}  style={{backgroundColor:'#353554', color:'#fff', textAlign:'center', padding:'5px 10px', fontSize:10}}> Website </TableCell> 
                    </TableHeader> 
                    <TableBody>
                        <DataTableCell style={{ padding:'5px 10px', overflow:'hidden', fontSize:8}} weighting={2}  getContent={(r) => r.id}/>
                        <DataTableCell style={{ padding:'5px 10px', overflow:'hidden', fontSize:8}} weighting={10} getContent={(r) => r.name}/>
                        <DataTableCell style={{ padding:'5px 10px', overflow:'hidden', fontSize:8}} weighting={10} getContent={(r) => r.username}/>
                        <DataTableCell style={{ padding:'5px 10px', overflow:'hidden', fontSize:8}} weighting={10} getContent={(r) => r.email}/> 
                        <DataTableCell style={{ padding:'5px 10px', overflow:'hidden', fontSize:8}} weighting={10} getContent={(r) => r.phone}/>
                        <DataTableCell style={{ padding:'5px 10px', overflow:'hidden', fontSize:8}} weighting={10} getContent={(r) => r.website}/> 
                    </TableBody>
                </Table>  
                <Text><br/> &nbsp;</Text>
                <Table
                    data={post} 
                > 
                    <TableHeader>
                        <TableCell weighting={2}   style={{backgroundColor:'#353554', color:'#fff', textAlign:'center', padding:'5px 10px', fontSize:10}}> ID </TableCell>
                        <TableCell weighting={10}  style={{backgroundColor:'#353554', color:'#fff', textAlign:'center', padding:'5px 10px'}}> Title </TableCell>
                        <TableCell weighting={10}  style={{backgroundColor:'#353554', color:'#fff', textAlign:'center', padding:'5px 10px'}}> Body </TableCell> 
                    </TableHeader> 
                    <TableBody>
                        <DataTableCell style={{ padding:'5px 10px', overflow:'hidden', fontSize:8}} weighting={2}  getContent={(r) => r.userId}/>
                        <DataTableCell style={{ padding:'5px 10px', overflow:'hidden', fontSize:8}} weighting={10} getContent={(r) => r.title}/>
                        <DataTableCell style={{ padding:'5px 10px', overflow:'hidden', fontSize:8}} weighting={10} getContent={(r) => r.body}/> 
                    </TableBody>
                </Table>   
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    )
}

//embad fonts
Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

//custom fonts
const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald'
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
        flexDirection: "row",
        flexWrap: "wrap", 
        marginBottom: 20, 
        justifyContent:'center',
        alignItems:'center'
    },  
    logo:{
        width:50, 
        float: 'left' 
    },
    headerText: {
      fontSize: 16,  
      color: 'darkblue',
      textAlign:'left', 
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    }, 
});
  
export default DemoTable
