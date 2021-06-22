import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import logo from '../../assets/logo.png'; 
import { getFirstChild } from 'parse5/lib/tree-adapters/default';

const UserList = () => {
    return ( 
        <Document>
            <Page style={styles.body}>
                <View style={styles.header} fixed> 
                    <Image style={styles.logo} src={logo}/>
                    <Text style={styles.headerText}>  Apsis Solutions Ltd. </Text>  
                </View>  
                <View style={styles.tableRow}>
                    <View style={styles.tableHead}><Text>Date</Text></View>
                    <View style={[styles.tableHead, styles.HeadParent]}>
                        <View style={[styles.subHead, styles.subFirst]}>
                            <View style={[styles.subCell, styles.subFirst]}><Text>Topic</Text></View>
                        </View>
                        <View style={styles.subHead}> 
                            <View style={[styles.subCell, styles.subFirst]}><Text>Topic</Text></View>
                            <View style={styles.subCell}><Text>Topic</Text></View>
                        </View>
                    </View>
                    <View style={styles.tableHead}><Text>Access Link</Text></View>
                    <View style={styles.tableHead}><Text>Access Link</Text></View>
                    <View style={styles.tableHead}><Text>Access Link</Text></View>
                    <View style={styles.tableHead}><Text>Replay</Text></View>
                    <View style={[styles.tableHead, styles.tableHeadLast]}><Text>Checklist</Text></View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text><strong>2021-05-12</strong></Text></View>
                    <View style={styles.tableCell}><Text>The “Rock-Solid”</Text></View>
                    <View style={styles.tableCell}><Text>Foundations Quickstart</Text></View>
                    <View style={styles.tableCell}><Text>#Link</Text></View>
                    <View style={styles.tableCell}><Text>#reply</Text></View>
                    <View style={styles.tableCell}><Text>list here</Text></View>
                    <View style={styles.tableCell}><Text>Quickstart</Text></View>
                    <View style={[styles.tableCell, styles.tableCellLast]}><Text>list here</Text></View>
                </View> 
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
    tableRow:{  
        flexDirection: 'row',
        flexWrap: 'nowrap',   
        alignContent: 'space-between',
        justifyContent:'flex-start',
        width:'100%', 
        alignItems:'center',
    }, 
    tableHead:{ 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems:'center',
        width:'12%', 
        backgroundColor:'#353554',
        color:'#fff',
        borderLeft:'1px solid #000',
        borderTop:'1px solid #000',
        borderBottom:'1px solid #000',
        fontSize:11,
        padding:'5 7 3', 
        fontWeight: 700, 
        height:'100%',
    },
    tableHeadLast:{ 
        borderRight:'1px solid #000', 
    }, 
    HeadParent:{
        padding:0,
        width:'24%'
    },
    subHead:{ 
        flexDirection: 'row',
        flexWrap: 'wrap',  
        justifyContent:'center',
        borderTop:'1px solid #000',  
        width:'100%',
        padding:0,
    },
    subFirst:{
        borderWidth:0
    },
    subCell:{  
        padding:'3 7 3', 
        borderLeft:'1px solid #000', 
        flexDirection: 'column', 
        overflow: 'hidden',
        width:'50%', 
        textAlign:'center'
    },
    tableCell:{ 
        flexDirection: 'column', 
        overflow: 'hidden', 
        width:'12%',  
        color:'#000',
        borderLeft:'1px solid #000', 
        borderBottom:'1px solid #000',
        fontSize:9,  
        padding:'3 5',  
        justifyContent:'center', 
        alignItems:'center',
        height:'100%',
    },
    tableCellLast:{  
        borderRight:'1px solid #000', 
    }, 
});
  
export default UserList
