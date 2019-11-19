import React, { Component } from 'react';
import Links from './links.js';





class Navigation extends Component {


    state = {

    };



    render() {
    //console.log(this.props);
        const linkItems = [{id: 1, title: "Home"},
            {id: 2, title:"About"},
            {id: 3, title:"Contact"}];
        return (
            <div>

                <div className={"navStyle"} >
                    <ul>
                        <Links className="links" links={linkItems} />
                    </ul>

                </div>
            </div>
        );
    }
}

export default Navigation;