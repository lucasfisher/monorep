import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScanView extends Component {
    constructor(props) {
        super(props);

    }


    displaySelection = () => {
        if(this.props.selectedScan == null) return;
       // console.log(this.props.selectedScan)

        //Findings is a field in the json object for a particular scan
        //this field has the Json Text for a scan but also has
        //a findings key as the only key in the JSON
        //Therefore we need findings.findings like so
        var findings = JSON.parse(this.props.selectedScan.findings);
        findings = findings.findings
       // console.log(findings)


        return(
            <div>
                {
                    findings.map(item => {

                    return (<div className={"finding"}>
                        <div className={"information"}>
                            RuleId:<br />{ item.ruleId}
                        </div>
                        <div className={"information"}>
                            Description: <br />{item.metadata.description}
                        </div>
                        <div className={"information"}>
                                Severity:<br />
                            {item.metadata.severity}
                        </div>
                        <div className={"information"}>
                            Located At:<br />
                            {item.location.path} <br />Line No: <br />
                            {item.location.positions.begin.line}
                        </div>

                        </div>)


                  })
                }
            </div>
        )


    }

    render() {
        return (
            <div className={"scanView"}>

                {this.displaySelection() }
            </div>
        );
    }
}

ScanView.propTypes = {};

export default ScanView;