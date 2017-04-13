import React, { Component } from 'react'
import data from '../public/javascripts/data.js'
import AptList from './AptList'
import AddAppointment from './AddAppointment'
import SearchAppointments from './SearchAppointments'
import _ from 'lodash'
// import axios from 'axios';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            myAppointments: [],
            aptBodyVisible : false,
            orderBy :'petName',
            orderDir: 'asc',
            queryText : ''
        };
        this.deleteMessage=this.deleteMessage.bind(this);
        this.toggleAddDisplay = this.toggleAddDisplay.bind(this);
        this.addItem = this.addItem.bind(this);
        this.reOrder=this.reOrder.bind(this);
        this.searchApts = this.searchApts.bind(this);
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

    toggleAddDisplay() {
        var tempVisibility = !this.state.aptBodyVisible;
        this.setState({
            aptBodyVisible : tempVisibility
        })
    } //toggleAddDisplay

    addItem(tempItem){
        var tempApts = this.state.myAppointments;
        // tempApts.push(tempItem);
        this.setState({
            myAppointments :[...tempApts,tempItem]
        });
    }//addItem

    reOrder(orderBy,orderDir) {
        this.setState({
            orderBy:orderBy,
            orderDir:orderDir
        });
    }//reOrder

    searchApts(query) {
        this.setState({
            queryText:query
        });
    }//searchApts

    render() {
        var orderBy = this.state.orderBy;
        var orderDir = this.state.orderDir;
        var queryText = this.state.queryText;
        var filteredApts=[];
        var myAppointments = this.state.myAppointments;

        myAppointments.forEach(function(item){
            if(
                (item.petName.toLowerCase().indexOf(queryText) !==-1) ||
                (item.ownerName.toLowerCase().indexOf(queryText) !==-1) ||
                (item.aptDate.toLowerCase().indexOf(queryText) !==-1) ||
                (item.aptNotes.toLowerCase().indexOf(queryText) !==-1) 
            ){
                filteredApts.push(item);
            }
        });

        filteredApts = _.orderBy(filteredApts,function(item){ // use lodash to filter
            return item[orderBy].toLowerCase();
        },orderDir); // orderBy

        filteredApts=filteredApts.map(function(item,i){
            return(
                <AptList key={i} singleItem={item} whichItem={item} onDelete={this.deleteMessage}/>
            );
        }.bind(this));
        return (
            <div className="interface">
                <AddAppointment bodyVisible={this.state.aptBodyVisible} handleToggle={this.toggleAddDisplay} addApt={this.addItem} />
                <SearchAppointments orderBy={this.state.orderBy} orderDir={this.state.orderDir} onReOrder={this.reOrder} onSearch={this.searchApts}/>
                <ul className="item-list media-list">
                    {filteredApts}
                </ul>
            </div>
        );
    }

} //end of App

export default App;
