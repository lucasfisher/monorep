import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddScan extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        ID:null,
        status:null,
        repoName:null,
        findings:null,
        queuedAt:null,
        scanningAt:null,
        finishedAt:null
    }

    //Call parent function to add the new Scan entry
    submitScan = () => {
        //console.log(this.state)
        this.props.addScan(this.state);
    }


    //Whenever a character is entered into the text fields
    //this function updates the state of the respective field
    changeValue = (val) => {
        //console.log(val.target.name);
        this.setState( { [val.target.name]:val.target.value });
       // console.log(this.state)
    }



    render(){
        return (
            <div className={"addScan"}>
                Add A Mock Scan Result
                <form onSubmit={this.submitScan}>
                <div className={"scanItem"}>
                    ID:<br />
                    <input name ="ID" onChange={this.changeValue.bind(this)} type={"text"} />
                </div>
                <div className={"scanItem"}>
                    Status: <br />
                    <input name="status" onChange={this.changeValue.bind(this)} type={"text"} />
                </div>
                <div className={"scanItem"}>
                    Repo Name:<br />
                    <input name="repoName" onChange={this.changeValue.bind(this)} type={"text"} />
                </div>
                <div className={"scanItem"}>
                    Findings:<br />
                    <input placeholder="Must be Valid JSON text IE :  {'findings':[1,2,3] }" name="findings" onChange={this.changeValue.bind(this)} style={{width:"98%", height:"80px"}} type={"text"} />
                </div>
                <div className={"scanItem"}>
                    Queued At:<br />
                    <input name="queuedAt" onChange={this.changeValue.bind(this)} type={"datetime-local"} />
                </div>

                <div className={"scanItem"}>
                    Scanning At:<br />
                    <input name="scanningAt" onChange={this.changeValue.bind(this)} type={"datetime-local"} />
                </div>

                <div className={"scanItem"}>
                    Finished At :
                    <input name="finishedAt" onChange={this.changeValue.bind(this)} type={"datetime-local"} />
                </div>
                    <input type={"submit"} value={"Submit New Scan"} />
                </form>
            </div>
        );
    }
}

AddScan.propTypes = {};

export default AddScan;