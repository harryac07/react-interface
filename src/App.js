import React, { Component } from 'react'
import data from '../public/javascripts/data.js'
import AptList from './AptList'
import _ from 'lodash'
// import axios from 'axios';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            myAppointments: []
        };
        this.deleteMessage=this.deleteMessage.bind(this);
    }

    componentWillMount() {
        this.setState({
            myAppointments:data
        });
     
    } // componentWillMount

    componentWillUnmount() {
        // this.serverRequest.abort();
    } // componentWillMount

    deleteMessage(item) {
        var allApts= this.state.myAppointments;
        var newApts = _.without(allApts,item); // use lodash to return array without item
        console.log(item);

        this.setState({
            myAppointments : newApts
        });
    } // deleteMessage

    render() {
        console.log(this.state.myAppointments);
        var filteredApts=this.state.myAppointments.map(function(item,i){
            return(
                <AptList key={i} singleItem={item} whichItem={item} onDelete={this.deleteMessage}/>
            );
        }.bind(this));
        return (
            <div className="interface">
                <ul className="item-list media-list">
                    {filteredApts}
                </ul>
            </div>
        );
    }

} //end of App

export default App;
