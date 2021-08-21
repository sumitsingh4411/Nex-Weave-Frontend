import React from 'react'
import Header from '../header/Header'
import Top from '../header/Top';
import TableStyle from './../table/TableStyle';

function Home() {
    return (
        <div>
            <Header />
            <div style={{ marginLeft: 300, marginRight: 30 }}>
                <Top />
                <TableStyle />
            </div>
        </div>
    )
}

export default Home
