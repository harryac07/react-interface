import React, { Component } from 'react'


class AptList extends Component{

    constructor(props){
        super(props);

        this.handleDelete=this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.whichItem); // sending the whichitem value to delete
    }

    render() {
        return(
            <li className="pet-item media">
                <div className="media-left">
                    <button className="btn btn-xs btn-danger pet-delete" onClick={this.handleDelete}>
                        <span className="glyphicon glyphicon-remove" />
                    </button>
                </div>
                <div className="pet-head">
                    <span className="pet-name">{this.props.singleItem.petName}</span>
                    <span className="apt-date pull-right">{this.props.singleItem.aptDate}</span>
                </div>
                <div className="owner-name">
                    <span className="label-item">Owner: </span>
                    {this.props.singleItem.ownerName}
                </div>
                <div className="apt-notes">
                    {this.props.singleItem.aptNotes}
                </div>
            </li>
        );
    }
}

export default AptList;