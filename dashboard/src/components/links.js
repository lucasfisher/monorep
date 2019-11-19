import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  '../styles.css';

class Links extends Component {

        style={};
        state={
            linkClassName:''
        }

    render() {
        console.log(this.props.links);

        return (

            this.props.links.map((link) => (

                        <li key={link.id}  className="link" >
                            {link.title}
                        </li>

            ))


        );
    }
}

Links.propTypes={
    Links:PropTypes.array
}

export default Links;