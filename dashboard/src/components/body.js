import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScanList from './scanList.js';
import AddScan from './addScan.js';

import axios from 'axios';


class Body extends Component {

    state = {
    };

    // Returns the promise from axios which will eventually return the list
    getList(){
        return axios.get('http://localhost:3030/api/getSecurityScan');

    }

    //Posts the scan
    addScan(newScan){
        console.log(newScan)
        axios.post('http://localhost:3030/api/addSecurityScan',newScan);
    }

    render() {
        return (
            <div className={"mainView"}>
                <AddScan addScan={this.addScan} />
                <ScanList getList={this.getList} />


            </div>
        )
    }
}

Body.propTypes = {
    data:PropTypes.object
}
export default Body;