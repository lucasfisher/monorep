import React, { Component } from 'react';
import ScanView from './scanView.js';

class ScanList extends Component{
    constructor(props){
        super(props)
        this.IDRef = React.createRef();
    }
    state={
        datum:null,
        selectedScan:null
    }
    componentDidMount(){
        this.props.getList()
            .then(response => this.setState({datum: response}));

    }

    selectThisScan = (item) => {
        console.log("hello?")
        console.log(item)
        if(item != null){
            this.setState({selectedScan: item});
        }

    }

    getResultList= () => {
        if(this.state.datum === null){
            return (
                <div>
                    Loading...
                </div>
            )
        }else{
            console.log(this.state.datum)
            return(
                <div className={"scanInterface"} >
                    <div className={"scanList"}>
                        Scans Currently in Database
                        {this.state.datum.data.map((item) =>(

                            <div key={item.ID} className={"scan"} onClick={() => {this.selectThisScan(item)} } >
                                { JSON.parse(item.findings).findings.length > 0 &&
                                    (<span className={"customBadge"}> {JSON.parse(item.findings).findings.length}</span>)
                                }
                                 <div className={"scanItem"} ref={this.IDRef} >
                                    ID: {item.ID}
                                </div>
                                <div className={"scanItem"}>
                                    Status: {item.status}
                                </div>
                                <div className={"scanItem"}>
                                    Repo Name: {item.repositoryName}
                                </div>
                                 <div className={"scanItem"}>
                                    Findings: {item.findings.toString()}
                                </div>
                               <div className={"scanItem"}>
                                    Queued At:{item.queuedAt}
                                </div>

                                <div className={"scanItem"}>
                                    Scanning At:{item.scanningAt}
                                </div>

                                <div className={"scanItem"}>
                                    Finished At : {item.finishedAt}
                                </div>
                            </div>
                        ))}
                    </div>

                    <ScanView selectedScan={this.state.selectedScan}/>

                </div>
            )
        }

    }

    render(){
     return (

            this.getResultList()

        );
    };
}

export default ScanList;